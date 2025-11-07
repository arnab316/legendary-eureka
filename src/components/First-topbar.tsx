import React from "react";
import { FaClock } from "react-icons/fa";
import "../assets/styles/marque.css";   
const FirstTopBar: React.FC = () => {
  return (
    <div className="bg-[#00445a] text-white flex justify-between items-center px-6 py-3 text-sm font-medium">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <span className="font-semibold">Language:</span>
        <button className="border border-white rounded-full px-2 py-0.5 text-xs font-bold">
          EN
        </button>

        <div className="flex items-center gap-1 ml-2">
          <button className="bg-gray-400 text-white px-2 py-0.5 rounded text-xs">A+</button>
          <button className="bg-gray-400 text-white px-2 py-0.5 rounded text-xs">A−</button>
          <button className="bg-gray-400 text-white px-2 py-0.5 rounded text-xs">A</button>
          <button className="bg-black text-white px-2 py-0.5 rounded text-xs">A</button>
        </div>

        <span className="text-sky-400 font-medium ml-3 hover:text-blue-800 hover:underline cursor-pointer">Screen Reader</span>
      </div>

      {/* Center section - animated Bengali text */}
      <div className="flex-1 flex items-center justify-center overflow-hidden mx-6">
        <span className="animate-marquee whitespace-nowrap text-base font-base">
          বিনামূল্যে সরকারি পরিষেবা পেতে চলুন বাংলা সহায়তা কেন্দ্রে অথবা লগ ইন করুন <a href="https://www.bsk.wb.gov.in" className="text-blue-500 hover:text-blue-800 hover:underline cursor-pointer">www.bsk.wb.gov.in</a>
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-5">
        <FaClock className="text-red-400" />
        <span className="font-semibold">Total Visitors :</span>
        <span className="font-normal">423493</span>
      </div>
    </div>
  );
};

export default FirstTopBar;
