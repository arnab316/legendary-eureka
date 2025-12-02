import { type Factory} from '@/types';
import type{MenuItem} from '@/types';
import Cookies from "js-cookie";
export const navData : MenuItem[] = [
  {
    title: "EODB", 
    link: "/",
    submenu: [
      { title: "Online Dashboard", link: "/children" },
      { title: "SOP & Timeline", link: "/files/contents/edob/sop-of-services-2020_01_25.pdf", isExternal: true },
      { title: "Comprehensive Checklist", link: "/files/contents/edob/checklist.pdf",isExternal: true },
      { title: "Labour Regulations Enablers", link: "/files/contents/edob/labour_regulation_enablers_18_10_2017.pdf",isExternal: true  },
      { title: "Self Certification", link: "/files/contents/edob/self_certification_for_factories_final_and_submitted.pdf",isExternal: true },
    ]
  },
  {
    title: "License Fees", link: "/about",
    submenu: [
      { title: "License Fees 2006-2015", link: "/mission" },
      { title: "License Fees 2016", link: "/team" },
      { title: "License Fees 2017 Onwards", link: "/careers" },
    ]
  },
  {
    title: "Services", link: "/services",
    submenu: [
      { title: "Approval of Plan", link: "https://silpasathi.wb.gov.in/" ,isExternal: true},
      { title: "Registration and grant of license", link: "https://silpasathi.wb.gov.in/",isExternal: true },
      { title: "Renewal of License", link: "https://silpasathi.wb.gov.in/",isExternal: true },
    ]
  },
  {
    title: "Act, Rules & Forms", link: "/contact",
    submenu: [
      { title: "Act & Rules", link: "/contact" },
      { title: "Form 2", link: "/files/contents/forms/form_2.pdf" ,isExternal: true},
      { title: "Form 22", link: "/files/contents/forms/form_22.pdf",isExternal: true },
      { title: "Form 23", link: "/files/contents/forms/form_23.pdf" ,isExternal: true},
      { title: "Form IV", link: "/files/contents/forms/form_iv.pdf",isExternal: true },
      { title: "Form Maternity Benefit (Rule 16)", link: "/files/contents/forms/annual_return_rule_16.pdf",isExternal: true },
      { title: "Common Application Form", link: "/files/contents/forms/common_application_form.pdf",isExternal: true },
      { title: "Form 18 (Notice Of Accident)", link: "/files/contents/forms/form_18.pdf",isExternal: true },
      { title: "Form 23 A", link: "/files/contents/forms/form_23a.pdf",isExternal: true },
      { title: "Silicosis Policy Forms", link: "/main/silicosis_policy_application_forms",isExternal: true },
    ]
  },
  { title: "Notice/Circular", link: "/faq",
    submenu: [
      { title: "Notifications Under EODB", link: "/faq" },
      { title: "News/Guidelines", link: "/faq" },
      { title: "Circular", link: "/faq" },
       { title: "Feedback for Draft Notification", link: "/faq" },
        { title: "List Of Competent Person", link: "/faq" },
    ]
   },
  { title: "Zone", link: "/faq" },
  { title: "Factories", link: "/main/factory/third_party_verify" },
  { title: "Inspection", link: "/faq" ,
     submenu: [
      { title: "Randomized Schedule(Including CIS & Joint)", link: "/faq" },
      { title: "Complaint Based Schedule", link: "/faq" },
      
       { title: "Surprise Visit", link: "/faq" },
        { title: "Special Visit", link: "/faq" },
    ]
   },
];

