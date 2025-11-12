import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/pages/Navbar";
import DashboardFooter from "@/pages/DashboardFooter";
import Notice from "@/pages/Notice/Notice"
const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Notice />
      <main className="grow">
        <Outlet /> 
      </main>
      <DashboardFooter />
    </div>
  );
};

export default MainLayout;
