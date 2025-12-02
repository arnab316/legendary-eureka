import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import ApplicationDetailsView from "../ApplicationDetailsView/ApplicationDetailsView";
import { FaRegEye } from "react-icons/fa";
//  Data Model
interface Application {
  id: number;
  factoryName: string;
  section: string;
  zone: string;
  applicationNo: string;
  applicationDate: string;
  planApprovalNo: string;
  planApprovalDate: string;
  registrationNo: string;
  registrationDate: string;
  licenceNo: string;
  licenceDate: string;
  expiryDate: string;
  eService: string;
  status: string;
  statusDate: string;
}

// ✅ Sample Data with status changed to "Rejected"
const applicationsData: Application[] = [
  {
    id: 1,
    factoryName: "M/S. RAJKAMAL & CO.",
    section: "Section 2m(i)",
    zone: "Haldia",
    applicationNo: "CAF250A796463",
    applicationDate: "18-09-2025",
    planApprovalNo: "700",
    planApprovalDate: "18-09-2025",
    registrationNo: "038/MD(E)/X/2025",
    registrationDate: "27-09-2025",
    licenceNo: "24770",
    licenceDate: "27-09-2025",
    expiryDate: "06th Aug 2027",
    eService: "Factory Registration and grant of license",
    status: "Rejected",
    statusDate: "27th Sep 2025",
  },
  {
    id: 2,
    factoryName: "MAA BIPATTARINI MINI RICE MILL",
    section: "Section 2m(i)",
    zone: "Haldia",
    applicationNo: "CAF250A784540",
    applicationDate: "15-09-2025",
    planApprovalNo: "666",
    planApprovalDate: "12-09-2025",
    registrationNo: "037/MD(E)/X/2025",
    registrationDate: "27-09-2025",
    licenceNo: "24769",
    licenceDate: "27-09-2025",
    expiryDate: "11th Apr 2030",
    eService: "Factory Registration and grant of license",
    status: "Rejected",
    statusDate: "27th Sep 2025",
  },
  {
    id: 3,
    factoryName: "SUNRISE TEXTILES",
    section: "Section 2m(ii)",
    zone: "Howrah",
    applicationNo: "CAF250A789123",
    applicationDate: "20-08-2025",
    planApprovalNo: "705",
    planApprovalDate: "22-08-2025",
    registrationNo: "039/MD(E)/X/2025",
    registrationDate: "29-08-2025",
    licenceNo: "24800",
    licenceDate: "29-08-2025",
    expiryDate: "15th Jul 2028",
    eService: "Factory Registration and grant of license",
    status: "Rejected",
    statusDate: "29th Aug 2025",
  },
  {
    id: 4,
    factoryName: "RIVERDALE COTTON MILLS",
    section: "Section 2m(i)",
    zone: "Kolkata",
    applicationNo: "CAF250A785678",
    applicationDate: "10-07-2025",
    planApprovalNo: "670",
    planApprovalDate: "11-07-2025",
    registrationNo: "040/MD(E)/X/2025",
    registrationDate: "15-07-2025",
    licenceNo: "24780",
    licenceDate: "15-07-2025",
    expiryDate: "30th Sep 2029",
    eService: "Factory Registration and grant of license",
    status: "Rejected",
    statusDate: "15th Jul 2025",
  },
  {
    id: 5,
    factoryName: "GREENFIELD PAPER MILLS",
    section: "Section 2m(ii)",
    zone: "Durgapur",
    applicationNo: "CAF250A799999",
    applicationDate: "05-10-2025",
    planApprovalNo: "710",
    planApprovalDate: "06-10-2025",
    registrationNo: "041/MD(E)/X/2025",
    registrationDate: "10-10-2025",
    licenceNo: "24790",
    licenceDate: "10-10-2025",
    expiryDate: "12th Dec 2031",
    eService: "Factory Registration and grant of license",
    status: "Rejected",
    statusDate: "10th Oct 2025",
  },
];

