import React, { useState } from 'react';
import { Home } from 'lucide-react';

const OtherTypeLetterReport: React.FC = () => {
    const [letterType, setLetterType] = useState('');
    const [letterStatus, setLetterStatus] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState('10');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Searching...');
    };

    const handleReset = () => {
        setLetterType('');
        setLetterStatus('');
        setSearchTerm('');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            
            {/* Header */}
            <div className="bg-white border-b border-gray-300 px-6 py-4 flex items-center justify-between">
                <h1 className="text-xl text-gray-800 font-semibold">
                    Other type of Letters / Reports / Orders List
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                    <span className="text-blue-600">Dashboard</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-6">
                <div className="bg-gray-200 rounded p-6 mb-4">
                    
                    {/* Section Header */}
                    <div className="mb-6">
                        <h2 className="text-lg font-medium text-blue-700">
                            Other type of Letters / Reports / Orders List
                        </h2>
                    </div>

                    {/* Form Section */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        
                        {/* Other Type Letter/Report/Order */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Other Type Letter/Report/Order <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={letterType}
                                onChange={(e) => setLetterType(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">- Select -</option>
                                <option value="type1">Type 1</option>
                                <option value="type2">Type 2</option>
                                <option value="type3">Type 3</option>
                            </select>
                        </div>

                        {/* Letter/Report/Order Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Letter/Report/Order Status <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={letterStatus}
                                onChange={(e) => setLetterStatus(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">- Select -</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={handleSearch}
                            className="px-6 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition font-medium"
                        >
                            Search
                        </button>
                        <button 
                            onClick={handleReset}
                            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition font-medium"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded shadow">
                    
                    {/* Table Controls */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center gap-2 text-sm">
                            <span>Show</span>
                            <select
                                value={entriesPerPage}
                                onChange={(e) => setEntriesPerPage(e.target.value)}
                                className="px-2 py-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <span>entries</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                            <span>Search:</span>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-teal-600 text-white">
                                    <th className="px-4 py-3 text-left text-sm font-semibold border-r border-teal-500">
                                        Sl. No.
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border-r border-teal-500">
                                        Factory Details
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border-r border-teal-500">
                                        Whom to be Addressed & Subject
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border-r border-teal-500">
                                        Type & Status
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold border-r border-teal-500">
                                        Letter / Report / Order No. & Date
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={6} className="px-4 py-12 text-center text-gray-500">
                                        No data available in table
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer */}
                    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
                        <div className="text-sm text-gray-600">
                            Showing 0 to 0 of 0 entries
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 transition text-sm">
                                First
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 transition text-sm">
                                Previous
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 transition text-sm">
                                Next
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 transition text-sm">
                                Last
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherTypeLetterReport;