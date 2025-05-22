import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import userPic from "/images.png";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        userLogOut()
          .then(() => {
            Swal.fire({
              title: "Logged out!",
              text: "You have been logged out successfully.",
              icon: "success",
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

  return (
    <div>
      <div>
        <nav className="navbar w-full lg:px-10 lg:py-2 mx-auto bg-green-900 shadow-md">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-green-200 hover:bg-green-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-green-800 rounded-box z-10 mt-3 w-52 p-2 shadow-lg text-green-200"
              >
                <NavLink
                  to="/"
                  className="hover:bg-green-700 rounded px-2 py-1"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/exploreGardeners"
                  className="mt-1 hover:bg-green-700 rounded px-2 py-1"
                >
                  Explore Gardeners
                </NavLink>
                <NavLink
                  to="/browseTips"
                  className="mt-1 hover:bg-green-700 rounded px-2 py-1"
                >
                  browseTips{" "}
                </NavLink>
                <NavLink
                  to="/shareGardenTipPage"
                  className="mt-1 hover:bg-green-700 rounded px-2 py-1"
                >
                  Share a Garden Tip
                </NavLink>
                <NavLink
                  to="/myTips"
                  className="mt-1 hover:bg-green-700 rounded px-2 py-1"
                >
                  My Tips
                </NavLink>
              </ul>
            </div>
            <img
              className="w-10 hidden md:flex rounded-full"
              src="https://i.ibb.co/N2CRDq0w/logo.png"
              alt="GreenCircle Logo"
            />
            <a className="font-bold text-lg hidden lg:flex md:text-lg lg:text-xl text-green-200 ml-2">
              GreenCircle
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu ml-15 menu-horizontal px-1 text-green-200">
              <NavLink
                to="/"
                className="px-4 py-2 text-sm lg:text-lg rounded hover:bg-green-700 transition"
              >
                Home
              </NavLink>
              <NavLink
                to="/exploreGardeners"
                className="px-4 py-2 text-sm lg:text-lg rounded hover:bg-green-700 transition"
              >
                Explore Gardeners
              </NavLink>
              <NavLink
                to="/browseTips"
                className="px-4 py-2 text-sm lg:text-lg rounded hover:bg-green-700 transition"
              >
                Browse Tips
              </NavLink>
              {user && (
                <NavLink
                  to="/shareGardenTipPage"
                  className=" px-4 py-2 text-sm lg:text-lg rounded hover:bg-green-700 transition"
                >
                  Share a Garden Tip
                </NavLink>
              )}
              {user && (
                <NavLink
                  to="/myTips"
                  className="px-4 py-2 text-sm lg:text-lg rounded hover:bg-green-700 transition"
                >
                  My Tips
                </NavLink>
              )}
            </ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <div className="relative flex group dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <img
                    src={user.photoURL ? user.photoURL : userPic}
                    alt="User"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                  <span className="absolute bg-black bg-opacity-70 text-white text-sm rounded px-2 py-1 top-0 left-0 -translate-x-1/2 opacity-0 hover:opacity-100 transition">
                    {user.displayName}
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-green-800 rounded-box z-10 mt-10 shadow-lg text-green-200"
                >
                  <Link
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Logout
                  </Link>
                </ul>
              </div>
            ) : (
              <Link
                to="/signIn"
                className="px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
