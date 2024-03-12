import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const LayoutAdmin = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[90vh] overflow-y-scroll px-8 pt-[12px] bg-[#F4F4F5]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
