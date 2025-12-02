import React from "react";
import { useNavigate } from "react-router-dom";
const SecTopBar: React.FC = () => {
  const navigate=useNavigate();
  return (
    <div className="w-full bg-white flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-8 py-3 shadow-md">
      {/* Left Side: Logo and Text */}
      <div className="flex items-center space-x-3 md:space-x-5">
        <img
          src="/Images/govt-logo.png"
          alt="Govt Logo"
          className="w-[55px] h-[65px] md:w-[65px] md:h-[77px]"
        />
        <div className="flex flex-col">
          <span className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900">
            Directorate Of Factories
          </span>
          <p className="text-xs sm:text-sm text-gray-600">
            Government of West Bengal
          </p>
        </div>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-3 md:gap-6 mt-3 md:mt-0">
        {/* Silpasathi Logo */}
        <img
          src="/Images/silpasathi-icon.png"
          alt="Silpasathi"
          className="w-[120px] sm:w-[140px] md:w-[160px] h-auto border-2"
        />

        {/* Campaign Banner (hidden on very small screens) */}
        <span className="sm:flex h-10 sm:h-12 rounded-2xl items-center justify-center px-4 sm:px-6 text-sm sm:text-base font-medium bg-gradient-to-t from-[#f2f2fc] to-[#090979] hover:bg-gradient-to-r hover:from-[#090979] hover:to-[#fbfeff] text-white text-center transition-all duration-300 whitespace-nowrap">
          National Safety Day Campaign
        </span>

        {/* Login Button */}
        <button onClick={()=>navigate("/user/login")}  className="bg-[#add000] text-white h-9 sm:h-10 border-2 border-[#D7EF58] px-5 sm:px-7 rounded-3xl font-medium hover:bg-white hover:border-[#D7EF58] hover:text-[#D7EF58] transition-all duration-300">
          Login
        </button>
      </div>
    </div>
  );
};

export default SecTopBar;
