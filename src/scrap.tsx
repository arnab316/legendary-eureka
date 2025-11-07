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

const Navbar: React.FC = () => {
  // Mock user data - replace with actual user data from your auth context
  const user = {
    name: "AVIJIT BANERJEE",
    email: "ad25.doflb-wb@gov.in",
    role: "Inspector of Factories",
    avatar: "/api/placeholder/80/80" // Replace with actual avatar URL
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
    // Add your profile navigation logic here
  };

  const handleSignOutClick = () => {
    console.log("Sign out clicked");
    // Add your sign out logic here
  };

  return (
    <div className="w-full relative">
      {/* Top Navigation Bar */}
      <div className="bg-cyan-500 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
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
                      <NavigationMenuContent className="bg-white text-gray-700 p-2 rounded-md shadow-lg min-w-[240px]">
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

          {/* Spacer for profile card */}
          <div className="w-[420px]"></div>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="bg-purple-900 text-white shadow-md">
        <div className="container mx-auto px-6">
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

      {/* Profile Card - Positioned absolutely */}
      <ProfileSection 
        user={user}
        onProfileClick={handleProfileClick}
        onSignOutClick={handleSignOutClick}
      />
    </div>
  );
};

export default Navbar;