import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DropdownData from "./dropdown/dropdown";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Closes mobile menu when link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Dropdown data (same as your original)
  const eodbItems = [
    { label: "Online Dashboard", path: "/eodb/item1" },
    { label: "SOP & Timeline", path: "/files/contents/edob/sop-of-services-2020_01_25.pdf", isExternal: true},
    { label: "Comprehensive Checklist", path: "/files/contents/edob/checklist.pdf",isExternal: true},
    {
      label: "Timelimit",
      path: "/eodb/item2",
      children: [
        { label: "For Inspection Reports", path: "/files/contents/edob/limit_for_inspection_report_22-12-2020.pdf",isExternal: true },
        { label: "Under RTPS", path: "/files/contents/edob/time_limit_under_rtps_2017_07_25_updated_2017_08_04.pdf",isExternal: true },
      ],
    },
    {
      label: "Inspection",
      path: "/eodb/item1",
      children: [
        { label: "Procedure & Checklist", path: "/files/contents/edob/joint_inspection_factories.pdf",isExternal: true },
        { label: "Inspection Mandate", path: "/files/contents/edob/inspection_mandate.pdf",isExternal: true },
        { label: "Inspection Frequency", path: "/files/contents/edob/Frequency_of_Inspection.pdf" ,isExternal: true},
        { label: "Risk Based Categorization", path: "/files/contents/edob/risk_based_categorization.pdf" ,isExternal: true},
      ],
    },
    { label: "Labour Regulation Enablers", path: "/files/contents/edob/labour_regulation_enablers_18_10_2017.pdf",isExternal: true },
    { label: "Self Certification", path: "/files/contents/edob/self_certification_for_factories_final_and_submitted.pdf",isExternal: true },
    {
      label: "Hazard & Safety Measures",
      path: "/eodb/item2",
      children: [
        { label: "Emergency Response Procedures", path: "/main/emergency_response_procedure" },
        { label: "Ammonia Hazard & Safety Measures", path: "/files/contents/edob/ammonia_hazard_safety_measures.pdf" ,isExternal: true},
        { label: "LPG Hazard & Safety Measures", path: "/files/contents/edob/lpg_hazard_safety_measure.pdf",isExternal: true },
        { label: "Chlorine Hazard Management", path: "/files/contents/edob/chlorine_hazard_management.pdf" ,isExternal: true},
      ],
    },
  ];

  const licenseFeesItems = [
    { label: "Licence Fees 2006 - 2015", path: "/license" },
    { label: "Licence Fees 2016", path: "/license16" },
    { label: "Licence Fees 2017 Onwards", path: "/license17" },
  ];

  const servicesItems = [
    { label: "Approval Of Plan", path: "https://silpasathi.wb.gov.in/" },
    { label: "Registration And Grant Of Licence", path: "https://silpasathi.wb.gov.in/" },
    { label: "Renewal Of Licence", path: "https://silpasathi.wb.gov.in/" },
  ];

  const actRulesFormsItems = [
    { label: "Acts & Rules", path: "/main/acts_rules" },
    { label: "Form 2", path: "/files/contents/forms/form_2.pdf" ,isExternal: true},
    { label: "Form 22", path: "/files/contents/forms/form_22.pdf",isExternal: true },
    { label: "Form 23", path: "/files/contents/forms/form_23.pdf",isExternal: true },
    { label: "Form IV", path: "/files/contents/forms/form_iv.pdf",isExternal: true },
    { label: "Form Maternity Benefit (Rule 16)", path: "/files/contents/forms/annual_return_rule_16.pdf" ,isExternal: true},
    { label: "Common Application Form", path: "/files/contents/forms/common_application_form.pdf" ,isExternal: true},
    { label: "Form 18(Notice Of Accident)", path: "/files/contents/forms/form_18.pdf" ,isExternal: true},
    { label: "Form 19", path: "/files/contents/forms/form_19.pdf" ,isExternal: true},
    { label: "Form 23A", path: "/files/contents/forms/form_23a.pdf" ,isExternal: true},
    { label: "Silicosis Policy Forms", path: "/main/silicosis_policy_application_forms" },
  ];

  const noticeCircularItems = [
    { label: "Notifications Under EODB", path: "/notices" },
    { label: "News/Guidelines", path: "/circulars" },
    { label: "Circular", path: "/circulars" },
    { label: "Feedback For Draft Notification", path: "/circulars" },
    { label: "List Of Competent Person", path: "/circulars" },
  ];

  const inspectionItems = [
    { label: "Randomized Schedule(Including CIS & Joint", path: "/inspection/type1" },
    { label: "Complaint Based Schedule", path: "/inspection/type2" },
    { label: "Surprise Visit", path: "/inspection/type1" },
    { label: "Special Visit", path: "/inspection/type2" },
  ];

  return (
    <nav className="bg-[#404040] text-white">
      {/* ---------- Header Bar ---------- */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center">
          {/* ---------- Desktop Links ---------- */}
          <div className="hidden lg:flex justify-center items-center space-x-0">
            <Link
              to="/"
              className="text-white hover:text-blue-500 transition duration-300 py-3 px-1.5 border-r border-black"
            >
              Home
            </Link>
            <Link
              to="/main/about_us"
              className="text-white hover:text-blue-500 transition duration-300 py-3 px-1.5 border-r border-black"
            >
              About Us
            </Link>
            <DropdownData title="EODB" items={eodbItems} />
            <DropdownData title="Licence Fees" items={licenseFeesItems} />
            <DropdownData title="Services" items={servicesItems} />
            <DropdownData title="Act, Rules & Forms" items={actRulesFormsItems} />
            <DropdownData title="Notice/Circular" items={noticeCircularItems} />
            <Link
              to="/main/factory_zone"
              className="text-white hover:text-blue-500 transition duration-300 py-3 px-1.5 border-r border-black"
            >
              Zone
            </Link>
            <Link
              to="/main/factory/third_party_verify"
              className="text-white hover:text-blue-500 transition duration-300 py-3 px-1.5 border-r border-black"
            >
              Factories
            </Link>
            <DropdownData title="Inspection" items={inspectionItems} />
            <Link
              to="/main/RTI"
              className="text-white hover:text-blue-500 transition duration-300 py-3 px-1.5 border-r border-black"
            >
              RTI
            </Link>
            <Link
              to="/main/contact_us"
              className="text-white hover:text-blue-500 transition duration-300 py-3 px-1.5 border-r border-black"
            >
              Contact Us
            </Link>
            <Link
              to="/main/FAQ"
              className="text-white hover:text-blue-500 transition duration-300 py-3 px-1.5"
            >
              FAQ
            </Link>
          </div>

          {/* ---------- Mobile Hamburger ---------- */}
          <div className="lg:hidden  flex items-center justify-between w-full py-3">
            <Link to="/" className="font-semibold text-lg">
             
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars size={20}/>}
            </button>
          </div>
        </div>
      </div>
 
      {/* ---------- Mobile Dropdown Menu ---------- */}
      {menuOpen && (
        <div className="lg:hidden bg-[#404040] flex flex-col space-y-1 px-4 pb-3 border-t border-gray-700">
          <Link to="/" onClick={handleLinkClick} className="py-2 hover:text-blue-400">
            Home
          </Link>
          <Link to="/main/about_us" onClick={handleLinkClick} className="py-2 hover:text-blue-400">
            About Us
          </Link>
          <div onClick={handleLinkClick}>
            <DropdownData title="EODB" items={eodbItems} />
          </div>
          <div onClick={handleLinkClick}>
            <DropdownData title="Licence Fees" items={licenseFeesItems} />
          </div>
          <div onClick={handleLinkClick}>
            <DropdownData title="Services" items={servicesItems} />
          </div>
          <div onClick={handleLinkClick}>
            <DropdownData title="Act, Rules & Forms" items={actRulesFormsItems} />
          </div>
          <div onClick={handleLinkClick}>
            <DropdownData title="Notice/Circular" items={noticeCircularItems} />
          </div>
          <Link to="/zone" onClick={handleLinkClick} className="py-2 hover:text-blue-400">
            Zone
          </Link>
          <Link to="/factories" onClick={handleLinkClick} className="py-2 hover:text-blue-400">
            Factories
          </Link>
          <div onClick={handleLinkClick}>
            <DropdownData title="Inspection" items={inspectionItems} />
          </div>
          <Link to="/main/RTI" onClick={handleLinkClick} className="py-2 hover:text-blue-400">
            RTI
          </Link>
          <Link to="/main/contact_us" onClick={handleLinkClick} className="py-2 hover:text-blue-400">
            Contact Us
          </Link>
          <Link to="/main/FAQ" onClick={handleLinkClick} className="py-2 hover:text-blue-400">
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
