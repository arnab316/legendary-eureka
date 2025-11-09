import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/pages/Navbar";
import DashboardFooter from "@/pages/DashboardFooter";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <Navbar />
      <main className="grow">
        <Outlet /> 
      </main>
      <DashboardFooter />
    </div>
  );
};

export default MainLayout;
