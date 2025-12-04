import PopupModal from "@/components/PopupModel/PopupModal";
import ApplicationHeader from "@/components/PendingApplicationViewText";
import PopupModal1 from "@/components/PopupModel/PopupModelOwner";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { fetchApplicationById } from "@/store/feature/PendingApplication/selectedApplicationSlice";
import { getStatus, storeStatus } from "@/utils/index";
import apiClient from "@/api/apiClient";
import Cookies from "js-cookie";
import { ArrowLeft, Eye, Loader2 } from "lucide-react";
import { CgFileDocument } from "react-icons/cg";
import { getOccupierDetails } from "@/api/PendingApplication/occupierApi";
// --- Interfaces ---
interface WorkerDetails {
  n_permanent_worker_men: number;
  n_permanent_worker_women: number;
  n_permanent_adolescents_male: number;
  n_permanent_adolescents_female: number;
  n_permanent_children_male: number;
  n_permanent_children_female: number;
  n_contactual_worker_men: number;
  n_contactual_worker_women: number;
  n_contactual_adolescents_male: number;
  n_contactual_adolescents_female: number;
  n_contactual_children_male: number;
  n_contactual_children_female: number;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

interface FieldRowProps {
  label?: string;
  
  value?: string | number;
  isAlternate?: boolean;
  checked?: boolean;
  onCheck?: () => void;
  onValueClick?: () => void;
}

// --- Constants ---
const ALL_FIELDS = [
  's_factory_name', 's_gstin_no', 's_udyog_aadhaar', 's_trade_license_no',
  's_energy_no', 's_cin_no', 'n_factory_zone', 's_factory_address',
  's_nearest_landmark', 'n_estate_type',
  'n_permanent_worker_men', 'n_permanent_worker_women',
  'n_permanent_adolescents_male', 'n_permanent_adolescents_female',
  'n_permanent_children_male', 'n_permanent_children_female',
  'n_contactual_worker_men', 'n_contactual_worker_women',
  'n_contactual_adolescents_male', 'n_contactual_adolescents_female',
  'n_contactual_children_male', 'n_contactual_children_female',
  's_wbpcb_ref_date', 's_comm_mobile', 's_comm_fax', 's_comm_email',
  'n_wbpcb_category_name', 's_wbpcb_reference_no', 's_wbpcb_ref_date',
  's_comm_alt_mobile', 's_comm_telephone', 's_factory_pan', 's_plant_installed'
];

// --- UI Components ---
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-0">
    <div className="text-black bg-gray-300 px-3 py-1.5 font-bold  uppercase">
      {title}
    </div>
    <div className="border-l border-r border-gray-300">{children}</div>
  </div>
);

const FieldRow: React.FC<FieldRowProps> = ({ 
  label, 
  value, 
  isAlternate = false, 
  checked = false, 
  onCheck,
  onValueClick 
}) => (
  <div className={`flex border-b border-gray-300 hover:bg-gray-200 ${isAlternate ? "bg-gray-100" : "bg-white"}`}>

    <div className="w-2/5 px-3 py-2 ">
      <span className="">{label}</span>
    </div>
    <div className="w-3/5 px-3 py-2 flex justify-between items-center">
      <span 
        className={`${onValueClick ? 'cursor-pointer text-blue-600 hover:text-[#7FAFD2] hover:underline' : ''}`}
        onClick={onValueClick}
      >
        {value ?? ""}
      </span>
      <input
        type="checkbox"
        className="w-3 h-3"
        checked={checked}
        onChange={onCheck}
      />
    </div>
  </div>
);

// --- Main Component ---
const CAFInformation: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  
  const [checkedFields, setCheckedFields] = useState<Record<string, boolean>>({});
  const [isInitialized, setIsInitialized] = useState(false);
  const [workerDetails, setWorkerDetails] = useState<WorkerDetails | null>(null);
  const [workerLoading, setWorkerLoading] = useState(false);
  const [workerError, setWorkerError] = useState<string | null>(null);
  const [saveLoading, setSaveLoading] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
const [openModal1, setOpenModal1] = useState(false);
const [openModal2, setOpenModal2] = useState(false);
  const { selected: app, loading, error } = useSelector(
    (state: RootState) => state.selectedApplication
  );




