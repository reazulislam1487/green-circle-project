import React, { useContext } from "react";
import { Outlet } from "react-router";
import Banners from "../../Components/Banners";
import Footer from "../../Components/Footer";
import { AuthContext } from "../../Context/AuthContext";
import { MdDarkMode } from "react-icons/md";
// import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const HomeLayout = () => {
  const { isDark, setIsDark } = useContext(AuthContext);

  return (
    <div>
      <main>
        <header className="relative">
          <Banners></Banners>
          {isDark ? (
            <MdDarkMode
              size={24}
              className="absolute top-5 right-24 md:top-4 md:right-32 "
              onClick={() => setIsDark(!isDark)}
            />
          ) : (
            <MdDarkMode
              size={24}
              className="absolute top-5 right-24 md:top-4 md:right-32"
              onClick={() => setIsDark(!isDark)}
            />
          )}
        </header>
        <div>
          <Outlet></Outlet>
        </div>
        <footer>
          <Footer></Footer>
        </footer>
      </main>
    </div>
  );
};

export default HomeLayout;
