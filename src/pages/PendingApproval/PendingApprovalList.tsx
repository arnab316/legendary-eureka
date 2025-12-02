import React, { useState, useEffect } from 'react';
import { Eye, FileText, StickyNote, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ApplicationDetailsView from '../ApplicationDetailsView/ApplicationDetailsView';
import apiClient from "@/api/apiClient";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setSelectedApplication } from "@/store/feature/PendingApplication/selectedApplicationSlice";

// Types
interface Application {
  id: number;
  factoryName: string;
  factoryType: string | null;
  section: string | null;
  zone: string;
  eService: string;
  service_id: number;
  reference_no:number;
  applicationNo: string;
  
  applicationDate: string;
  status: string | null;
  statusDate: string;
  gstNo:string;
  udyogAdhar:string;
  tradeLicenceNo:string;
  eneryMeterNo:string;
  cinNo:string;
  factoryZone:number;
  nearestLandmark:string;
  estateType:number;
  mobile:string;
  altMobile:string;
  telephone:string;
  fax:string;
  email:string;
  pan:string;
  plantInstalled:string;
  refNoOfAprovArea:string;
  dateofApArrangement:string;
  nCreatedBy:number;
}

interface ApiCafaDetail {
  cafa_id: number;
  plan_status: string;
  s_factory_name: string;
  s_zone_name: string;
  n_service_id: number;
  n_reference_number: number;
  s_plan_approve_identification_number: string | null;
  s_factory_plan_approval_number: string | null;
  dt_created_date: string;
  s_gstin_no:string;
  s_udyog_aadhaar:string;
  s_trade_license_no:string;
  s_energy_no:string;
  s_cin_no:string;
  n_factory_zone:number;
  s_nearest_landmark:string;
  n_estate_type:number;
  s_comm_mobile:string;
  s_comm_alt_mobile:string;
  s_comm_telephone:string;
  s_comm_fax:string;
  s_comm_email:string;
  s_factory_pan:string;
  s_plant_installed:string;
  s_wbpcb_reference_no:string;
  s_wbpcb_ref_date:string;
  n_created_by:number;
}

interface ApiResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: {
    status: number;
    zone_name: string;
    zone_id: number;
    cafa_details: ApiCafaDetail[];
  };
}

