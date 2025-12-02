import React, { useState } from 'react';

const PreviousMonthlyReport: React.FC = () => {
    const [year, setYear] = useState('2025');
    const [reportForMonth, setReportForMonth] = useState('');
    const [inspectorName, setInspectorName] = useState('');

    const handleSearch = () => {
        console.log("Search clicked");
    };

    const handleReset = () => {
        setYear('2025');
        setReportForMonth('');
        setInspectorName('');
    };

    return (
        <div className="min-h-screen p-5">

            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl text-gray-800 font-semibold">
                    Monthly Report For Inspector of Factories List
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

            {/* Main Card */}
            <div className="bg-gray-100 p-2 pt-7 pb-10 shadow-sm">

                {/* Title Section */}
                <div className="bg-[#FFF5DC] px-5 py-4 border-t-2 border-t-[#FFCC66] border-b border-gray-300 rounded">
                    <h2 className="text-base text-[#525050] font-semibold">
                        Monthly Report For Inspector of Factories List
                    </h2>
                </div>

                {/* Form Section */}
                <div className="p-6 bg-white">

                    <div className="grid grid-cols-4 gap-5 mb-5">

                        {/* Year */}
                        <div>
                            <label className="block text-sm text-gray-800 mb-2 font-medium">
                                YEAR:
                            </label>
                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none"
                            >
                                <option value="2025">2025</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>

                        {/* Report For Month */}
                        <div>
                            <label className="block text-sm text-gray-800 mb-2 font-medium">
                                Report For Month:
                            </label>
                            <select
                                value={reportForMonth}
                                onChange={(e) => setReportForMonth(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none"
                            >
                                <option value="">--Select--</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                            </select>
                        </div>

                        {/* Inspector Name */}
                        <div>
                            <label className="block text-sm text-gray-800 mb-2 font-medium">
                                Inspector Name:
                            </label>
                            <select
                                value={inspectorName}
                                disabled
                                onChange={(e) => setInspectorName(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white focus:outline-none cursor-not-allowed"
                            >
                                <option value="">Select</option>
                                <option value="inspector1">Inspector 1</option>
                                <option value="inspector2">Inspector 2</option>
                            </select>
                        </div>

                        {/* Reset button area */}
                        <div className="flex items-end">
                            <button
                                onClick={handleReset}
                                className="text-sm text-gray-700 cursor-pointer p-2 px-5 hover:text-black hover:text-white rounded hover:bg-[#343A40]"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-start mb-5">
                        <button
                            onClick={handleSearch}
                            className="px-6 py-2 bg-cyan-600 text-white rounded text-sm font-medium hover:bg-cyan-700"
                        >
                            Search
                        </button>
                    </div>

                    {/* Total */}
                    
                    <div className="text-sm text-gray-800 mb-4">
                        <p className='text-blue-600'>Excel</p>
                        Total: <span className="font-semibold">1263</span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-[#158E94]">
                                    <th className="px-3 py-3 text-left text-white font-semibold">Sl. No.</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Name of Inspector</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Month</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Year</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">Submission Dt</th>
                                    <th className="px-3 py-3 text-left text-white font-semibold">View form</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td colSpan={6} className="px-5 py-5 text-center text-gray-600 border border-gray-300">
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

export default PreviousMonthlyReport;
