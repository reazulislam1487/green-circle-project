import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/dashboard", icon: "📊", label: "Dashboard" },
    { path: "/dashboard/shareGardenTipPage", icon: "📝", label: "Create Tip" },
    { path: "/dashboard/browseTips", icon: "🌱", label: "Browse Tips" },
    { path: "/dashboard/myTips", icon: "📁", label: "My Tips" },
  ];

  return (
    <>
      {/* Hamburger (Mobile Only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-2 right-2 z-[60] p-2 rounded-full bg-white shadow-lg text-green-700"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64  bg-white shadow-2xl z-45  pt-0 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 h-[calc(100vh-5rem)] md:pt-8 overflow-y-auto bg-gradient-to-b from-green-100 to-green-50 flex flex-col justify-between">
          <div>
            {/* Sidebar title */}
            <h2 className="text-2xl font-bold text-green-800 mb-6 hidden md:block">
              GreenCircle
            </h2>

            {/* Navigation */}
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center cursor-pointer gap-3 p-3 rounded-lg bg-white shadow hover:bg-green-100 hover:scale-[1.02] transform transition duration-150"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium text-green-800">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Back to Home Button */}
          <div className="">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-white bg-[#2F855A] hover:bg-green-700 transition font-medium rounded-lg px-4 py-3 shadow-lg"
            >
              🔙 Back to Home
            </Link>
          </div>
        </div>
      </aside>

      {/* Background overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
