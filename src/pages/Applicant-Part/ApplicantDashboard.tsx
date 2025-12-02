import React, { useState } from 'react';
import { Search, Home, Download, Eye, Upload, FileText, Edit, CheckCircle } from 'lucide-react';

interface Application {
  id: number;
  factoryName: string;
  factoryAddress: string;
  zone: string;
  planApprovalNo: string;
  planApprovalDate: string;
  regNo: string;
  regDate: string;
  licenseNo: string;
  licenseDate: string;
  expireDate: string;
  service: string;
  applicationNo: string;
  applicationDate: string;
  status: string;
  statusDate: string;
}

const ApplicantDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy data - replace with backend API call
  const applications: Application[] = [
    {
      id: 1,
      factoryName: "GILLDERS POLY PRODUCTS PRIVATE LIMITED [Section-2(m)]",
      factoryAddress: "Zone: Howrah Factory, Srirampur, Hooghly",
      zone: "Howrah Factory",
      planApprovalNo: "156-S/5/10",
      planApprovalDate: "30th Dec 2010",
      regNo: "00/114-30/2011",
      regDate: "03th Apr 2011",
      licenseNo: "0379/32",
      licenseDate: "07th Jul 2011",
      expireDate: "Ongoing",
      service: "Amendment / Transfer of Factory License",
      applicationNo: "APSS0345-HS",
      applicationDate: "24th Jun 2025",
      status: "Issued",
      statusDate: "19th Jul 2025"
    },
    {
      id: 2,
      factoryName: "INCEPRT DACING LLP [Section-2(m)]",
      factoryAddress: "Zone: Howrah Factory, Srirampur, Howrah",
      zone: "Howrah Factory",
      planApprovalNo: "156-S/5/10",
      planApprovalDate: "1st Feb 2020",
      regNo: "00/114-30/2019",
      regDate: "06th Apr 2019",
      licenseNo: "0379/32",
      licenseDate: "07th Jul 2011",
      expireDate: "Ongoing",
      service: "Renewal of Factory License",
      applicationNo: "APS20RPEN-1S278",
      applicationDate: "18th Oct 2025",
      status: "Issued/Renewed with Change",
      statusDate: "06th Nov 2025"
    }
  ];

  const handleViewPay = (id: number) => {
    alert(`View and Pay fees for Application ID: ${id}`);
  };

  const handleUpload = (id: number, docType: string) => {
    alert(`Upload ${docType} for Application ID: ${id}`);
  };

  const handleDownload = (id: number, docType: string) => {
    alert(`Download ${docType} for Application ID: ${id}`);
  };

  const handleApply = (id: number, type: string) => {
    alert(`Apply for ${type} for Application ID: ${id}`);
  };

  const handleApplicationLog = (id: number) => {
    alert(`View Application Log for Application ID: ${id}`);
  };

  const handleChangeManager = (id: number) => {
    alert(`Change Manager for Application ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#F1EEF3]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Applicant Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-base text-gray-600 hover:text-gray-800">
              <Home size={18} />
              Home
            </button>
            <span className="text-gray-400">•</span>
            <span className="text-base text-gray-600">Dashboard</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Application Guidelines */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Application guidelines</h2>
          <div className="space-y-2 text-lg font-semibold text-gray-700">
            <p>
              <strong>STEP-1:</strong> If you are NEW, First Apply for Plan with Manager etc. to apply any service Approval of Plan, 
              Extension of Plan or Registration please click here to <span className="text-blue-600 cursor-pointer hover:underline">Apply for New</span>.
            </p>
            <p>
              <strong>STEP-2:</strong> you have registered factory, you want to apply any service Renewal of the License, Amendment of the License etc or any NOTICE.
            </p>
            <p>First find your factory on the dashboard and apply for any services</p>
            <p>
              <strong>STEP-3:</strong> you are unable to find out this factory, please click on ADD REGISTERED FACTORY and add your factory profile.
            </p>
            <p>This is not applicable for New Factory and NEW PREMISES etc or <span className="text-blue-600 cursor-pointer hover:underline">ADD REGISTERED FACTORY</span></p>
            <p className="text-blue-600 mt-3">
              <strong>Note:</strong> If you are not able to find the Certificates in Download Documents, then please click on <strong>Application Log</strong> to view Certificates.
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-base text-gray-600">Show</span>
              <select className="border border-gray-300 rounded px-3 py-2 text-base">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-base text-gray-600">entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-gray-600">Search:</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-base font-semibold">SL No.</th>
                <th className="px-4 py-3 text-left text-base font-semibold">Factory Details</th>
                <th className="px-4 py-3 text-left text-base font-semibold">e-Service</th>
                <th className="px-4 py-3 text-left text-base font-semibold">Application No. & Date</th>
                <th className="px-4 py-3 text-left text-base font-semibold">Status</th>
                <th className="px-4 py-3 text-left text-base font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applications.map((app, index) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-base text-gray-700">{index + 1}</td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-gray-800">{app.factoryName}</p>
                      <p className="text-sm text-gray-600">{app.factoryAddress}</p>
                      <p className="text-sm text-gray-600">Zone: {app.zone}</p>
                      <p className="text-sm text-gray-600">Plan Approval No: {app.planApprovalNo} Dated on: {app.planApprovalDate}</p>
                      <p className="text-sm text-gray-600">Reg. No: {app.regNo} Dated on: {app.regDate}</p>
                      <p className="text-sm text-gray-600">License. No: {app.licenseNo} Dated on: {app.licenseDate}</p>
                      <p className="text-sm text-red-600 font-semibold">Expire Date: {app.expireDate}</p>
                      <div className="mt-2 space-y-1">
                        <button 
                          onClick={() => handleApplicationLog(app.id)}
                          className="text-sm text-blue-600 hover:underline block"
                        >
                          Application Log
                        </button>
                        <button 
                          onClick={() => handleChangeManager(app.id)}
                          className="text-sm text-blue-600 hover:underline block"
                        >
                          Change Manager
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-base text-gray-700">{app.service}</td>
                  <td className="px-4 py-4">
                    <p className="text-base text-gray-700">{app.applicationNo}</p>
                    <p className="text-sm text-gray-600">Date: {app.applicationDate}</p>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1">
                      <span className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
                        app.status.includes('Issued') 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {app.status}
                      </span>
                      <p className="text-sm text-gray-600">{app.statusDate}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="space-y-1 text-sm">
                      <button 
                        onClick={() => handleViewPay(app.id)}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <Eye size={14} />
                        View /View and Pay fees
                      </button>
                      <button 
                        onClick={() => handleUpload(app.id, 'Application')}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <Upload size={14} />
                        Upload Application
                      </button>
                      <button 
                        onClick={() => handleDownload(app.id, 'Certificate')}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <Download size={14} />
                        Download Certificate/Background
                      </button>
                      <button 
                        onClick={() => handleDownload(app.id, 'Certificates')}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <Download size={14} />
                        Download Certificates
                      </button>
                      <button 
                        onClick={() => handleApply(app.id, 'Plan')}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <FileText size={14} />
                        Apply for Plan
                      </button>
                      <button 
                        onClick={() => handleApply(app.id, 'Extension of Plan')}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <FileText size={14} />
                        Apply for Extension of Plan
                      </button>
                      <button 
                        onClick={() => handleApply(app.id, 'Registration')}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <Edit size={14} />
                        Apply Registration / Ready for Renewal
                      </button>
                      <button 
                        onClick={() => handleDownload(app.id, 'License/Transfer')}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <Download size={14} />
                        Amendment for License/Transfer
                      </button>
                      <button 
                        onClick={() => handleDownload(app.id, 'Registration Status')}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <Download size={14} />
                        /Registration Status details /Payment Details
                      </button>
                      <button 
                        onClick={() => handleDownload(app.id, 'Inspection Reports')}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <Download size={14} />
                        / Download Inspection Reports /
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-base text-gray-600">Showing 1 to 2 of 2 entries</p>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="px-4 py-2 border border-gray-300 rounded text-base hover:bg-gray-50"
              disabled={currentPage === 1}
            >
              First
            </button>
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="px-4 py-2 border border-gray-300 rounded text-base hover:bg-gray-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded text-base">
              1
            </button>
            <button 
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 border border-gray-300 rounded text-base hover:bg-gray-50"
            >
              Next
            </button>
            <button 
              onClick={() => setCurrentPage(2)}
              className="px-4 py-2 border border-gray-300 rounded text-base hover:bg-gray-50"
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;