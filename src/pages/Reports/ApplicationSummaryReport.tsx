import React, { useState } from 'react';
import { Home, FileText } from 'lucide-react';

const ApplicationSummaryReport: React.FC = () => {
    const [year, setYear] = useState('');
    const [reportFor, setReportFor] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
    const [selectedZones, setSelectedZones] = useState<string[]>([]);

    const districts = ['Select', 'Alipurduar', 'Bankura', 'Birbhum', 'Gorabhabhar'];
    const zones = ['Select', 'Asansol', 'Barrackpore', 'CA', 'CB'];

    return (
        <div className="min-h-screen bg-white pb-7">
            
            {/* Header */}
            <div className="bg-white border-b border-gray-300 px-6 py-3 flex items-center justify-between">
                <h1 className="text-2xl text-gray-800 font-semibold">
                    Application Revenue Details Against Different Parameters
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                    <span>:</span>
                    <span className="text-blue-600">Dashboard</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-5 m-5 bg-gray-100">
                <div className="bg-white rounded shadow">
                    
                    {/* Section Header */}
                    <div className="bg-amber-50 border-l-4 border-amber-500 px-4 py-3">
                        <h2 className="text-sm font-medium text-gray-700">
                            Revenue Details Against Different Parameters
                        </h2>
                    </div>

                    {/* Form Section */}
                    <div className="p-6">
                        <div className="grid grid-cols-4 gap-6 mb-6">
                            
                            {/* Year */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    YEAR
                                </label>
                                <select
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">--Select--</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>

                            {/* Report For */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Report For:
                                </label>
                                <select
                                    value={reportFor}
                                    onChange={(e) => setReportFor(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>

                            {/* From Date (with Calendar Picker) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    From (D-M-Y):
                                </label>
                                <input
                                    type="date"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                />
                            </div>

                            {/* To Date (with Calendar Picker) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    To (D-M-Y):
                                </label>
                                <input
                                    type="date"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                />
                            </div>

                        </div>

                        {/* District & Zone Selection */}
                        <div className="grid grid-cols-2 gap-6 mb-6">

                            {/* District Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    District Name:
                                </label>
                                <select
                                    multiple
                                    size={5}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                >
                                    {districts.map((district, idx) => (
                                        <option key={idx} value={district} className="py-1">
                                            {district}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Zone Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Zone Name:
                                </label>
                                <select
                                    multiple
                                    size={5}
                                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                >
                                    {zones.map((zone, idx) => (
                                        <option key={idx} value={zone} className="py-1">
                                            {zone}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 mb-4">
                            <button className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
                                Search
                            </button>
                            <div className="text-sm text-gray-700">
                                Total: <span className="font-semibold">0</span>
                            </div>
                            <button className="px-4 py-2 text-teal-600 hover:text-teal-700 transition">
                                Reset
                            </button>
                        </div>

                        {/* Export Links */}
                        <div className="flex gap-4 mb-6 text-sm">
                            <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                Revenue Details EXCEL
                            </a>
                            <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                Application Summary EXCEL
                            </a>
                            <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                Active Factory Type Summary EXCEL Against Dist or Zone
                            </a>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-teal-600 text-white">
                                        <th className="px-4 py-3 text-left text-sm font-medium">Sl. No.</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Factory Name / Address</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Reg No</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Lic No</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Plan No</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Appln Status</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Plan Appln Status</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Issued Dt</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Revenue</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Service Name</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Appln No</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Zone Name</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Dist</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Total Worker</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">Submit Dt</th>
                                        <th className="px-4 py-3 text-left text-sm font-medium">RefNo.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={16} className="border border-gray-300 px-4 py-8 text-center text-gray-500">
                                            No data found!
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationSummaryReport;
