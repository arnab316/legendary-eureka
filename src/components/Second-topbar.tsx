import React from "react";

const SecTopBar: React.FC = () => {
  return (
    <div className="w-full h-35 bg-white flex items-center px-6 shadow-md">
      {/* Left Side: Logo and Text */}
      <div className="flex items-center ml-5">
        <img
          src="./Images/govt-logo.png"
          alt="Govt Logo"
          className="w-[65px] h-[77px] border-2  m-6"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold">Directorate Of Factories</h1>
          <p className="text-sm text-gray-600">Government of West Bengal</p>
        </div>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex ml-auto gap-x-6 items-center">
       
         <img
          src="./Images/silpasathi-icon.png"
          alt="Govt Logo"
          className="w-[160px] h-auto border-2  m-6"
        />
       
      <span className="h-12 rounded-2xl flex text-center items-center  font-medium w-45 bg-gradient-to-t from-[#f2f2fc] to-[#090979] hover:bg-gradient-to-r hover:from-[#090979] hover:to-[#fbfeff] text-white transition-all duration-300">
       National Safety Day Campaign
       </span>



      <button className="bg-[#add000] text-white h-10 border-2 border-[#D7EF58] py-2 px-7 rounded-3xl font-medium hover:bg-white hover:border-[#D7EF58] hover:text-[#D7EF58] transition-all duration-300">
  Login
</button>


      </div>
    </div>
  );
};

export default SecTopBar;
