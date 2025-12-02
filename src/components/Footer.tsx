import React from "react";
import { useNavigate } from "react-router-dom";
const Footer: React.FC = () => {
  const navigate=useNavigate();
  return (
    <footer
      className="bg-gray-900 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/factory-footer-img.jpg')" }}
    >
      {/* ---------- Top Section: Main Footer Content ---------- */}
      <div className="flex flex-col items-center justify-center text-center min-h-[160px] sm:min-h-[200px] md:min-h-[230px] px-4 sm:px-6 bg-black/80 py-6 space-y-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-snug max-w-3xl">
          Guidelines for Online Application for{" "}
          <br className="hidden sm:block" />
          Approval of Plan, Registration & Grant of Licence, Renewal of Licence
        </h2>

        <button className="bg-blue-500 text-white py-1.5 px-4 sm:px-5 rounded text-sm sm:text-base hover:bg-blue-700 transition-colors duration-300"
        onClick={()=>navigate("/main/user_manual")}
        >
          Operating Manual for Applicants
        </button>
      </div>

      {/* ---------- Middle Section: Footer Links ---------- */}
      <div className="bg-[#1A1A1A] py-3 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] sm:text-sm text-gray-400 gap-2">
          <span className="text-center md:text-left leading-snug">
            © COPYRIGHT 2017 - 2022 DIRECTORATE OF FACTORY - ALL RIGHTS RESERVED
          </span>

          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-center">
            <a href="#" className="hover:text-white transition-colors duration-200">
              SITE MAP
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              DISCLAIMER
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Bottom Disclaimer Section ---------- */}
      <div className="bg-[#363435] px-4 sm:px-6 md:px-10 py-3">
        <p className="text-[11px] sm:text-xs leading-relaxed text-gray-200 text-center md:text-left">
          All efforts have been made to make the information as accurate as possible.
          Contents of this site are owned and maintained by the Directorate of Factories, Govt. of West Bengal.
          Webel Technology Limited (WTL) or their engaged Development team will not be responsible for any loss
          to any person caused by inaccuracy in the information available on this Website.
          Any discrepancy found may be brought to the notice of the Directorate of Factories, Govt. of West Bengal.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
