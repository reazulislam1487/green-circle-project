import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <div className="min-h-screen  py-10 max-w-screen-xl mx-auto">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-gray-50 overflow-y-auto">
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
