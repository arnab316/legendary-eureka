import React from "react";
import { Button } from "@/components/ui/button";
import { type ProfileSectionProps} from "@/types/index"

export const ProfileSection: React.FC<ProfileSectionProps> = ({ 
  user, 
  onProfileClick, 
  onSignOutClick 
}) => {
  return (
    <div className="fixed top-2 right-12  bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <img 
            src={"https://factories.wb.gov.in/sites/all/themes/custom_dashboard/images/user-edit.png"} 
            alt={user.name}
            className="w-16 h-16 rounded-full  shadow-md"
          />
        </div>
        <div className="text-left">
          <div className="font-bold text-base leading-tight text-[#A94442]">{user.name}</div>
          <div className="text-sm text-gray-600">{user.email}</div>
          <div className="text-sm text-gray-600">{user.role}</div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-3"></div>
      
      <div className="flex gap-3 mt-3">
        <Button 
          onClick={onProfileClick}
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