export const subMenuData : MenuItem[] = [
  { title: "Dashboard", link: "/user/dashboard" },
  { title: "Factories", link: "/parents",
    submenu: [
      { title: "All Factories search", link: "/custom-factory-search" },
      { title: "Crossed off Factories", link: "/CROSSED_OFF" },
    ]
  },
  { title: "Approval", link: "/seniors",
    submenu: [
      { title: "Pending Applications", link: "/pending-approvals" },
      { title: "Under Processed Applications", link: "/approval-status" },
      { title: "Back to Applicant Applications", link: "/approved-applications" },
      { title: "Rejected Applications", link: "/rejected-applications" },
      { title: "Issued Applications", link: "/all-applications" },
      { title: "All Zone All Plan Applications", link: "/downloaded-applications" },  
    ]
  },
  { title: "Registration", link: "/seniors",
    submenu: [
      { title: "Pending Application", link: "/registration-list" },
      { title: "Under Processed Application", link: "/underprocess-registration-list" },
      { title: "Back for Rectification", link: "/backto-registration-list" },
      { title: "Issued Application", link: "/inspector-registration-issued-rejected-list/2" },
      { title: "Rejected Applications", link: "/inspector-rejected-registration-list" },
    ]
  },
  { title: "Renewal", link: "/seniors" , 
    submenu: [
      { title: "Pending Application", link: "/inspector-renewal-list" },
      { title: "Under Processed Application", link: "/underprocess-registration-list/3" },
      { title: "Back for Rectification", link: "/backto-registration-list/3" },
      { title: "Issued Applications", link: "/renewal-issued-rejected-list" },
      { title: "Rejected Applications", link: "/renewal-rejected-applications-list" },
       { title: "Auto-Renewal Applications", link: "/auto-renewal-issued-applications-list" },
    ]
   },
  { title: "Amendment", link: "/contact",
    submenu: [
      { title: "Pending Application", link: "/inspector-renewal-list" },
      
      { title: "Back for Rectification", link: "/backto-registration-list/3" },
      { title: "Under Processed Application", link: "/underprocess-registration-list/3" },
       { title: "Transfer under process", link: "/auto-renewal-issued-applications-list" },
      { title: "Issued Applications", link: "/renewal-issued-rejected-list" },
      { title: "Rejected Applications", link: "/renewal-rejected-applications-list" },
      
    ]
   },
  { title: "Reports", link:"",
    submenu: [
      { title: "Previous Annual Report", link: "/statcell_rpt/annual" },
      { title: "Previous Monthly Report", link: "/statcell_rpt/monthly" },
      { title: "Revenue against Application and Application Summary Report", link: "/statcell_rpt/all_appln" },
      { title: "Other types of Letters / Reports / Orders List", link: "/statcell_rpt/other-type-letr-rept-ord-list" },
      { title: "Annual Return of Factories", link: "/inspection-reports" },
      { title: "Online Survey Report", link: "/accident-reports" },
      { title: "Form-IV", link: "/other-reports" },
      { title: "All Applications", link: "/silicosis-reports" },
    ]
  },
  { title: "Form18", link: "/inspector-form18-list" },
  { title: "Inspection Report", link:"",
    submenu: [
      { title: "Other Type of Letters / Reports / Orders", link: "/inspector-letr-rept-ord/other-type-letr-rept-ord" },
    ]
  },
];







export const superAdminMenuData : MenuItem[] = [
  { title: "Dashboard", link: "/user/dashboard" },
  { title: "Office data", link: "/parents",
    submenu: [
      { title: "Officer List", link: "/custom-factory-search" },
      { title: "Add Officer", link: "/add-user" },
    ]
  },
  { title: "Factory data", link: "/seniors",
    submenu: [
      { title: "Add Factory", link: "/pending-approvals" },
      { title: "Active Factory", link: "/approval-status" },
      { title: "Approved Factory List", link: "/approved-applications" },
      { title: "Unapproved Factory List", link: "/rejected-applications" },
      { title: "Search & Update Factory Details", link: "/all-applications" },
      { title: "Change Service and Zone", link: "/downloaded-applications" },
      { title: "Payment Update", link: "/downloaded-applications" },
      { title: "District List Active", link: "/downloaded-applications" },
      { title: "All Application", link: "/downloaded-applications" },

      { title: "DSC Sign Plan", link: "/downloaded-applications" },
      { title: "Active Factory Zonewise", link: "/downloaded-applications" },
      { title: "Generate Reg. No. & Lic. No.", link: "/downloaded-applications" },  
      { title: "Registered Factory(From Oct, 2020)", link: "/downloaded-applications" },
      { title: "Update Old Application Docs", link: "/downloaded-applications" },  
    ]
  },
  { title: "Draft Notification", link: "/seniors",
    submenu: [
      { title: "Add Notification", link: "/registration-list" },
      { title: "View List", link: "/underprocess-registration-list" },
      
    ]
  },
  { title: "Randomization Schedule", link: "/seniors" , 
    submenu: [
      { title: "Schedule", link: "/inspector-renewal-list" },
      { title: "Inspecter Schedule", link: "/underprocess-registration-list/3" },
      { title: "Factory Schedule", link: "/backto-registration-list/3" },
      { title: "Factories", link: "/renewal-issued-rejected-list" },
      
    ]
   },
  { title: "Calender", link: "/contact",
    submenu: [
      { title: "View/Update Calendar", link: "/inspector-renewal-list" },
      
      { title: "Holidays", link: "/backto-registration-list/3" },
     
      
    ]
   },
  { title: "Data reformes for certificates", link:"",
   
  },
  { title: "Change Password to Default Password", link: "/password-update-to-default" },
  
];






export const applicantNavbardata : MenuItem[] = [
  { title: "Dashboard", link: "/applicant-dashboard" },
  { title: "e-Services", link: "/parents",
    submenu: [
      { title: "Apply for New e-Service", link: "/applicant/decission" },
      { title: "Dangerous Occurrence", link: "/applicant/form19-list" },
      { title: "Notice of Accident", link: "/applicant/form18-list" },
      { title: "Notice of Poisoning / Disease", link: "/applicant/form20-list" },
      { title: "Annual Return", link: "/applicant/annual-return-list" },
    ]
  },
  { title: "Change Password", link: "/change-password"},
  
  
];
















