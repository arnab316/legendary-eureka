import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { applicantNavbardata, navData, removeAuthCookies, subMenuData ,superAdminMenuData} from "@/utils";
import { ProfileSection } from "./ProfileSection";
import { user } from "@/types/index";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import type { MenuItem } from "@/types";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Navbar: React.FC = () => {
  const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const navigate=useNavigate();
  const handleProfileClick = () => console.log("Profile clicked");
  const handleSignOutClick = () => {
    removeAuthCookies();
     navigate("/", { replace: true });
  };
const roleId = Cookies.get("roleId");
const roleIdUser=roleId ? Number(atob(roleId)) : 0;

  // Function to render the menu items
  const renderMenuItems = (
    items: MenuItem[],
    mobileClose?: () => void
  ) =>
    items.map((item, index) => {
      // If the item has a submenu, render it as a details element
      if (item.submenu) {
        return (
          <details key={index} className="group">
            <summary className="flex justify-between items-center cursor-pointer px-4 py-2 rounded hover:bg-opacity-20 text-sm lg:text-base font-normal list-none">
              <span>{item.title}</span>
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <div className="mt-2 ml-4 space-y-1">
              {item.submenu.map((sub, subIndex: number) => (
                // Check if the submenu item is external
                <a
                  key={subIndex}
                  href={sub.link}
                  target={sub.isExternal ? "_blank" : "_self"}
                  rel={sub.isExternal ? "noopener noreferrer" : ""}
                  className="block px-4 py-2 text-sm rounded hover:bg-opacity-20 transition-colors"
                  onClick={mobileClose}
                >
                  {sub.title}
                </a>
              ))}
            </div>
          </details>
        );
      }

      // If the item doesn't have a submenu, just render a simple link
      return (
        <a
          key={index}
          href={item.link}
          target={item.isExternal ? "_blank" : "_self"} // Open in a new tab if external
          rel={item.isExternal ? "noopener noreferrer" : ""}
          className="block px-4 py-2 rounded text-sm lg:text-base font-normal hover:bg-opacity-20 transition-colors"
          onClick={mobileClose}
        >
          {item.title}
        </a>
      );
    });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 w-full lg:grid-rows-2 gap-0 gap-x-3">
      {/* Top Navigation Bar */}

      
      {
         roleIdUser!==4 &&(
               <div className="bg-[#26A8D8] lg:col-span-4 ml-3 text-white flex items-center justify-center h-13 flex-col shadow-md mt-3 rounded-sm">
        <div className="container mx-auto px-6 py-3">
          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <span className="font-semibold text-lg">Menu</span>
            <button
              onClick={() => setIsTopMenuOpen(!isTopMenuOpen)}
              className="text-white p-2 rounded hover:bg-cyan-600"
              aria-label="Toggle top menu"
            >
              {isTopMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
                          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <NavigationMenu viewport={false} className="relative z-50">
              <NavigationMenuList className="flex gap-1">
                 
                {navData.map((item, index) => (
                  <NavigationMenuItem key={index} className="relative">
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-white hover:bg-cyan-600 data-[state=open]:bg-cyan-600 px-3 py-2 text-base font-normal">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white text-gray-700 p-2 rounded-md shadow-lg min-w-[260px]">
                          <ul className="grid gap-1">
                            {item.submenu.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={sub.link}
                                    target={sub.isExternal ? "_blank" : "_self"}
                                    rel={sub.isExternal ? "noopener noreferrer" : ""}
                                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-cyan-600 rounded transition-colors"
                                  >
                                    {sub.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={item.link}
                        target={item.isExternal ? "_blank" : "_self"}
                        rel={item.isExternal ? "noopener noreferrer" : ""}
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

          {/* Mobile Menu */}
          {isTopMenuOpen && (
            <div className="lg:hidden mt-4 space-y-2">
              {renderMenuItems(navData, () => setIsTopMenuOpen(false))}
            </div>
          )}
        </div>
      </div>
         )

         
      }
      














      {/* Sub Navigation Bar */}
      <div className={`bg-[#412156] lg:col-span-4 ml-3 lg:col-start-1 flex items-center justify-center h-13 flex-col ${roleIdUser === 4 ? "lg:row-start-1 mt-4" : "lg:row-start-2"} text-white shadow-md mt-0 rounded-sm`}>
        <div
  className={`container mx-auto px-6 py-3 ${
    roleIdUser === 4 ? "flex items-center justify-center w-full" : ""
  }`}
>
  {/* Mobile Toggle */}

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <span className="font-semibold text-lg">Sub Menu</span>
            <button
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
              className="text-white p-2 rounded hover:bg-purple-800"
              aria-label="Toggle sub menu"
            >
              {isSubMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Sub Menu */}
          <div className="hidden lg:block">
            <NavigationMenu viewport={false} className="relative z-40">
              <NavigationMenuList className="flex gap-1">
                {
                  roleIdUser===7?(
                     superAdminMenuData.map((item, index) => (
                  <NavigationMenuItem key={index} className="relative">
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className=" px-3 py-3 text-sm bg-[#412156]  font-normal transition-all">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className=" p-2 rounded-md shadow-lg min-w-[260px]">
                          <ul className="grid gap-1">
                            {item.submenu.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={sub.link}
                                    target={sub.isExternal ? "_blank" : "_self"}
                                    rel={sub.isExternal ? "noopener noreferrer" : ""}
                                    className="block px-4  py-2 text-sm  rounded transition-colors"
                                  >
                                    {sub.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={item.link}
                        target={item.isExternal ? "_blank" : "_self"}
                        rel={item.isExternal ? "noopener noreferrer" : ""}
                        className="px-4 py-3 text-sm font-normal hover:bg-purple-800 rounded transition-colors inline-block"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))
                    
                  ) : roleIdUser===4? (
                         applicantNavbardata.map((item, index) => (
                  <NavigationMenuItem key={index} className="relative ">
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className=" px-3 py-3 text-sm bg-[#412156]  font-normal transition-all">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className=" p-2 rounded-md shadow-lg min-w-[260px]">
                          <ul className="grid gap-1">
                            {item.submenu.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={sub.link}
                                    target={sub.isExternal ? "_blank" : "_self"}
                                    rel={sub.isExternal ? "noopener noreferrer" : ""}
                                    className="block px-4  py-2 text-sm  rounded transition-colors"
                                  >
                                    {sub.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={item.link}
                        target={item.isExternal ? "_blank" : "_self"}
                        rel={item.isExternal ? "noopener noreferrer" : ""}
                        className="px-4 py-3 text-sm font-normal hover:bg-purple-800 rounded transition-colors inline-block"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                   ))
                  ):(
                     subMenuData.map((item, index) => (
                  <NavigationMenuItem key={index} className="relative">
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className=" px-3 py-3 text-sm bg-[#412156]  font-normal transition-all">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className=" p-2 rounded-md shadow-lg min-w-[260px]">
                          <ul className="grid gap-1">
                            {item.submenu.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={sub.link}
                                    target={sub.isExternal ? "_blank" : "_self"}
                                    rel={sub.isExternal ? "noopener noreferrer" : ""}
                                    className="block px-4  py-2 text-sm  rounded transition-colors"
                                  >
                                    {sub.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={item.link}
                        target={item.isExternal ? "_blank" : "_self"}
                        rel={item.isExternal ? "noopener noreferrer" : ""}
                        className="px-4 py-3 text-sm font-normal hover:bg-purple-800 rounded transition-colors inline-block"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))
                  )
               }
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Sub Menu */}
          {isSubMenuOpen && (
            <div className="lg:hidden mt-4 space-y-2">
              {renderMenuItems(subMenuData, () => setIsSubMenuOpen(false))}
            </div>
          )}
        </div>
      </div>

      {/* Profile Section */}
      <div className="lg:row-span-2 lg:col-start-5  p-0 mt-1 mr-1 lg:row-start-1 order-first lg:order-none">
        <ProfileSection user={user} onProfileClick={handleProfileClick} onSignOutClick={handleSignOutClick} />
      </div>
    </div>
  );
};

export default Navbar;
