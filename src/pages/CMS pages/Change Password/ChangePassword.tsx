import React, { useState } from "react";

const ChangePassword: React.FC = () => {
  return (
    <div className=" bg-white mb-10">

       
      {/* Header */}
      <div className="bg-white px-2 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#202C71]">
          Change password to default password by Username
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="flex items-center gap-1 hover:text-gray-800">
            <span>🏠</span>
            <span>Home</span>
          </a>
          <span className="text-blue-600">Dashboard</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 m-4 rounded bg-[#F1EEF3]">
        <div className="bg-white rounded-md shadow border border-gray-200">
          {/* Section Header */}
          <div className="bg-[#FFF7E6] border-t-4 border-[#F0B94A] px-6 py-4 rounded-t-md">
            <h2 className="text-lg font-semibold text-[#202C71]">
              Search Username to Update Password to Default Password
            </h2>
          </div>

          {/* Form Area */}
          <div className="p-6">
            {/* Username Label */}
            <label className="block text-lg font-semibold text-gray-800 mb-2">
              Username
            </label>

            {/* Input */}
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button
                className="bg-[#00C4F4] hover:bg-[#00B3DF] text-white font-semibold px-5 py-1 rounded"
              >
                Update Password
              </button>

              <button
                className="bg-[#222222] hover:bg-[#333] text-white font-semibold px-4 py-1 rounded"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ChangePassword;
