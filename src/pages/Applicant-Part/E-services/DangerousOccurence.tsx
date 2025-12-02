import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
const DangerousOccurence: React.FC = () => {
  return (
    <div className="w-full px-6 py-6">

      {/* ---------- Header (Title + Breadcrumb) ---------- */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-[#0A2A6B]">
          Dangerous Occurrence List (Form-19)
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Home size={16} />
          <Link to="/applicant-dashboard">Home</Link>
          <span>{">"}</span>
          <span className="text-blue-600">Dashboard</span>
        </div>
      </div>

      {/* ---------- Main Box ---------- */}
      <div className="w-full h-[450px] bg-[#F3F0F6] rounded-lg p-4 border border-transparent">
        {/* You can put your content here */}
      </div>
    </div>
  );
};

export default DangerousOccurence;
