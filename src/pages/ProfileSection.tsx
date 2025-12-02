import React from "react";
import { Button } from "@/components/ui/button";
import { type ProfileSectionProps} from "@/types/index"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export const ProfileSection: React.FC<ProfileSectionProps> = ({ 
  user, 
  onProfileClick, 
  onSignOutClick 
}) => {
  const navigate=useNavigate();
  const emailId = Cookies.get("emailId");
const name = Cookies.get("name");
const username = Cookies.get("userName");
 const roleId= Cookies.get("roleId");
 const role = roleId ? atob(roleId) : "";
console.log(role);
  return (
    <div className=" bg-white rounded-lg shadow-lg p-2 z-50  border-[#3A0065] border-b-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <img 
            src={"https://factories.wb.gov.in/sites/all/themes/custom_dashboard/images/user-edit.png"} 
            alt={user.name}
            className="w-16 h-16 rounded-full  shadow-md"
          />
        </div>
        <div className="text-left">
          <div className="font-bold text-base leading-tight text-[#A94442]">{name ? atob(name) : ""}</div>
          <div className="text-sm text-black">{emailId ? atob(emailId) : ""}</div>
         <div className="text-sm text-black">
  {role === "4"
    ? "Applicant"
    : role === "9"
    ? "Inspector of Factories"
    : role === "7"
    ? "CMS Manager"
    : ""}
</div>
 <div className="text-sm text-black">{username ? atob(username) : ""}</div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-3"></div>
      
      <div className="flex gap-3 mt-3">
        <Button 
          onClick={()=>navigate("/user/edit")}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-semibold rounded shadow-md"
        >
          Profile
        </Button>
        <Button 
          onClick={onSignOutClick}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm font-semibold rounded shadow-md"
        >
          Sign out
        </Button>
      </div>
    </div>
  );
};