const [tableData, setTableData] = useState<any[]>([]);
const [lloading, setLoading] = useState(false);

useEffect(() => {
  if (openModal) {
    fetchOccupierDetails();
  }
}, [openModal]);

useEffect(() => {
  if (openModal1) {
    fetchOwnerDetails();
  }
}, [openModal1]);


 const fetchOccupierDetails = async () => {
    setLoading(true);

    try {
      const res = await getOccupierDetails({
        app_id: app.cafa_id,
        personnel_type: "OCCUPIER",
      });

      if (res.data.success) {
        setTableData(res.data.data || []);
      } else {
        console.error("Failed:", res.data.message);
      }
    } catch (err: any) {
      console.error("API error:", err);
    }

    setLoading(false);
  };





const fetchOwnerDetails = async () => {
   setLoading(true);

    try {
      const res = await getOccupierDetails({
        app_id: app.cafa_id,
        personnel_type: "OWNER",
      });

      if (res.data.success) {
        setTableData(res.data.data || []);
      } else {
        console.error("Failed:", res.data.message);
      }
    } catch (err: any) {
      console.error("API error:", err);
    }

    setLoading(false);
};

  const applicationId = searchParams.get("applicationId");

  // --- Helper Functions ---
  const formatDate = useCallback((dateString: string): string => {
    if (!dateString) return "-";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "-";
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "short" });
      const year = date.getFullYear();
      const suffix = (d: number) => (d > 3 && d < 21 ? "th" : [, "st", "nd", "rd"][d % 10] || "th");
      return `${day}${suffix(day)} ${month} ${year}`;
    } catch {
      return "-";
    }
  }, []);

  const getRoleId = useCallback((): number => {
    const roleId = Cookies.get("roleId");
    return roleId ? Number(atob(roleId)) : 0;
  }, []);

  // --- Data Fetching ---
  useEffect(() => {
    const fetchApplicationData = async () => {
      const stored = getStatus();
      const roleId = getRoleId();
      
      const fetchParams = {
        username: "robi_ins",
        filter: stored?.filter || "pending",
        id: stored?.id || parseInt(applicationId || "0"),
        n_remark_by_roleid: roleId
      };

      if (stored || applicationId) {
        dispatch(fetchApplicationById(fetchParams));
      }
    };

    fetchApplicationData();
  }, [applicationId, dispatch, getRoleId]);

  // --- Initialize Checked Fields ---
  useEffect(() => {
    if (!app || isInitialized) return;
    
    let checkedList = app.checked_list;
    
    if (typeof checkedList === 'string') {
      try {
        checkedList = JSON.parse(checkedList);
      } catch (e) {
        console.error('Failed to parse checked_list:', e);
        return;
      }
    }
    
    if (Array.isArray(checkedList) && checkedList.length > 0) {
      const initialChecked: Record<string, boolean> = {};
      checkedList.forEach((field: string) => {
        initialChecked[field] = true;
      });
      setCheckedFields(initialChecked);
      setIsInitialized(true);
    }
  }, [app, isInitialized]);

  // --- Fetch Worker Details ---
  useEffect(() => {
    const fetchWorkerDetails = async () => {
      if (!app?.n_created_by) {
        setWorkerError("User ID not found in application data");
        return;
      }

      try {
        setWorkerLoading(true);
        setWorkerError(null);

        const token = Cookies.get("token");
        if (!token) throw new Error("No authentication token found");

        const response = await apiClient.get(
          `/user/get_worker_details?u_id=${app.n_created_by}`,
          { headers: { Authorization: `${token}` } }
        );

        if (response.data.success && response.data.data?.length > 0) {
          setWorkerDetails(response.data.data[0]);
        } else {
          setWorkerError("No worker details found");
        }
      } catch (error: any) {
        setWorkerError(error.message || "Failed to fetch worker details");
      } finally {
        setWorkerLoading(false);
      }
    };

    fetchWorkerDetails();
  }, [app]);

  // --- Checkbox Handlers ---
  const handleFieldCheck = useCallback((fieldName: string) => {
    setCheckedFields(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }));
  }, []);

  const isFieldChecked = useCallback((fieldName: string): boolean => {
    return checkedFields[fieldName] ?? false;
  }, [checkedFields]);

  const areAllFieldsChecked = useCallback((): boolean => {
    return ALL_FIELDS.every(field => checkedFields[field] === true);
  }, [checkedFields]);

  const handleCheckAll = useCallback(() => {
    const shouldCheckAll = !areAllFieldsChecked();
    const newCheckedFields: Record<string, boolean> = {};
    ALL_FIELDS.forEach(field => {
      newCheckedFields[field] = shouldCheckAll;
    });
    setCheckedFields(newCheckedFields);
  }, [areAllFieldsChecked]);

  const getCheckedList = useCallback((): string[] => {
    return Object.entries(checkedFields)
      .filter(([_, isChecked]) => isChecked)
      .map(([fieldName]) => fieldName);
  }, [checkedFields]);

  // --- Save Handler ---
  const handleSave = async () => {
    if (!app) return;

    const checkedList = getCheckedList();
const roleId = Cookies.get("roleId");
const userId = Cookies.get("userId");
    try {
      setSaveLoading(true);
      setSaveError(null);

      const token = Cookies.get("token");
      if (!token) throw new Error("No authentication token found");

      const requestBody = {
        u_id: userId ? Number(atob(userId)) : 0,
        verify_details: checkedList,
        n_service_id: app.n_service_id,
        n_factory_typeid: app.n_factory_typeid,
        n_id: app.cafa_id,
        n_reference_number: app.n_reference_number,
        n_rid: roleId ? Number(atob(roleId)) : 0// Using hardcoded value as in original code
      };

      const response = await apiClient.post('/user/verify-caf-info', requestBody);

      if (response.data.success) {
        alert('Verification details saved successfully!');
      } else {
        throw new Error(response.data.message || 'Failed to save verification details');
      }
    } catch (error: any) {
      console.error('Save error:', error);
      setSaveError(error.message || 'Failed to save verification details');
      alert(error.message || 'Failed to save verification details');
    } finally {
      setSaveLoading(false);
    }
  };

  // --- Navigation Handlers ---
  const onBack = () => navigate(-1);

  const handleRetry = () => {
    const roleId = getRoleId();
    if (applicationId) {
      dispatch(fetchApplicationById({ 
        username: "robi_ins", 
        filter: "pending", 
        id: parseInt(applicationId), 
        n_remark_by_roleid: roleId 
      }));
    }
  };

  // --- Store Status for Reload ---
  useEffect(() => {
    if (app) {
      storeStatus("pending", app.n_id || app.id, "CAF");
    }
  }, [app]);

  // --- Loading State ---
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-teal-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading application data...</p>
        </div>
      </div>
    );
  }

  // --- Error State ---
  if (error && !app) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // --- No Data State ---
  if (!app) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No Application Data Found.</p>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-[#1D536B] text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Back to List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}

        {
  openModal2 && (
    <PopupModal
      isOpen={openModal2}
      onClose={() => setOpenModal2(false)}
      title="View Plan Condition"
     
    >
      <div className="max-h-[70vh] overflow-y-auto">
        {/* Header Section */}
        <div className="bg-[#158E94] text-white p-3 font-semibold">
          The plans will be approved subject to the following conditions ::
        </div>

        {/* Condition 1 */}
        <div className="bg-white p-1">
          <p className="text-gray-900">
            1. Approval of the design and the site or situation of the septic tank. latrines shall be obtained from the Chief Engineer, Public Health Engineering, Government of West Bengal.
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#158E94] h-4"></div>

        {/* Condition 2 */}
        <div className="bg-white p-1">
          <p className="text-gray-900">
            2. Approval shall be obtained from the West Bengal Pollution Control Board and the Public Health ENgineering Directorate, Government of West Bengal in respect of the arrangement for disposal of trade waste and effluents (including atmospheric emission).
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#158E94] h-4"></div>

        {/* Condition 3 */}
        <div className="bg-white p-1">
          <p className="text-gray-900">
            3. Approval shall be obtained from Local authority (Municipal Corporation / Municipality, Notified Area, Authority / Anchal Panchayat etc.) in respect of safe design and construction of the buildings/sheds/structures etc.
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#158E94] h-4"></div>

        {/* Condition 4 */}
        <div className="bg-white p-1">
          <p className="text-gray-900">
            4. Adequate ventilation by circulation of the fresh air, adequate means of escape in case of fire, safe means of access to every place of work, adequate fire fighting arrangement, effective arrangement to prevent escape of dust/fumesmoke shall be provided.
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#158E94] h-2"></div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#158E94] text-white">
                <th className="p-3 text-left font-semibold border-r border-teal-500">Sl. N</th>
                <th className="p-3 text-left font-semibold border-r border-teal-500">Designation</th>
                <th className="p-3 text-left font-semibold border-r border-teal-500">Name</th>
                <th className="p-3 text-left font-semibold border-r border-teal-500">Conditions</th>
                <th className="p-3 text-left font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border-r border-gray-300">0</td>
                <td className="p-3 border-r border-gray-300"></td>
                <td className="p-3 border-r border-gray-300"></td>
                <td className="p-3 border-r border-gray-300"></td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PopupModal>
  )
}
      
<ApplicationHeader />
          

      {/* <div className="bg-white border-b border-gray-300 px-6 py-4">
        <div className="max-w-7xl mx-auto">
                
          

          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800 mb-3">
              Application for Approval of Plan
            </h1>
            <div className="text-sm text-gray-700 space-y-1">
              <p className="text-lg font-semibold text-gray-900">
                {app.s_factory_name}
              </p>
              <p>
                <span className="font-medium">Zone:</span> {app.s_zone_name}
              </p>
              <p>
                <span className="font-medium">Plan Approval No:</span>{" "}
                {app.s_plan_approve_identification_number}
              </p>
              <p>
                <span className="font-medium">Application Date:</span>{" "}
                {formatDate(app.dt_created_date)}
              </p>
              <p>
                <span className="font-medium">Status Date:</span>{" "}
                {formatDate(app.dt_modification_date)}
              </p>
              <p className="text-xs text-gray-600 italic mt-3">
                N.B: All inputs are provided by applicant. All inputs are to be verified by officials.
              </p>
            </div>
          </div>
        </div>
      </div> */}


 <p className="mb-3 font-semibold text-gray-800">
        Application is submitted at AD end
      </p>

         <div className="mb-4 space-x-2 flex">
                  <button className="border-2 border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 flex items-center space-x-1">
                    <CgFileDocument size={20} />
                    <span>View Notesheet</span>
                  </button>
                  <button  onClick={() => setOpenModal2(true)} className="border-2 border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 flex items-center space-x-1">
                    <CgFileDocument size={20} />
                    <span>View Condition</span>
                  </button>
                </div>



      {/* Parameter Header */}
      <div className="bg-[#1D536B] text-white px-4 py-2 flex items-center justify-between">
        <h1 className="text-sm font-bold">Parameter</h1>
        <h1 className="text-sm font-bold">Input</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-bold">Check?</h1>
          <input
            type="checkbox"
            checked={areAllFieldsChecked()}
            onChange={handleCheckAll}
            className="w-4 h-4"
          />
        </div>
      </div>

      {/* Body */}
      <div className="w-full">
        <div className="border border-gray-300">
          {/* FACTORY INFORMATION */}
          <Section title="FACTORY INFORMATION">
            <FieldRow
              label="Factory Name"
              value={app.s_factory_name}
              checked={isFieldChecked('s_factory_name')}
              onCheck={() => handleFieldCheck('s_factory_name')}
            />
            <FieldRow
              label="GSTIN Number"
              value={app.s_gstin_no}
              isAlternate
              checked={isFieldChecked('s_gstin_no')}
              onCheck={() => handleFieldCheck('s_gstin_no')}
            />
            <FieldRow
              label="Udyog Aadhaar No."
              value={app.s_udyog_aadhaar}
              checked={isFieldChecked('s_udyog_aadhaar')}
              onCheck={() => handleFieldCheck('s_udyog_aadhaar')}
            />
            <FieldRow
              label="Trade License No."
              value={app.s_trade_license_no}
              isAlternate
              checked={isFieldChecked('s_trade_license_no')}
              onCheck={() => handleFieldCheck('s_trade_license_no')}
            />
            <FieldRow
              label="Energy Meter No."
              value={app.s_energy_no}
              checked={isFieldChecked('s_energy_no')}
              onCheck={() => handleFieldCheck('s_energy_no')}
            />
            <FieldRow
              label="CIN No."
              value={app.s_cin_no}
              isAlternate
              checked={isFieldChecked('s_cin_no')}
              onCheck={() => handleFieldCheck('s_cin_no')}
            />
          </Section>

          {/* LOCATION OF FACTORY */}
          <Section title="LOCATION OF FACTORY">
            <FieldRow
              label="Zone"
              value={app.n_factory_zone}
              checked={isFieldChecked('n_factory_zone')}
              onCheck={() => handleFieldCheck('n_factory_zone')}
            />
            <FieldRow
              label="Factory Address"
              value={app.s_factory_address || ""}
              isAlternate
              checked={isFieldChecked('s_factory_address')}
              onCheck={() => handleFieldCheck('s_factory_address')}
            />
            <FieldRow
              label="Nearest Landmark"
              value={app.s_nearest_landmark}
              checked={isFieldChecked('s_nearest_landmark')}
              onCheck={() => handleFieldCheck('s_nearest_landmark')}
            />
            <FieldRow
              label="Estate Type"
              value={app.n_estate_type}
              isAlternate
              checked={isFieldChecked('n_estate_type')}
              onCheck={() => handleFieldCheck('n_estate_type')}
            />
          </Section>

          {/* ADDRESS OF THE REGISTERED/HEAD OFFICE */}
          <Section title="ADDRESS OF THE REGISTERED/HEAD OFFICE">
            <FieldRow
              label="Registered/Head office Address"
              value={app.s_factory_address}
              checked={isFieldChecked('s_factory_address')}
              onCheck={() => handleFieldCheck('s_factory_address')}
            />
            <FieldRow
              label="Mobile"
              value={app.s_comm_mobile || ""}
              isAlternate
              checked={isFieldChecked('s_comm_mobile')}
              onCheck={() => handleFieldCheck('s_comm_mobile')}
            />
            <FieldRow
              label="Alternate Mobile"
              value={app.s_comm_alt_mobile}
              checked={isFieldChecked('s_comm_alt_mobile')}
              onCheck={() => handleFieldCheck('s_comm_alt_mobile')}
            />
            <FieldRow
              label="Telephone"
              value={app.s_comm_telephone}
              isAlternate
              checked={isFieldChecked('s_comm_telephone')}
              onCheck={() => handleFieldCheck('s_comm_telephone')}
            />
            <FieldRow
              label="Fax"
              value={app.s_comm_fax}
              checked={isFieldChecked('s_comm_fax')}
              onCheck={() => handleFieldCheck('s_comm_fax')}
            />
            <FieldRow
              label="Email"
              value={app.s_comm_email}
              isAlternate
              checked={isFieldChecked('s_comm_email')}
              onCheck={() => handleFieldCheck('s_comm_email')}
            />
          </Section>

          {/* COMMUNICATION ADDRESS */}
          <Section title="COMMUNICATION ADDRESS">
            <FieldRow
              label="Address"
              value={app.s_factory_address}
              checked={isFieldChecked('s_factory_address')}
              onCheck={() => handleFieldCheck('s_factory_address')}
            />
          </Section>

          {/* PAN OF BUSINESS ESTABLISHMENT */}
          <Section title="PAN OF BUSINESS ESTABLISHMENT / FACTORY / COMPANY">
            <FieldRow
              label="PAN"
              value={app.s_factory_pan}
              checked={isFieldChecked('s_factory_pan')}
              onCheck={() => handleFieldCheck('s_factory_pan')}
            />
          </Section>

          {/* DETAILS OF OCCUPIER */}
          <Section title="DETAILS OF OCCUPIER">
            <FieldRow 
              label="Occupier Details"
              value="View Occupier Details"
              onValueClick={() => setOpenModal(true)}
              checked={isFieldChecked('n_occupier_details')}
              onCheck={() => handleFieldCheck('n_occupier_details')}
            />
          </Section>

          {/* DETAILS OF OWNER */}
          <Section title="DETAILS OF OWNER">
            <FieldRow
              label="Owner Details"
              onValueClick={() => setOpenModal1(true)}
              value="View Owner Details"
              checked={isFieldChecked('s_owner_details')}
              onCheck={() => handleFieldCheck('s_owner_details')}
            />
          </Section>

          {/* PARTICULARS OF PLAN TO BE INSTALLED */}
          <Section title="PARTICULARS OF PLAN TO BE INSTALLED">
            <FieldRow
              label="Plant To be Installed"
              value={app.s_plant_installed}
              checked={isFieldChecked('s_plant_installed')}
              onCheck={() => handleFieldCheck('s_plant_installed')}
            />
          </Section>

          {/* FACTORY IDENTIFICATION ACCORDING TO WBPCB */}
          <Section title="FACTORY IDENTIFICATION ACCORDING TO WBPCB">
            <FieldRow
              label="(i) Categories of WBPCB"
              value={app.n_wbpcb_category_name || ""}
              isAlternate
              checked={isFieldChecked('n_wbpcb_category_name')}
              onCheck={() => handleFieldCheck('n_wbpcb_category_name')}
            />
            <FieldRow
              label="(ii) Reference number of approval of arrangements"
              value={app.s_wbpcb_reference_no}
              checked={isFieldChecked('s_wbpcb_reference_no')}
              onCheck={() => handleFieldCheck('s_wbpcb_reference_no')}
            />
            <FieldRow
              label="(iii) Date of approval of arrangements"
              value={app.s_wbpcb_ref_date}
              isAlternate
              checked={isFieldChecked('s_wbpcb_ref_date')}
              onCheck={() => handleFieldCheck('s_wbpcb_ref_date')}
            />
          </Section>

          {/* WORKER DETAILS (PERMANENT) */}
          <Section title="WORKER DETAILS (PERMANENT)">
            {renderWorkerDetails('permanent', workerLoading, workerError, workerDetails, isFieldChecked, handleFieldCheck)}
          </Section>

          {/* WORKER DETAILS (CONTRACTUAL) */}
          <Section title="WORKER DETAILS (CONTRACTUAL)">
            {renderWorkerDetails('contractual', workerLoading, workerError, workerDetails, isFieldChecked, handleFieldCheck)}
          </Section>

          {/* Action Buttons */}
          <div className="flex justify-between p-4 bg-gray-50 border-t border-gray-300">
            <button
              onClick={onBack}
              className="px-6 py-2 bg-[#001934] text-white rounded text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Back to list
            </button>
            <button
              onClick={handleSave}
              disabled={saveLoading}
              className="px-6 py-2 bg-[#23272B] text-white rounded text-sm font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {saveLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {saveLoading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
  <PopupModal
    isOpen={openModal}
    onClose={() => setOpenModal(false)}
    title="Occupier Details"
  >
    <div className="p-4">

      {loading ? (
        <p className="text-gray-600">Loading occupier details...</p>
      ) : tableData.length === 0 ? (
        <p className="text-gray-600">No occupier details found.</p>
      ) : (
        
<table className="w-full border-collapse">
  <thead>
    <tr className="bg-teal-700 text-white">
      <th className="p-2 border">Sl. No</th>
      <th className="p-2 border">Details of Occupier</th>
      <th className="p-2 border">Present Address</th>
      <th className="p-2 border">Permanent Address</th>
    </tr>
  </thead>

  <tbody>
    {tableData?.map((item: any, index: number) => {
      const fullName = `${item.s_personnel_fname ?? ""} ${item.s_personnel_mname ?? ""} ${item.s_personnel_lname ?? ""}`;

      return (
        <tr key={index} className="align-top">
          {/* Serial No */}
          <td className="border p-2 w-[60px]">{index + 1}</td>

          {/* -------- DETAILS OF OCCUPIER COLUMN -------- */}
          <td className="border p-4 text-sm leading-6">
            <div><b>{fullName}</b></div>

            <div>
              <b>Father/Husband :-</b> {item.s_father_husband_name}
            </div>

            <div>
              <b>Age :-</b> {item.n_age}
            </div>

            <div>
              <b>Telephone No. :-</b> {item.s_telephone ?? "-"}
            </div>

            <div>
              <b>Mobile No. :-</b> {item.s_mobile_no}
            </div>

            <div>
              <b>Email id :-</b> {item.s_email_id}
            </div>

            <div>
              <b>Fax No. :-</b> {item.s_fax_no ?? "-"}
            </div>
          </td>

          {/* -------- PRESENT ADDRESS COLUMN -------- */}
          <td className="border p-4 text-sm leading-6">
            <div><b>Aadhaar No :-</b> {item.s_aadhaar_oprsntadr_no ?? "-"}</div>

            <div>
              <b>Address :-</b> {item.s_addrline_oprsntadr},
              P.O.- {item.s_postoffice_oprsntadr},
              P.S.- {item.s_policestation_oprsntadr ?? item.s_police_station_oprsntadr},
              {item.s_district_oprsntadr},
              PIN- {item.s_pincode_oprsntadr}
            </div>

            <div>
              <b>Street Name :-</b> {item.s_street_name_oprsntadr}
            </div>

            <div>
              <b>House No. :-</b> {item.s_house_no_oprsntadr}
            </div>
          </td>

          {/* -------- PERMANENT ADDRESS COLUMN -------- */}
          <td className="border p-4 text-sm leading-6">
            <div><b>Aadhaar No :-</b> {item.s_aadhaar_oprmntadr_no ?? "-"}</div>

            <div>
              <b>Address :-</b> {item.s_addrline_oprmntadr},
              P.O.- {item.s_postoffice_oprmntadr},
              P.S.- {item.s_police_station_oprmntadr ?? item.s_policestation_oprmntadr},
              {item.s_district_oprmntadr},
              PIN- {item.s_pincode_oprmntadr}
            </div>

            <div>
              <b>Street Name :-</b> {item.s_street_name_oprmntadr ?? "-"}
            </div>

            <div>
              <b>House No. :-</b> {item.s_house_no_oprmntadr}
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
      )}

    </div>
  </PopupModal>
)}








     {openModal1 && (
  <PopupModal
    isOpen={openModal1}
    onClose={() => setOpenModal1(false)}
    title="Owner Details"
  >
    <div className="p-4">

      {loading ? (
        <p className="text-gray-600">Loading occupier details...</p>
      ) : tableData.length === 0 ? (
        <p className="text-gray-600">No occupier details found.</p>
      ) : (
        
<table className="w-full border-collapse">
  <thead>
    <tr className="bg-teal-700 text-white">
      <th className="p-2 border">Sl. No</th>
      <th className="p-2 border">Details of Occupier</th>
      <th className="p-2 border">Present Address</th>
      <th className="p-2 border">Permanent Address</th>
    </tr>
  </thead>

  <tbody>
    {tableData?.map((item: any, index: number) => {
      const fullName = `${item.s_personnel_fname ?? ""} ${item.s_personnel_mname ?? ""} ${item.s_personnel_lname ?? ""}`;

      return (
        <tr key={index} className="align-top">
          {/* Serial No */}
          <td className="border p-2 w-[60px]">{index + 1}</td>

          {/* -------- DETAILS OF OCCUPIER COLUMN -------- */}
          <td className="border p-4 text-sm leading-6">
            <div><b>{fullName}</b></div>

            <div>
              <b>Father/Husband :-</b> {item.s_father_husband_name}
            </div>

            <div>
              <b>Age :-</b> {item.n_age}
            </div>

            <div>
              <b>Telephone No. :-</b> {item.s_telephone ?? "-"}
            </div>

            <div>
              <b>Mobile No. :-</b> {item.s_mobile_no}
            </div>

            <div>
              <b>Email id :-</b> {item.s_email_id}
            </div>

            <div>
              <b>Fax No. :-</b> {item.s_fax_no ?? "-"}
            </div>
          </td>

          {/* -------- PRESENT ADDRESS COLUMN -------- */}
          <td className="border p-4 text-sm leading-6">
            <div><b>Aadhaar No :-</b> {item.s_aadhaar_oprsntadr_no ?? "-"}</div>

            <div>
              <b>Address :-</b> {item.s_addrline_oprsntadr},
              P.O.- {item.s_postoffice_oprsntadr},
              P.S.- {item.s_policestation_oprsntadr ?? item.s_police_station_oprsntadr},
              {item.s_district_oprsntadr},
              PIN- {item.s_pincode_oprsntadr}
            </div>

            <div>
              <b>Street Name :-</b> {item.s_street_name_oprsntadr}
            </div>

            <div>
              <b>House No. :-</b> {item.s_house_no_oprsntadr}
            </div>
          </td>

          {/* -------- PERMANENT ADDRESS COLUMN -------- */}
          <td className="border p-4 text-sm leading-6">
            <div><b>Aadhaar No :-</b> {item.s_aadhaar_oprmntadr_no ?? "-"}</div>

            <div>
              <b>Address :-</b> {item.s_addrline_oprmntadr},
              P.O.- {item.s_postoffice_oprmntadr},
              P.S.- {item.s_police_station_oprmntadr ?? item.s_policestation_oprmntadr},
              {item.s_district_oprmntadr},
              PIN- {item.s_pincode_oprmntadr}
            </div>

            <div>
              <b>Street Name :-</b> {item.s_street_name_oprmntadr ?? "-"}
            </div>

            <div>
              <b>House No. :-</b> {item.s_house_no_oprmntadr}
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
      )}

    </div>
  </PopupModal>
)}














    </div>
  );
};

// --- Helper Component for Worker Details ---
const renderWorkerDetails = (
  type: 'permanent' | 'contractual',
  loading: boolean,
  error: string | null,
  details: WorkerDetails | null,
  isFieldChecked: (field: string) => boolean,
  handleFieldCheck: (field: string) => void
) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="w-6 h-6 animate-spin text-teal-600" />
        <span className="ml-2 text-sm text-gray-600">Loading worker details...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="text-sm text-red-600">{error}</span>
      </div>
    );
  }

  if (!details) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="text-sm text-gray-600">No worker details available</span>
      </div>
    );
  }

  const fields = type === 'permanent' ? [
    { label: "No. of Male Worker", field: "n_permanent_worker_men", value: details.n_permanent_worker_men },
    { label: "No. of Female Worker", field: "n_permanent_worker_women", value: details.n_permanent_worker_women, alternate: true },
    { label: "No. of Male Adolescents Worker", field: "n_permanent_adolescents_male", value: details.n_permanent_adolescents_male },
    { label: "No. of Female Adolescents Worker", field: "n_permanent_adolescents_female", value: details.n_permanent_adolescents_female, alternate: true },
    { label: "No. of Male Children Worker", field: "n_permanent_children_male", value: details.n_permanent_children_male },
    { label: "No. of Female Children Worker", field: "n_permanent_children_female", value: details.n_permanent_children_female, alternate: true }
  ] : [
    { label: "No. of Male Worker", field: "n_contactual_worker_men", value: details.n_contactual_worker_men },
    { label: "No. of Female Worker", field: "n_contactual_worker_women", value: details.n_contactual_worker_women, alternate: true },
    { label: "No. of Male Adolescents Worker", field: "n_contactual_adolescents_male", value: details.n_contactual_adolescents_male },
    { label: "No. of Female Adolescents Worker", field: "n_contactual_adolescents_female", value: details.n_contactual_adolescents_female, alternate: true },
    { label: "No. of Male Children Worker", field: "n_contactual_children_male", value: details.n_contactual_children_male },
    { label: "No. of Female Children Worker", field: "n_contactual_children_female", value: details.n_contactual_children_female, alternate: true }
  ];

  return (
    <>
      {fields.map((field, index) => (
        <FieldRow
          key={field.field}
          label={field.label}
          value={field.value}
          isAlternate={field.alternate}
          checked={isFieldChecked(field.field)}
          onCheck={() => handleFieldCheck(field.field)}
        />
      ))}
    </>
  );
};

export default CAFInformation;