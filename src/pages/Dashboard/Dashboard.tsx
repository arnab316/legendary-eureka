import React from "react";
import SummaryCard from "./SummaryCard";
import DetailCard from "./DetailCard";
import ZoneCard from "./ZoneCard";
// import { Marquee } from "@/components/ui/marquee"
const Dashboard: React.FC = () => {
  const summaries = [
    { value: "150%", label: "Overall Progress", icon: "✏️" },
    { value: "382", label: "Registration and grant of Licence", icon: "🛡️" },
    { value: "1508", label: "Renewal of Factory Licence", icon: "🔁" },
    { value: "1708", label: "Directorate of Factories", icon: "🏭" },
  ];

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold text-[#1d1d4f] mb-6">
        Assistant Director of factories
      </h1>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 ">
        {summaries.map((item, idx) => (
          <SummaryCard
            key={idx}
            value={item.value}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4">
        <DetailCard />
        <ZoneCard />
      </div>
    </div>
  );
};

export default Dashboard;
