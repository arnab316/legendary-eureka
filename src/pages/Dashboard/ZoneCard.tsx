import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ZoneCard: React.FC = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <Card className="rounded-xl border border-gray-200 shadow-sm">
      <CardHeader className="bg-yellow-100 rounded-t-xl flex flex-row items-center justify-between px-4 py-2">
        <CardTitle className="text-gray-700 font-semibold">Zone</CardTitle>
        <Button
          variant="default"
          className="bg-yellow-400 hover:bg-yellow-500 p-1"
          onClick={() => setVisible(false)}
        >
          <X size={16} />
        </Button>
      </CardHeader>

      <CardContent className="flex justify-center p-4">
        <img
          src="https://factories.wb.gov.in//sites/all/themes/custom_dashboard/images/wb.jpg"
          alt="Zone map"
          className="max-h-64 object-contain rounded-md w-full sm:w-4/5 md:w-3/4"
        />
      </CardContent>
    </Card>
  );
};

export default ZoneCard;
