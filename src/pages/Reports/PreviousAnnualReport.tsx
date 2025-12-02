import React, { useState } from "react";

const PreviousAnnualReport: React.FC = () => {
    const [year, setYear] = useState("2025");
    const [reportFor, setReportFor] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [inspectorName, setInspectorName] = useState("");

    // Convert YYYY-MM-DD → D-M-Y
    const formatDMY = (input: string) => {
        if (!input) return "";
        const [y, m, d] = input.split("-");
        return `${d}-${m}-${y}`;
    };

    const handleSearch = () => {
        console.log("Search clicked");
    };

    const handleReset = () => {
        setYear("2025");
        setReportFor("");
        setFromDate("");
        setToDate("");
        setInspectorName("");
    };

    return (
        <div className="min-h-screen p-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl text-gray-800 font-semibold">
                    Annual Report For Inspector of Factories List
                </h1>

                <div className="flex gap-4 items-center">
                    <a href="#" className="text-gray-600 no-underline text-sm hover:text-gray-800">
                        🏠 Home
                    </a>
                    <a href="#" className="text-gray-600 no-underline text-sm hover:text-gray-800">
                        Dashboard
                    </a>
                </div>
            </div>

            <div className="bg-gray-100 p-2 pt-7 pb-10 shadow-sm">
                {/* Title Bar */}
                <div className="bg-[#FFF5DC] px-5 py-4 border-t-2 border-t-[#FFCC66] rounded border-b border-gray-300">
                    <h2 className="text-base text-[#525050] font-semibold mb-1">
                        Annual Report For Inspector of Factories List
                    </h2>
                    <button className="bg-transparent text-gray-600 text-sm cursor-pointer hover:text-gray-800">
                        Print
                    </button>
                </div>

                {/* Form Section */}
                <div className="p-6 bg-white">

                    <div className="grid grid-cols-4 gap-5 mb-5">

                        {/* YEAR */}
                        <div>
                            <label className="block text-sm text-gray-800 mb-2 font-medium">YEAR:</label>
                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white"
                            >
                                <option value="2025">2025</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>

                        {/* Report For */}
                        <div>
                            <label className="block text-sm text-gray-800 mb-2 font-medium">
                                Report For: <span className="text-red-600">*</span>
                            </label>
                            <select
                                value={reportFor}
                                onChange={(e) => setReportFor(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white"
                            >
                                <option value="">Select</option>
                                <option value="quarterly">Quarterly</option>
                                <option value="monthly">Monthly</option>
                                <option value="annual">Annual</option>
                            </select>
                        </div>

                        {/* From Date */}
                        <div>
                            <label className="block text-sm text-gray-800 mb-2 font-medium">
                                From (D-M-Y):
                            </label>

                            <input
                                type="date"
                                onChange={(e) => setFromDate(formatDMY(e.target.value))}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white cursor-pointer"
                            />

                            {fromDate && (
                                <p className="text-xs text-gray-500 mt-1">Selected: {fromDate}</p>
                            )}
                        </div>

                        {/* To Date */}
                        <div>
                            <label className="block text-sm text-gray-800 mb-2 font-medium">
                                To (D-M-Y):
                            </label>

                            <input
                                type="date"
                                onChange={(e) => setToDate(formatDMY(e.target.value))}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white cursor-pointer"
                            />

                            {toDate && (
                                <p className="text-xs text-gray-500 mt-1">Selected: {toDate}</p>
                            )}
                        </div>
                    </div>

                    {/* Inspector Name */}
                    <div className="mb-5">
                        <label className="block text-sm text-gray-800 mb-2 font-medium">Inspector Name:</label>
                        <select
                            value={inspectorName}
                            onChange={(e) => setInspectorName(e.target.value)}
                            className="w-1/3 px-3 py-2 text-sm border border-gray-300 rounded bg-white"
                        >
                            <option value="">Select</option>
                            <option value="inspector1">Inspector 1</option>
                            <option value="inspector2">Inspector 2</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center mb-5">
                        <button
                            onClick={handleSearch}
                            className="px-6 py-2 bg-cyan-600 text-white rounded text-sm hover:bg-cyan-700"
                        >
                            Search
                        </button>

                        <button
                            onClick={handleReset}
                            className="px-6 py-2 bg-transparent text-sm rounded hover:text-white hover:bg-[#343A40]"
                        >
                            Reset
                        </button>
                    </div>

                    {/* Total Count */}
                    <div className="text-sm text-gray-800 mb-4">
                        Total: <span className="font-semibold">0</span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-[#158E94]">
                                    <th className="px-3 py-3 text-left text-white font-semibold">Sl. No.</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Report Year</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">From Dt</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">To Dt</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Submission Dt</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Zone</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Status</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Remark</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Deputy</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">View form</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td
                                        colSpan={10}
                                        className="px-5 py-5 text-center text-gray-600 border border-gray-300"
                                    >
                                        No data found!
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PreviousAnnualReport;
