import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/pages/Navbar-dashboard";
import DashboardFooter from "@/pages/DashboardFooter";
import Notice from "@/pages/Notice/Notice"
import Cookies from "js-cookie";
const MainLayout: React.FC = () => {
  const roleId = Cookies.get("roleId");
const roleIdUser=roleId ? Number(atob(roleId)) : 0;

  return (
    <div className="min-h-screen flex flex-col">
     
      <Navbar />
       {
        roleIdUser!==4 && (

          <Notice />
        )
      }
      <main className="grow">
        <Outlet /> 
      </main>
      <DashboardFooter />
    </div>
  );
};

export default MainLayout;
