import React from "react";
import { Outlet } from "react-router";
import Banners from "../../Components/Banners";
import Footer from "../../Components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <main>
        <Banners></Banners>
        <Outlet></Outlet>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default HomeLayout;
