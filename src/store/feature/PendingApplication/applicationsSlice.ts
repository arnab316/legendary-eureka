import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'

interface Application {
  id: number
  factoryName: string
  factoryType: string | null
  section: string | null
  zone: string
  eService: string
  applicationNo: string
  applicationDate: string
  status: string | null
  statusDate: string
}

interface ApiCafaDetail {
  cafa_id: number
  plan_status: string
  s_factory_name: string
  s_zone_name: string
  n_service_id: number
  s_plan_approve_identification_number: string | null
  s_factory_plan_approval_number: string | null
  dt_created_date: string
}

interface ApiResponse {
  success: boolean
  message: string
  statusCode: number
  data: {
    status: number
    zone_name: string
    zone_id: number
    cafa_details: ApiCafaDetail[]
  }
}

interface ApplicationsState {
  data: Application[]
  zones: string[]
  loading: boolean
  error: string | null
}

const initialState: ApplicationsState = {
  data: [],
  zones: ['All Zones'],
  loading: false,
  error: null,
}

// Async thunk
export const fetchApplications = createAsyncThunk<
  Application[],
  void,
  { rejectValue: string }
>('applications/fetchApplications', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      'http://localhost:4000/user/get_approval_plan?payload={"username":"robi_ins","filter":"pending"}',
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    )

    if (!response.ok) throw new Error('Failed to fetch applications')

    const result: ApiResponse = await response.json()
    if (!result.success || !result.data.cafa_details) {
      throw new Error('Invalid response format')
    }

    const formatDate = (dateString: string): string => {
      if (!dateString) return '-'
      const date = new Date(dateString)
      const day = date.getDate()
      const month = date.toLocaleString('en-US', { month: 'short' })
      const year = date.getFullYear()
      const suffix = (d: number) => {
        if (d > 3 && d < 21) return 'th'
        switch (d % 10) {
          case 1:
            return 'st'
          case 2:
            return 'nd'
          case 3:
            return 'rd'
          default:
            return 'th'
        }
      }
      return `${day}${suffix(day)} ${month} ${year}`
    }

    return result.data.cafa_details.map((item) => ({
      id: item.cafa_id,
      factoryName: item.s_factory_name,
      factoryType: null,
      section: null,
      zone: item.s_zone_name,
      eService:
        item.n_service_id === 4
          ? 'New Plan'
          : 'Extension of Existing Plan',
      applicationNo:
        item.s_plan_approve_identification_number ||
        item.s_factory_plan_approval_number ||
        '',
      applicationDate: formatDate(item.dt_created_date),
      status: item.plan_status || 'Pending',
      statusDate: formatDate(item.dt_created_date),
    }))
  } catch (err) {
    return rejectWithValue((err as Error).message)
  }
})

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchApplications.fulfilled, (state, action: PayloadAction<Application[]>) => {
        state.loading = false
        state.data = action.payload
        const uniqueZones = Array.from(new Set(action.payload.map((a) => a.zone)))
        state.zones = ['All Zones', ...uniqueZones]
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Something went wrong'
      })
  },
})

export default applicationsSlice.reducer