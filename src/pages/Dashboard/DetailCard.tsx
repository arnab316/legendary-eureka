import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const DetailCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card className="rounded-xl border border-gray-200 shadow-sm">
      <CardHeader className="bg-yellow-100 rounded-t-xl flex flex-row items-center justify-between px-4 py-2">
        <CardTitle className="text-gray-700 font-semibold">Details</CardTitle>
        <Button
          variant="default"
          className="bg-yellow-400 hover:bg-yellow-500 p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </Button>
      </CardHeader>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          <CardContent className="p-4 text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p><strong>Name:</strong> AVIJIT BANERJEE</p>
              <p><strong>Zone:</strong> Jalpaiguri-A, Jalpaiguri-B</p>
              <p><strong>Designation:</strong> Inspector of Factories</p>
            </div>
            <div>
              <p><strong>Total Application:</strong> 0</p>
              <p>
                <strong>Office Address:</strong> Office of the Inspector of Factories Hakimpara, 
                P.O+P.S.- Jalpaiguri, PIN-735101
              </p>
              <p><strong>Last Access:</strong> Fri 7 Nov 2025, 11:32:50</p>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default DetailCard;
