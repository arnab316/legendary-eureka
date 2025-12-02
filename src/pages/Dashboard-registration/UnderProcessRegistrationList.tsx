import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import ApplicationDetailsView from '../ApplicationDetailsView/ApplicationDetailsView';

// Types
interface Application {
  id: number;
  factoryName: string;
  factoryType: string;
  section: string;
  zone: string;
  eService: string;
  applicationNo: string;
  applicationDate: string;
  status: string;
  statusDate: string;
  planApprovalNo?: string;
  planApprovalDate?: string;
}

const UnderProcessRegistrationList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);

  // 🔸 Empty data (you can replace with API data later)
  const applicationsData: Application[] = [];

  if (selectedApplication) {
    return (
      <ApplicationDetailsView
        applicationNo={selectedApplication}
        onBack={() => setSelectedApplication(null)}
      />
    );
  }

  // 🔸 Filter & Pagination Logic
  const filteredApplications = applicationsData.filter(app =>
    app.factoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.applicationNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.eService.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredApplications.length / entriesPerPage)); // Always at least 1
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentApplications = filteredApplications.slice(startIndex, endIndex);

  const handleReset = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start < maxVisible - 1) start = Math.max(1, end - maxVisible + 1);
    for (let i = start; i <= end; i++) pages.push(i);
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
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c3e7a] mb-6">
          Under Process Application
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
            </div>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-8 rounded-md transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Sl. No</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Factory Details</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">e-Service</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Application Number Date</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Status & Date</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentApplications.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-6 text-gray-600">
                      No data available in table
                    </td>
                  </tr>
                ) : (
                  currentApplications.map((app, index) => (
                    <tr key={app.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-4 text-gray-800">{startIndex + index + 1}</td>
                      <td className="px-4 py-4">
                        <div className="space-y-1 text-sm">
                          <p className="font-bold text-gray-800 text-base">{app.factoryName}</p>
                          <p className="text-gray-700 font-semibold">[{app.factoryType}]</p>
                          <p className="text-gray-700">[{app.section}]</p>
                          <p className="text-gray-700"><span className="font-semibold">Zone -</span> {app.zone}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-gray-700">{app.eService}</td>
                      <td className="px-4 py-4 text-sm">
                        <p className="font-medium text-gray-800">{app.applicationNo}</p>
                        <p><span className="font-semibold">Date -</span> {app.applicationDate}</p>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <p className="font-bold text-red-600 text-base">{app.status}</p>
                        <p><span className="font-semibold">Date -</span> {app.statusDate}</p>
                      </td>
                      <td className="px-4 py-4 text-sm space-y-1">
                        <div>
                          <Link to={`/application/view/${app.applicationNo}`} className="text-blue-600 hover:text-blue-800 hover:underline">View</Link>
                          <Link to={`/notesheet/${app.applicationNo}`} className="text-blue-600 hover:text-blue-800 hover:underline">/Notesheet/</Link>
                        </div>
                        <div>
                          <Link to={`/licence-register/${app.applicationNo}`} className="text-blue-600 hover:text-blue-800 hover:underline">/Licence Register/</Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-1">
                          <Link to={`/payment-details/${app.applicationNo}`} className="text-blue-600 hover:text-blue-800 hover:underline">Payment Details</Link>
                          <Link to={`/download-certificates/${app.applicationNo}`} className="text-blue-600 hover:text-blue-800 hover:underline">/Download Certificates</Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-700">
              Showing {filteredApplications.length === 0 ? 0 : startIndex + 1} to{" "}
              {Math.min(endIndex, filteredApplications.length)} of {filteredApplications.length} entries
            </p>

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
          </div>
        </div>

      </div>
    </div>
  );
};

export default UnderProcessRegistrationList;
