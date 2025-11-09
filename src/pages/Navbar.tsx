import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navData, subMenuData } from "@/utils";
import { ProfileSection } from "./ProfileSection";
import {user} from "@/types/index"
const Navbar: React.FC = () => {
const handleProfileClick = () => {
    console.log("Profile clicked");
    // Add your profile navigation logic here
  };

  const handleSignOutClick = () => {
    console.log("Sign out clicked");
    // Add your sign out logic here
  };
  return (
    <div className="max-w-[calc(100%-1.5rem)] flex justify-center gap-3 ml-3">
      
    <div className="w-full">

      {/* Top Navigation Bar */}
      <div className="bg-cyan-500 text-white shadow-md mt-3 rounded-md ">
        <div className="container mx-auto flex items-center justify-between px-6 py-3 ">
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1">
              {navData.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-cyan-600 data-[state=open]:bg-cyan-600 px-4 py-2 text-base font-normal">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white text-gray-700 p-2 rounded-md shadow-lg min-w-60">
                        <ul className="grid gap-1">
                          {item.submenu.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <NavigationMenuLink 
                                href={sub.link}
                                className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-cyan-600 rounded transition-colors"
                              >
                                {sub.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink 
                      href={item.link}
                      className="px-4 py-2 text-base font-normal hover:bg-cyan-600 rounded transition-colors inline-block"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}    
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>


        </div>
      </div>
         

      {/* Sub Navigation Bar */}
      <div className="bg-[#af5ae7] text-white shadow-md mt-4 rounded-md h-16 ">
        <div className="container mx-auto px-6 py-3">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1">
              {subMenuData.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-purple-800 data-[state=open]:bg-purple-800 px-4 py-3 text-sm font-normal">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white text-gray-700 p-2 rounded-md shadow-lg min-w-[260px]">
                        <ul className="grid gap-1">
                          {item.submenu.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <NavigationMenuLink 
                                href={sub.link}
                                className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-purple-600 rounded transition-colors"
                              >
                                {sub.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink 
                      href={item.link}
                      className="px-4 py-3 text-sm font-normal hover:bg-purple-800 rounded transition-colors inline-block"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
    {/* Profile Section */}
      <div>

        <ProfileSection user={user}
         onProfileClick={handleProfileClick}
        onSignOutClick={handleSignOutClick}
         />
         </div>
      
    </div>
  );
};

export default Navbar;