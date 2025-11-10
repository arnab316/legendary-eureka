import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SummaryCard from "./SummaryCard";
import DetailCard from "./DetailCard";
import ZoneCard from "./ZoneCard";

const Dashboard: React.FC = () => {
  const summaries = [
    { value: "150%", label: "Overall Progress", icon: "✏️" },
    { value: "382", label: "Registration and grant of Licence", icon: "🛡️" },
    { value: "1508", label: "Renewal of Factory Licence", icon: "🔁" },
    { value: "1708", label: "Directorate of Factories", icon: "🏭" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Card className="mb-6 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#1d1d4f]">
            Assistant Director of Factories
          </CardTitle>
        </CardHeader>
      </Card>

      {/* ✅ Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {summaries.map((item, idx) => (
          <SummaryCard key={idx} {...item} />
        ))}
      </div>

      {/* ✅ Detail & Zone Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DetailCard />
        <ZoneCard />
      </div>
    </div>
  );
};

export default Dashboard;


