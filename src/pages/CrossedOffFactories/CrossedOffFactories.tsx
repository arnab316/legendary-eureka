import React, { useState } from 'react';
import { type Factory} from '@/types';
import { factoriesData } from '@/utils';
// const factoriesData: Factory[] = [
//   {
//     id: 1,
//     name: "M/S RADIANT RUBBER INDUSTRIES",
//     section: "Section-85",
//     address: "CHANDAN NAGAR,PO MOHESHTOLLA",
//     zone: "CK",
//     dateOfAmenability: "Not Available",
//     regNo: "380-TP/Z/86",
//     regDate: "Not Available",
//     licenseNo: "380/TP",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   },
//   {
//     id: 2,
//     name: "BALAJI AUTOCENTRE",
//     section: "Section-85",
//     address: "10, PASCHIM CHOUBHAGA, DHELENDIA, P.O. DHAPA",
//     zone: "CG",
//     dateOfAmenability: "Not Available",
//     regNo: "880-TP/Z/2003",
//     regDate: "Not Available",
//     licenseNo: "880/TP",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   },
//   {
//     id: 3,
//     name: "SUNRISE INDUSTRIES",
//     section: "Section-85",
//     address: "12, GARDEN REACH ROAD, KOLKATA",
//     zone: "BK",
//     dateOfAmenability: "Not Available",
//     regNo: "456-TP/Z/90",
//     regDate: "Not Available",
//     licenseNo: "456/TP",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   },
//   {
//     id: 4,
//     name: "STEEL FABRICATORS LTD",
//     section: "Section-85",
//     address: "PLOT NO 45, INDUSTRIAL AREA, HOWRAH",
//     zone: "HW",
//     dateOfAmenability: "Not Available",
//     regNo: "234-TP/Z/88",
//     regDate: "Not Available",
//     licenseNo: "234/TP",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   },
//   {
//     id: 5,
//     name: "BENGAL CHEMICALS",
//     section: "Section-85",
//     address: "56, MANIKTALA MAIN ROAD, KOLKATA",
//     zone: "NK",
//     dateOfAmenability: "Not Available",
//     regNo: "678-TP/Z/92",
//     regDate: "Not Available",
//     licenseNo: "678/TP",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   },
//   {
//     id: 6,
//     name: "PRECISION TOOLS MANUFACTURING",
//     section: "Section-85",
//     address: "LILUAH INDUSTRIAL ESTATE, HOWRAH",
//     zone: "HW",
//     dateOfAmenability: "Not Available",
//     regNo: "789-TP/Z/95",
//     regDate: "Not Available",
//     licenseNo: "789/TP",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   },
//   {
//     id: 7,
//     name: "METRO ENGINEERING WORKS",
//     section: "Section-85",
//     address: "23, JESSORE ROAD, KOLKATA",
//     zone: "CK",
//     dateOfAmenability: "Not Available",
//     regNo: "901-TP/Z/98",
//     regDate: "Not Available",
//     licenseNo: "901/TP",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   },
//   {
//     id: 8,
//     name: "PLASTIC PRODUCTS CO",
//     section: "Section-85",
//     address: "78, B.T. ROAD, NORTH 24 PARGANAS",
//     zone: "BK",
//     dateOfAmenability: "Not Available",
//     regNo: "345-TP/Z/01",
//     regDate: "Not Available",
//     licenseNo: "345/TP",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   },
//   {
//     id: 9,
//     name: "TEXTILE MILLS INDIA",
//     section: "Section-85",
//     address: "BALLY INDUSTRIAL AREA, HOWRAH",
//     zone: "HW",
//     dateOfAmenability: "Not Available",
//     regNo: "567-TP/Z/04",
//     regDate: "Not Available",
//     licenseNo: "567/TP",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   },
//   {
//     id: 10,
//     name: "INDIA INDUSTRIAL WORKS",
//     section: "Section-2m(i)",
//     address: "18/2, BRINDABAN MULLICK LANE, P.O. KADAMTALA",
//     zone: "HB",
//     dateOfAmenability: "Not Available",
//     regNo: "88-HW/X/62",
//     regDate: "Not Available",
//     licenseNo: "5049",
//     licenseDate: "Not Available",
//     licenseExpireDate: "Not Available",
//     commAddress: "Not Available",
//     telephone: "Not Available",
//     mobile: "Not Available",
//     fax: "Not Available",
//     email: "Not Available",
//     status: "CROSSED OFF",
//     statusDate: "14-05-2016"
//   }
// ];