const PendingApprovalList: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState("All Zones");
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [localSelectedApp, setLocalSelectedApp] = useState<{ 
  applicationNo: string; 
  cafaId: number 
} | null>(null);
  const [applicationsData, setApplicationsData] = useState<Application[]>([]);
  const [zones, setZones] = useState<string[]>(["All Zones"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApplications();
  }, []);



  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError(null);


      //   const payload = {
      //   username: "robi_ins",
      //   filter: "pending"
      // };
      // const query = encodeURIComponent(JSON.stringify(payload));

      const token = Cookies.get("token");
      //     const response = await apiClient.post<ApiResponse>(
      //   `/user/get_approval_plan?payload=${payload}`,
      //   {},
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`
      //     }
      //   }
      // );
      const response = await apiClient.get<ApiResponse>(
        `/user/get_approval_plan?payload={"username":"robi_ins","filter":"pending"}`,
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );

      const result: ApiResponse = response.data;

      if (result.success && result.data?.cafa_details) {
        const mappedData: Application[] = result.data.cafa_details.map((item) => ({
          id: item.cafa_id,
          factoryName: item.s_factory_name,
          factoryType: null,
          section: null,
          zone: item.s_zone_name,
          service_id:item.n_service_id,
          reference_no:item.n_reference_number,
          eService:
            item.n_service_id === 4
              ? "New Plan"
              : "Extension of Existing Plan",
          applicationNo:
            item.s_plan_approve_identification_number ||
            item.s_factory_plan_approval_number ||
            "",
             gstNo: item.s_gstin_no ?? "",
             udyogAdhar:item.s_udyog_aadhaar,
          tradeLicenceNo:item.s_trade_license_no,
           eneryMeterNo:item.s_energy_no,
           cinNo:item.s_cin_no,
           factoryZone:item.n_factory_zone,
           nearestLandmark:item.s_nearest_landmark,
           estateType:item.n_estate_type,
           mobile:item.s_comm_mobile,
           altMobile:item.s_comm_alt_mobile,
           telephone:item.s_comm_telephone,
           fax:item.s_comm_fax,
           email:item.s_comm_email,
           pan:item.s_factory_pan,
           plantInstalled:item.s_plant_installed,
           refNoOfAprovArea:item.s_wbpcb_reference_no,
            dateofApArrangement:item.s_wbpcb_ref_date,
            nCreatedBy:item.n_created_by,
          applicationDate: formatDate(item.dt_created_date),
          status: item.plan_status || "Pending",
          statusDate: formatDate(item.dt_created_date),
        }));



        // Cookies.set("applicationId", String(mappedData[0].id));


        setApplicationsData(mappedData);

        // Extract unique zones
        const uniqueZones = Array.from(
          new Set(mappedData.map((app) => app.zone).filter(Boolean))
        );
        setZones(["All Zones", ...uniqueZones]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        setError(err.response?.data?.message || err.message);
      } else {
        console.error("Unexpected error:", err);
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };



  const formatDate = (dateString: string): string => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();

    const suffix = (d: number) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    return `${day}${suffix(day)} ${month} ${year}`;
  };

  // if (selectedApplication) {
  //   return (
  //     <ApplicationDetailsView
  //       applicationNo={selectedApplication.applicationNo}
  //       cafaId={selectedApplication.cafaId}
  //       onBack={() => setSelectedApplication(null)}
  //     />
  //   );
  // }

  // Filter applications based on zone and search
  const filteredApplications = applicationsData.filter(app => {
    const matchesZone = selectedZone === "All Zones" || app.zone === selectedZone;
    const matchesSearch = app.factoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.applicationNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.eService.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesZone && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredApplications.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentApplications = filteredApplications.slice(startIndex, endIndex);

  const handleReset = () => {
    setSelectedZone("All Zones");
    setSearchTerm('');
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-teal-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading applications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchApplications}
            className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <span>🏠</span>
            <span>Home</span>
          </span>
          <span>&gt;</span>
          <span className="text-blue-600">
            <Link to="/">Dashboard</Link>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c3e7a] mb-6">
          List of Pending Approval of Plan Applications
        </h1>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
            <div className="w-full sm:w-96">
              <label className="block text-white bg-[#5a4a7f] px-4 py-2 rounded-t-md font-semibold">
                Zone
              </label>
              <select
                value={selectedZone}
                onChange={(e) => {
                  setSelectedZone(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="All Zones">-- Select Zone --</option>
                {zones.slice(1).map(zone => (
                  <option key={zone} value={zone}>{zone}</option>
                ))}
              </select>
            </div>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-8 rounded-md transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Show</span>
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-700">entries</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label className="text-sm text-gray-700">Search:</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="flex-1 sm:w-64 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>

        {/* Table - Desktop View */}
        <div className="hidden lg:block bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Sl. No</th>
                  <th className="px-4 py-3 text-left font-semibold">Factory Details</th>
                  <th className="px-4 py-3 text-left font-semibold">e-Service</th>
                  <th className="px-4 py-3 text-left font-semibold">Application No. & Date</th>
                  <th className="px-4 py-3 text-left font-semibold">Status & Date</th>
                  <th className="px-4 py-3 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentApplications.map((app, index) => (
                  <tr key={app.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-4 text-gray-800">{startIndex + index + 1}</td>
                    <td className="px-4 py-4">
                      <div className="space-y-1 text-sm">
                        <p className="font-bold text-gray-800 text-base">{app.factoryName}</p>
                        {app.factoryType && (
                          <p className="text-gray-700 font-semibold">[{app.factoryType}]</p>
                        )}
                        {app.section && (
                          <p className="text-gray-700">[{app.section}]</p>
                        )}
                        <p className="text-gray-700">
                          <span className="font-semibold">Zone :</span> {app.zone}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-700">{app.eService}</td>
                    <td className="px-4 py-4">
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-800 font-medium">{app.applicationNo}</p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Date -</span> {app.applicationDate}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1 text-sm">
                        <p className="text-red-600 font-bold text-base">{app.status || 'Pending'}</p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Date -</span> {app.statusDate}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-2 text-sm">
                        <button
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                          
                           onClick={() => {
                        dispatch(setSelectedApplication(app));
                    navigate(`/admin/factory-caf-information?applicationId=${app.id}`);
                          }}
                          // onClick={() => setSelectedApplication({
                          //   applicationNo: app.applicationNo,
                          //   cafaId: app.id

                          // })}
                        >
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </button>
                        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                          onClick={() => {
                          //   setSelectedApplication({
                          //   applicationNo: app.applicationNo,
                          //   cafaId: app.id
                          // })
                            navigate("/applicant/remarks_view", { state: {applicationNo: app.id,
                            referenceNo: app.reference_no ,serviceId : app.service_id } }); 
                          
                          }}
                        >
                          <FileText className="w-4 h-4" />
                          <span>Application Status Details</span>
                        </button>
                        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                          <StickyNote className="w-4 h-4" />
                          <span>Notesheet</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cards - Mobile & Tablet View */}
        <div className="lg:hidden space-y-4 mb-6">
          {currentApplications.map((app, index) => (
            <div key={app.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-semibold text-gray-600">
                  Sl. No. {startIndex + index + 1}
                </span>
                <div className="text-right">
                  <p className="text-red-600 font-bold">{app.status || 'Pending'}</p>
                  <p className="text-sm text-gray-700">Date - {app.statusDate}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-2">Factory Details</h3>
                  <div className="space-y-1 text-sm">
                    <p className="font-bold text-gray-800">{app.factoryName}</p>
                    {app.factoryType && (
                      <p className="font-semibold text-gray-700">[{app.factoryType}]</p>
                    )}
                    {app.section && (
                      <p className="text-gray-700">[{app.section}]</p>
                    )}
                    <p className="text-gray-700">
                      <span className="font-semibold">Zone:</span> {app.zone}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-700">e-Service:</span> {app.eService}
                  </p>
                </div>

                <div className="border-t pt-3">
                  <h3 className="font-semibold text-teal-700 mb-1 text-sm">Application Details</h3>
                  <p className="text-sm text-gray-800 font-medium">{app.applicationNo}</p>
                  <p className="text-sm text-gray-700">Date - {app.applicationDate}</p>
                </div>

                <div className="border-t pt-3 flex flex-col gap-2">
                  <button
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                    // onClick={() => setSelectedApplication({
                    //   applicationNo: app.applicationNo,
                    //   cafaId: app.id
                    // })}
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                    onClick={() => {
                          //   setSelectedApplication({
                          //   applicationNo: app.applicationNo,
                          //   cafaId: app.id
                          // })
                            navigate("/applicant/remarks_view", { state: {applicationNo: app.id,
                            referenceNo: app.reference_no ,serviceId : app.service_id } }); 
                          
                          }}
                  >
                    <FileText className="w-4 h-4" />
                    <span>Application Status Details</span>
                  </button>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm">
                    <StickyNote className="w-4 h-4" />
                    <span>Notesheet</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info and Pagination */}
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredApplications.length)} of {filteredApplications.length} entries
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                First
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Previous
              </button>

              {getPageNumbers().map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 border rounded-md text-sm ${currentPage === page
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'bg-white border-gray-300 hover:bg-gray-100'
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Next
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Last
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingApprovalList;