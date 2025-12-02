import React, { useState } from "react";
import { Eye, FileText, Home } from "lucide-react";

// Types
interface LetterReport {
  id: number;
  factoryName: string;
  factoryType: string;
  section: string;
  zone: string;
  licenseNo: string;
  registrationNo: string;
  addressedTo: string;
  subject: string;
  type: string;
  status: string;
  statusDate: string;
}

// Mock Data
const letterReportsData: LetterReport[] = [
  {
    id: 1,
    factoryName: "ABC MANUFACTURING LTD",
    factoryType: "Non-Chemical Factory",
    section: "Section 2m(i)",
    zone: "Kolkata-A",
    licenseNo: "LIC/2024/001",
    registrationNo: "REG/2024/123",
    addressedTo: "Chief Inspector of Factories",
    subject: "Request for Extension of License",
    type: "Letter",
    status: "Pending",
    statusDate: "05th Nov 2025",
  },
  {
    id: 2,
    factoryName: "XYZ INDUSTRIES",
    factoryType: "Chemical Factory",
    section: "Section 6",
    zone: "Howrah-B",
    licenseNo: "LIC/2024/002",
    registrationNo: "REG/2024/456",
    addressedTo: "District Inspector",
    subject: "Annual Inspection Report",
    type: "Report",
    status: "Approved",
    statusDate: "01st Nov 2025",
  },
  {
    id: 3,
    factoryName: "MODERN STEEL WORKS",
    factoryType: "Non-Chemical Factory",
    section: "Section 2m(i)",
    zone: "Jalpaiguri-A",
    licenseNo: "LIC/2024/003",
    registrationNo: "REG/2024/789",
    addressedTo: "Regional Inspector",
    subject: "Safety Compliance Order",
    type: "Order",
    status: "Issued",
    statusDate: "03rd Nov 2025",
  },
];

const OtherTypeLetterReport: React.FC = () => {
  const [factoryName, setFactoryName] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [searchResults, setSearchResults] = useState<LetterReport[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const results = letterReportsData.filter((item) => {
      const matchesFactory =
        !factoryName ||
        item.factoryName.toLowerCase().includes(factoryName.toLowerCase());
      const matchesLicense =
        !licenseNo ||
        item.licenseNo.toLowerCase().includes(licenseNo.toLowerCase());
      const matchesRegistration =
        !registrationNo ||
        item.registrationNo
          .toLowerCase()
          .includes(registrationNo.toLowerCase());

      return matchesFactory && matchesLicense && matchesRegistration;
    });

    setSearchResults(results);
    setHasSearched(true);
  };

  const handleReset = () => {
    setFactoryName("");
    setLicenseNo("");
    setRegistrationNo("");
    setSearchResults([]);
    setHasSearched(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-[#1e3a8a]">
            Other Type of Letter / Report / Order
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <span>›</span>
            <span className="text-blue-600">Dashboard</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <div className="bg-yellow-50 border-b border-yellow-200 px-6 py-4">
            <h2 className="text-base font-medium text-blue-700">
              Search Factory using Factory Name / Licence No. / Registration No. or any two field or all three field to submit Other Type of Letter / Report / Order
            </h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Factory Name
                </label>
                <input
                  type="text"
                  placeholder="Factory Name"
                  value={factoryName}
                  onChange={(e) => setFactoryName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Licence No.
                </label>
                <input
                  type="text"
                  placeholder="Licence No."
                  value={licenseNo}
                  onChange={(e) => setLicenseNo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registration No.
              </label>
              <input
                type="text"
                placeholder="Registration No."
                value={registrationNo}
                onChange={(e) => setRegistrationNo(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md font-medium transition-colors"
              >
                Search
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md font-medium transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="px-4 py-3 text-left text-sm font-medium">Sl. No.</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Factory Details</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Whom to be Addressed & Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {!hasSearched ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">
                      No data found!
                    </td>
                  </tr>
                ) : searchResults.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">
                      No data found!
                    </td>
                  </tr>
                ) : (
                  searchResults.map((item, index) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">{index + 1}</td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-sm">{item.factoryName}</p>
                        <p className="text-xs text-gray-600">
                          [{item.factoryType}] — {item.zone}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-sm">
                          <strong>To:</strong> {item.addressedTo}
                        </p>
                        <p className="text-sm">
                          <strong>Subject:</strong> {item.subject}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-sm">{item.type}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                          item.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                          item.status === "Approved" ? "bg-green-100 text-green-800" :
                          item.status === "Issued" ? "bg-blue-100 text-blue-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {item.status}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">{item.statusDate}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                            <Eye className="w-4 h-4" /> View
                          </button>
                          <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                            <FileText className="w-4 h-4" /> Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherTypeLetterReport;