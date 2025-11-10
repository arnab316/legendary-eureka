import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { type SummaryCardProps } from "../../types";

const SummaryCard: React.FC<SummaryCardProps> = ({ value, label, icon }) => {
  return (
    <Card className="bg-white hover:shadow-xl transition-shadow rounded-xl border border-gray-100">
      <CardContent className="flex items-center justify-between py-6 px-4">
        <div>
          <div className="text-2xl font-bold text-[#1d1d4f]">{value}</div>
          <div className="text-gray-600 text-sm">{label}</div>
        </div>
        <div className="text-3xl opacity-60">{icon}</div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
