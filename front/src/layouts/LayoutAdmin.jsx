import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useMyContext } from "../pages/services/Context";

const LayoutAdmin = () => {
  const { user, logoutUser } = useMyContext();
  console.log(user);

  const handleLogout = () => {
    logoutUser();
  };
  console.log(user);
  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-6">
      {!user && <Navigate to="/login" />}
      <Sidebar />
      <div className="xl:col-span-5">
        <h1 className="bg-green-500 text-4xl">
          ¡Bienvenido {user && user.id}!
        </h1>
        <Header />
        <div className="h-[90vh] overflow-y-scroll px-8 pt-[12px] bg-[#F4F4F5]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
