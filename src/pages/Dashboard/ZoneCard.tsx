import React, { useState } from "react";
import { X } from "lucide-react";

const ZoneCard: React.FC = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col w-5/6 ml-26 ">
      <div className="bg-yellow-100 px-4 py-2 font-semibold text-gray-700 rounded-t-xl">
        Zone
         <button
          onClick={() => setVisible(false)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white p-1 rounded cursor-pointer float-right"
        >
          <X size={16} />
        </button>
      </div>
      <div className="flex justify-center p-4">
        <img
          src={"https://factories.wb.gov.in//sites/all/themes/custom_dashboard/images/wb.jpg"}
          alt="Zone map"
          className="max-h-64 object-contain"
        />
      </div>
    </div>
  );
};

export default ZoneCard;
