import React from "react";
import { type SummaryCardProps } from "../../types";


const SummaryCard: React.FC<SummaryCardProps> = ({ value, label, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-between border border-gray-100 py-9">
      <div>
        <div className="text-2xl font-bold text-[#1d1d4f]">{value}</div>
        <div className="text-gray-600 text-sm">{label}</div>
      </div>
      <div className="text-3xl opacity-60">{icon}</div>
    </div>
  );
};

export default SummaryCard;