const RejectedApplicationRenewal: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);

  if (selectedApplication) {
    return (
      <ApplicationDetailsView
        applicationNo={selectedApplication}
        onBack={() => setSelectedApplication(null)}
      />
    );
  }

  // 🔹 Filtering
  const filteredApplications = applicationsData.filter(
    (app) =>
      app.factoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.applicationNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 Pagination
  const totalPages = Math.ceil(filteredApplications.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentApplications = filteredApplications.slice(startIndex, endIndex);

  // Reset search handler
  const resetSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 float-right">
          <span className="flex items-center gap-1">
            <AiFillDashboard />
            <span>Home</span>
          </span>
          <span>&gt;</span>
          <span className="text-blue-600">
            <Link to="/user/dashboard">Dashboard</Link>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-[#2c3e7a] mb-6">
          List of Application for Renewal of License
        </h1>

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
                <option value={3}>3</option>
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
              <button
                onClick={resetSearch}
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-1.5 px-4 rounded-md transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap w-[5%]">
                    Sl. No.
                  </th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap w-[40%]">
                    Factory Details
                  </th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap w-[25%]">
                    Service Name
                  </th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap w-[15%]">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap w-[15%]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentApplications.map((app, index) => (
                  <tr key={app.id} className="border-b bg-white hover:bg-gray-50 align-top">
                    {/* SL. No */}
                    <td className="px-4 py-4 text-gray-800 font-medium align-top">
                      {startIndex + index + 1}
                    </td>

                    {/* Factory Details */}
                    <td className="px-4 py-4 text-sm leading-6">
                      <p>
                        <span className="font-bold">Factory Name - </span>
                        {app.factoryName}
                      </p>
                      <p>[{app.section}]</p>
                      <p>
                        <span className="font-semibold">Zone -</span> {app.zone}
                      </p>
                      <p>
                        <span className="font-semibold">Application No. - </span>
                        <span className="bg-yellow-100 px-1 rounded">
                          {app.applicationNo}
                        </span>{" "}
                        <span className="font-semibold">Date - </span>
                        {app.applicationDate}
                      </p>
                      <p>
                        <span className="font-semibold">Plan Approval No. - </span>
                        {app.planApprovalNo}{" "}
                        <span className="font-semibold">& Date - </span>
                        {app.planApprovalDate}
                      </p>
                      <p>
                        <span className="font-semibold">Registration No. - </span>
                        {app.registrationNo}{" "}
                        <span className="font-semibold">& Date - </span>
                        {app.registrationDate}
                      </p>
                      <p>
                        <span className="font-semibold">Licence No. - </span>
                        {app.licenceNo}{" "}
                        <span className="font-semibold">& Date - </span>
                        {app.licenceDate}
                      </p>
                      <p className="text-red-600 font-semibold">
                        Expired: {app.expiryDate}
                      </p>
                    </td>

                    {/* Service Name */}
                    <td className="px-4 py-4 text-sm text-gray-800">
                      {app.eService}
                      <p>
                        <span className="font-semibold">Application Date: </span>
                        {app.applicationDate}
                      </p>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-4 text-sm">
                      <p className="font-bold text-gray-800">{app.status}</p>
                      <p>
                        <span className="font-semibold">Date:</span> {app.statusDate}
                      </p>
                    </td>

                    {/* Action (only View and Acknowledgment) */}
                    <td className="px-4 py-4 text-sm space-y-1 text-blue-700">
                      <Link
                        to={`/application/view/${app.applicationNo}`}
                        className="hover:underline block flex items-center gap-1"
                      >
                        <FaRegEye />View
                      </Link>
                      <Link
                        to={`/acknowledgment/${app.applicationNo}`}
                        className="hover:underline block"
                      >
                        Acknowledgment
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredApplications.length)} of {filteredApplications.length} entries
            </p>

            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                  First
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                  Previous
                </button>

                {getPageNumbers().map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 border rounded-md text-sm ${
                      currentPage === page
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
                  className="px-3 py-1 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                  Next
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                  Last
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectedApplicationRenewal;