export const removeAuthCookies = () => {
  Cookies.remove("token");
  Cookies.remove("userId");
  Cookies.remove("userName");
  Cookies.remove("roleId");
};


//set localstorage
export const storeStatus = (filter: string, id: number, section: string) => {
  if (typeof window !== "undefined") {
    const data = { section, filter, id };
    localStorage.setItem("statusData", JSON.stringify(data));
  }
};


//get localstorage
export const getStatus = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("statusData");
    return data ? JSON.parse(data) : null;
  }
  return null;
};







export const user = {
    name: "AVIJIT BANERJEE",
    email: "ad25.doflb-wb@gov.in",
    role: "Inspector of Factories",
    avatar: "/api/placeholder/80/80" // Replace with actual avatar URL
  };


  export const factoriesData: Factory[] = [
    {
      id: 1,
      name: "M/S RADIANT RUBBER INDUSTRIES",
      section: "Section-85",
      address: "CHANDAN NAGAR,PO MOHESHTOLLA",
      zone: "CK",
      dateOfAmenability: "Not Available",
      regNo: "380-TP/Z/86",
      regDate: "Not Available",
      licenseNo: "380/TP",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    },
    {
      id: 2,
      name: "BALAJI AUTOCENTRE",
      section: "Section-85",
      address: "10, PASCHIM CHOUBHAGA, DHELENDIA, P.O. DHAPA",
      zone: "CG",
      dateOfAmenability: "Not Available",
      regNo: "880-TP/Z/2003",
      regDate: "Not Available",
      licenseNo: "880/TP",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    },
    {
      id: 3,
      name: "SUNRISE INDUSTRIES",
      section: "Section-85",
      address: "12, GARDEN REACH ROAD, KOLKATA",
      zone: "BK",
      dateOfAmenability: "Not Available",
      regNo: "456-TP/Z/90",
      regDate: "Not Available",
      licenseNo: "456/TP",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    },
    {
      id: 4,
      name: "STEEL FABRICATORS LTD",
      section: "Section-85",
      address: "PLOT NO 45, INDUSTRIAL AREA, HOWRAH",
      zone: "HW",
      dateOfAmenability: "Not Available",
      regNo: "234-TP/Z/88",
      regDate: "Not Available",
      licenseNo: "234/TP",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    },
    {
      id: 5,
      name: "BENGAL CHEMICALS",
      section: "Section-85",
      address: "56, MANIKTALA MAIN ROAD, KOLKATA",
      zone: "NK",
      dateOfAmenability: "Not Available",
      regNo: "678-TP/Z/92",
      regDate: "Not Available",
      licenseNo: "678/TP",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    },
    {
      id: 6,
      name: "PRECISION TOOLS MANUFACTURING",
      section: "Section-85",
      address: "LILUAH INDUSTRIAL ESTATE, HOWRAH",
      zone: "HW",
      dateOfAmenability: "Not Available",
      regNo: "789-TP/Z/95",
      regDate: "Not Available",
      licenseNo: "789/TP",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    },
    {
      id: 7,
      name: "METRO ENGINEERING WORKS",
      section: "Section-85",
      address: "23, JESSORE ROAD, KOLKATA",
      zone: "CK",
      dateOfAmenability: "Not Available",
      regNo: "901-TP/Z/98",
      regDate: "Not Available",
      licenseNo: "901/TP",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    },
    {
      id: 8,
      name: "PLASTIC PRODUCTS CO",
      section: "Section-85",
      address: "78, B.T. ROAD, NORTH 24 PARGANAS",
      zone: "BK",
      dateOfAmenability: "Not Available",
      regNo: "345-TP/Z/01",
      regDate: "Not Available",
      licenseNo: "345/TP",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    },
    {
      id: 9,
      name: "TEXTILE MILLS INDIA",
      section: "Section-85",
      address: "BALLY INDUSTRIAL AREA, HOWRAH",
      zone: "HW",
      dateOfAmenability: "Not Available",
      regNo: "567-TP/Z/04",
      regDate: "Not Available",
      licenseNo: "567/TP",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    },
    {
      id: 10,
      name: "INDIA INDUSTRIAL WORKS",
      section: "Section-2m(i)",
      address: "18/2, BRINDABAN MULLICK LANE, P.O. KADAMTALA",
      zone: "HB",
      dateOfAmenability: "Not Available",
      regNo: "88-HW/X/62",
      regDate: "Not Available",
      licenseNo: "5049",
      licenseDate: "Not Available",
      licenseExpireDate: "Not Available",
      commAddress: "Not Available",
      telephone: "Not Available",
      mobile: "Not Available",
      fax: "Not Available",
      email: "Not Available",
      status: "CROSSED OFF",
      statusDate: "14-05-2016"
    }
  ];