const CrossedOffFactories: React.FC = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter factories based on search
  const filteredFactories = factoriesData.filter(factory =>
    factory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    factory.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    factory.zone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredFactories.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentFactories = filteredFactories.slice(startIndex, endIndex);

  const handleFind = () => {
    console.log('Searching from:', fromDate, 'to:', toDate);
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

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0c5273] mb-6">
          LIST OF CROSSED OFF FACTORIES
        </h1>

        {/* Date Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From Date
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To Date
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="w-full sm:col-span-2 lg:col-span-1">
              <button
                onClick={handleFind}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Find
              </button>
            </div>
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
                className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
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
                className="flex-1 sm:w-64 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                  <th className="px-4 py-3 text-left font-semibold">Sl. No.</th>
                  <th className="px-4 py-3 text-left font-semibold">Factory Details</th>
                  <th className="px-4 py-3 text-left font-semibold">Communication Details</th>
                  <th className="px-4 py-3 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentFactories.map((factory, index) => (
                  <tr key={factory.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-4 text-gray-800">{startIndex + index + 1}</td>
                    <td className="px-4 py-4">
                      <div className="space-y-1 text-sm">
                        <p className="font-semibold text-gray-800">
                          {factory.name} [{factory.section}]
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Address:</span> {factory.address}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Zone</span> - {factory.zone}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Date of Amenability:</span>
                          <span className="text-red-600"> {factory.dateOfAmenability}</span>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Reg. No.:</span> {factory.regNo} dated on
                          <span className="text-red-600"> {factory.regDate}</span>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">License. No.:</span> {factory.licenseNo} dated on
                          <span className="text-red-600"> {factory.licenseDate}</span>
                        </p>
                        <p className="text-red-600 font-semibold mt-2">
                          License Expire Date: {factory.licenseExpireDate}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1 text-sm">
                        <p className="text-gray-700">
                          <span className="font-semibold">Address:</span>
                          <span className="text-red-600"> {factory.commAddress}</span>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Telephone -</span>
                          <span className="text-red-600"> {factory.telephone}</span>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Mobile:</span>
                          <span className="text-red-600"> {factory.mobile}</span>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Fax.:</span>
                          <span className="text-red-600"> {factory.fax}</span>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Email.:</span>
                          <span className="text-red-600"> {factory.email}</span>
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm">
                        <p className="text-red-600 font-bold text-base">{factory.status}</p>
                        <p className="text-gray-700 mt-1">{factory.statusDate}</p>
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
          {currentFactories.map((factory, index) => (
            <div key={factory.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm font-semibold text-gray-600">
                  Sl. No. {startIndex + index + 1}
                </span>
                <div className="text-right">
                  <p className="text-red-600 font-bold">{factory.status}</p>
                  <p className="text-sm text-gray-700">{factory.statusDate}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Factory Details</h3>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-teal-700">
                      {factory.name} [{factory.section}]
                    </p>
                    <p><span className="font-semibold">Address:</span> {factory.address}</p>
                    <p><span className="font-semibold">Zone:</span> {factory.zone}</p>
                    <p>
                      <span className="font-semibold">Date of Amenability:</span>
                      <span className="text-red-600"> {factory.dateOfAmenability}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Reg. No.:</span> {factory.regNo} dated on
                      <span className="text-red-600"> {factory.regDate}</span>
                    </p>
                    <p>
                      <span className="font-semibold">License No.:</span> {factory.licenseNo} dated on
                      <span className="text-red-600"> {factory.licenseDate}</span>
                    </p>
                    <p className="text-red-600 font-semibold">
                      License Expire Date: {factory.licenseExpireDate}
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <h3 className="font-semibold text-gray-800 mb-2">Communication Details</h3>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-semibold">Address:</span>
                      <span className="text-red-600"> {factory.commAddress}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Telephone:</span>
                      <span className="text-red-600"> {factory.telephone}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Mobile:</span>
                      <span className="text-red-600"> {factory.mobile}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Fax:</span>
                      <span className="text-red-600"> {factory.fax}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>
                      <span className="text-red-600"> {factory.email}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info and Pagination */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredFactories.length)} of {filteredFactories.length} entries
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                First
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Previous
              </button>
              
              {getPageNumbers().map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 border rounded-md text-sm ${
                    currentPage === page
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Next
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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

export default CrossedOffFactories;