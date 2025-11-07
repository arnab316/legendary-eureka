import React, { useState } from "react";
import { Minus, Plus } from "lucide-react"; // from lucide-react icons

const DetailCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200">
      {/* Header */}
      <div className="bg-yellow-100 px-4 py-2 flex justify-between items-center rounded-t-xl">
        <span className="font-semibold text-gray-700">Details</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white p-1 rounded cursor-pointer"
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </button>
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="p-4 text-sm text-gray-700 grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Name:</strong> AVIJIT BANERJEE
            </p>
            <p>
              <strong>Zone:</strong> Jalpaiguri-A, Jalpaiguri-B,
            </p>
            <p>
              <strong>Designation:</strong> Inspector of Factories
            </p>
          </div>
          <div>
            <p>
              <strong>Total Application:</strong> 0
            </p>
            <p>
              <strong>Office Address:</strong> Office of the Inspector of
              Factories Hakimpara, P.O+P.S.- Jalpaiguri, PIN- 735 101
            </p>
            <p>
              <strong>Last Access:</strong> Fri 7 Nov 2025, 11:32:50
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCard;
