import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {navData, subMenuData} from "@/utils";
import {ProfileSection} from "./ProfileSection";
import {user} from "@/types/index";
import { Link } from "react-router-dom";

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
    <div className=" ml-3 grid grid-cols-5 grid-rows-2 gap-4">
      {/* Top Navigation Bar */}
      <div className="bg-cyan-500 col-span-4 text-white shadow-md mt-3 rounded-md ">
        <div className="container mx-auto flex items-center justify-between px-6 py-3 ">
          {/* Navigation Menu */}
          {/* make menu explicit without viewport so content anchors under each item */}
          <NavigationMenu viewport={false} className="relative z-50">
            <NavigationMenuList className="flex gap-1">
              {navData.map((item, index) => (
                <NavigationMenuItem key={index} className="relative">
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-cyan-600 data-[state=open]:bg-cyan-600 px-4 py-2 text-base font-normal ">
                        {item.title}
                      </NavigationMenuTrigger>
                      {/* fix invalid Tailwind class min-w-60 */}
                      <NavigationMenuContent className="bg-red-500 text-gray-700 p-2 rounded-md shadow-lg min-w-[260px] ">
                        <ul className="grid gap-1 ">
                          {item.submenu.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <NavigationMenuLink
                                asChild
                              >
                                <Link to={sub.link} className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-cyan-600 rounded transition-colors">
                                  {sub.title}
                                </Link>
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
      <div className="bg-[#af5ae7] col-span-4 col-start-1 row-start-2 text-white shadow-md mt-4 rounded-md h-16 ">
        <div className="container mx-auto px-6 py-3">
          <NavigationMenu viewport={false} className="relative z-40">
            <NavigationMenuList className="flex gap-1">
              {subMenuData.map((item, index) => (
                <NavigationMenuItem key={index} className="relative">
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-purple-800 data-[state=open]:bg-purple-800 px-4 py-3 text-sm font-normal">
                        {item.title}
                      </NavigationMenuTrigger>
                     <NavigationMenuContent className="bg-white text-gray-700 p-2 rounded-md shadow-lg min-w-[260px]">
  <ul className="grid gap-1">
    {item.submenu.map((sub, subIndex) => (
      <li key={subIndex}>
        <NavigationMenuLink asChild>
          <Link
            to={sub.link}
            className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-purple-600 rounded transition-colors"
          >
            {sub.title}
          </Link>
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

      {/* Profile Section */}
      <div className="row-span-2 col-start-5 row-start-1">
        <ProfileSection
          user={user}
          onProfileClick={handleProfileClick}
          onSignOutClick={handleSignOutClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
