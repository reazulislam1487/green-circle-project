import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div>
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
