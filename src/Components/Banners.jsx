import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FiLogOut } from "react-icons/fi";
import userPic from "/images.png";
import { AuthContext } from "../Context/AuthContext";

const Banners = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
      confirmButtonColor: "#2F855A",
    }).then((result) => {
      if (result.isConfirmed) {
        userLogOut()
          .then(() => {
            Swal.fire({
              title: "Logged out!",
              text: "You've been logged out successfully.",
              icon: "success",
              confirmButtonColor: "#2F855A",
            });
            navigate("/signIn");
          })
          .catch((error) => {
            Swal.fire({
              title: "Oops!",
              text: error.message,
              icon: "error",
            });
          });
      }
    });
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/exploreGardeners", label: "Explore Gardeners" },
    { to: "/browseTips", label: "Browse Tips" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/contactUs", label: "Contact Us" },
    ...(user ? [{ to: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <header className="bg-[#2F855A] shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between pl-0 pr-4 py-3 lg:px-10">
        {/* Logo */}

        <div className="hidden lg:flex items-center gap-2">
          <img
            src="https://i.ibb.co/N2CRDq0w/logo.png"
            alt="GreenCircle Logo"
            className="w-10 h-10 rounded-full hidden md:block"
          />
          <span className="text-[#F9F9F6] text-2xl font-extrabold hidden md:inline tracking-wide">
            GreenCircle
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-2 font-medium">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-[#F6C26B] text-[#2D3748]"
                    : "text-[#F9F9F6] hover:bg-[#A0DAB6] hover:text-[#2D3748]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown dropdown-start ">
          <label tabIndex={0} className="btn btn-ghost  text-white">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#2F855A] mt-3 rounded-xl w-52 p-2 text-white z-50"
          >
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="py-2 px-3  rounded hover:bg-[#A0DAB6] hover:text-[#2D3748]"
              >
                {label}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Auth Area */}
        <div>
          {user ? (
            <div className="dropdown dropdown-end relative group">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <img
                  src={user.photoURL || userPic}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#F6C26B] hover:ring-[#A0DAB6] transition"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded hidden group-hover:block z-40 whitespace-nowrap">
                {user.displayName}
              </span>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-2 shadow-xl bg-[#F9F9F6] text-[#2D3748] rounded-xl w-48 z-50"
              >
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-between w-full px-4 py-2 text-[#E53E3E] hover:bg-[#FED7D7] rounded transition"
                  >
                    <span>Logout</span>
                    <FiLogOut className="ml-2" />
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/signIn"
              className="px-5 py-2 rounded-full bg-[#F6C26B] text-[#2D3748] hover:bg-[#A0DAB6] hover:text-[#2D3748] transition-all font-semibold shadow-md"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Banners;
