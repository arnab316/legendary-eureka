import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { fetchOccupierDetails } from "@/store/feature/PendingApplication/viewOccupierDetailsSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  appId: number;
}

interface Occupier {
  name: string;
  role: string;
  f_name: string;
  age: number | string;
  mobile: string;
  email: string;
  present_address: string;
  present_city: string;
  present_state: string;
  present_pin: string;
  permanent_address: string;
  permanent_city: string;
  permanent_state: string;
  permanent_pin: string;
}

const OccupierDetailsModal: React.FC<Props> = ({ isOpen, onClose, appId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { selected, loading, error } = useSelector(
    (state: RootState) => state.occupier
  );

  // Fetch when modal opens or appId changes
  useEffect(() => {
    if (isOpen && appId) {
      dispatch(
        fetchOccupierDetails({
          app_id: appId,
          personnel_type: "OCCUPIER",
        })
      );
    }
  }, [isOpen, appId, dispatch]);

  // Memoized data preparation
  const { occupierData, totalEntries, totalPages } = useMemo(() => {
    const data = selected ? [selected] : [];
    const entries = data.length;
    const pages = Math.ceil(entries / entriesPerPage);
    
    return {
      occupierData: data,
      totalEntries: entries,
      totalPages: pages
    };
  }, [selected, entriesPerPage]);

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return occupierData;
    
    return occupierData.filter((occupier: Occupier) => 
      occupier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      occupier.mobile.includes(searchTerm) ||
      occupier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      occupier.present_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      occupier.permanent_address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [occupierData, searchTerm]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-7xl max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="bg-teal-600 text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-xl font-bold">Occupier Details</h2>
          <button 
            onClick={onClose} 
            className="text-white text-2xl font-bold hover:bg-teal-700 w-8 h-8 flex items-center justify-center rounded transition-colors"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Loading / Error */}
        {loading && (
          <div className="p-6 text-center text-gray-600">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            <div className="mt-2">Loading occupier details...</div>
          </div>
        )}
        
        {error && (
          <div className="p-6 text-center text-red-600 bg-red-50 m-4 rounded">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Main Content */}
        {!loading && !error && selected && (
          <div className="flex flex-col flex-1">

            {/* Controls */}
            <div className="px-6 py-4 bg-gray-50 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 whitespace-nowrap">Show</span>
                <select
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded px-3 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="text-gray-700 whitespace-nowrap">entries</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-gray-700 whitespace-nowrap">Search:</span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search by name, mobile, email..."
                  className="border border-gray-300 rounded px-3 py-1 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Table Container */}
            <div className="overflow-auto flex-1">
              <table className="w-full min-w-[800px]">
                <thead className="bg-teal-600 text-white sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold border-r border-teal-500">
                      Sl. No
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-r border-teal-500">
                      Details of Occupier
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-r border-teal-500">
                      Present Address
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Permanent Address</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((occupier: Occupier, index: number) => (
                      <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-4 align-top border-r font-medium">{index + 1}</td>

                        {/* OCCUPIER DETAILS */}
                        <td className="px-4 py-4 align-top border-r">
                          <div className="space-y-2">
                            <div>
                              <strong className="text-gray-900">{occupier.name}</strong> 
                              <span className="text-gray-600"> ({occupier.role})</span>
                            </div>
                            <div>
                              <strong className="text-gray-700">Father/Husband:</strong> 
                              <span className="ml-1">{occupier.f_name}</span>
                            </div>
                            <div>
                              <strong className="text-gray-700">Age:</strong> 
                              <span className="ml-1">{occupier.age}</span>
                            </div>
                            <div>
                              <strong className="text-gray-700">Mobile No.:</strong> 
                              <span className="ml-1">{occupier.mobile}</span>
                            </div>
                            <div>
                              <strong className="text-gray-700">Email id:</strong> 
                              <span className="ml-1 break-all">{occupier.email}</span>
                            </div>
                          </div>
                        </td>

                        {/* PRESENT ADDRESS */}
                        <td className="px-4 py-4 align-top border-r">
                          <div className="space-y-2">
                            <div>
                              <strong className="text-gray-700">Address:</strong> 
                              <span className="ml-1">{occupier.present_address}</span>
                            </div>
                            <div className="text-gray-600">{occupier.present_city}</div>
                            <div className="text-gray-600">{occupier.present_state}</div>
                            <div className="text-gray-600">{occupier.present_pin}</div>
                          </div>
                        </td>

                        {/* PERMANENT ADDRESS */}
                        <td className="px-4 py-4 align-top">
                          <div className="space-y-2">
                            <div>
                              <strong className="text-gray-700">Address:</strong> 
                              <span className="ml-1">{occupier.permanent_address}</span>
                            </div>
                            <div className="text-gray-600">{occupier.permanent_city}</div>
                            <div className="text-gray-600">{occupier.permanent_state}</div>
                            <div className="text-gray-600">{occupier.permanent_pin}</div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                        {searchTerm ? 'No matching occupiers found' : 'No occupier data available'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t flex flex-col sm:flex-row justify-between items-center gap-2 rounded-b-lg">
              <div className="text-gray-700 text-sm">
                Showing {filteredData.length > 0 ? 1 : 0} to {filteredData.length} of {filteredData.length} entries
                {searchTerm && ` (filtered from ${occupierData.length} total entries)`}
              </div>
              
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  
                  <span className="text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* No Data State */}
        {!loading && !error && !selected && (
          <div className="p-6 text-center text-gray-500">
            No occupier details found for this application.
          </div>
        )}
      </div>
    </div>
  );
};

export default OccupierDetailsModal;