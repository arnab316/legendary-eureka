import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white   bg-cover bg-center" style={{ backgroundImage: "url('/./Images/factory-footer-img.jpg')" }}>

      {/* Bottom section: Footer links */}
      <div className="bg-[#1A1A1A] py-4">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-400 px-6">
          <span>© COPYRIGHT 2017 - 2022 DIRECTORATE OF FACTORY - ALL RIGHTS RESERVED</span>
          <div className="space-x-2">
            {/* <a href="#" className="hover:text-white ml-1">SITE MAP&nbsp;|&nbsp;</a>
            <a href="#" className="hover:text-white ml-1">DISCLAIMER&nbsp;|&nbsp;</a>
            <a href="#" className="hover:text-white ml-1">PRIVACY POLICY</a> */}

             <div className="flex items-center justify-evenly w-[20rem]">
              <span className="hover:text-white">SITE MAP </span>
              <span>|</span>
              <span className="hover:text-white ">DISCLAIMER  </span>
              <span>|</span>
              <span className="hover:text-white ">PRIVACY POLICY </span>
            </div> 
          </div>
        </div>
      </div>

     <div className="pl-6 pr-10 bg-[#363435]">
  <p className="text-sm p-3 leading-relaxed text-gray-600 text-white">
    All efforts have been made to make the information as accurate as possible. 
    Contents of this site are owned and maintained by the Directorate of Factories, Govt. of West Bengal. 
    Webel Technology Limited (WTL) or their engaged Development team will not be responsible for any loss
    to any person caused by inaccuracy in the information available on this Website.
    Any discrepancy found may be brought to the notice of the Directorate of Factories, Govt.
    of West Bengal.
  </p>
</div>

    </div>
  );
};

export default Footer;
