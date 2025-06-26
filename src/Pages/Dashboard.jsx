import React, { useContext, useEffect, useState } from "react";
import { FaLightbulb, FaUser, FaClipboardList } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [browseTipsCount, setBrowseTipsCount] = useState(0);
  const [myTipsCount, setMyTipsCount] = useState(0);

  // Fetch Browse Tips and My Tips count
  useEffect(() => {
    axios
      .get("https://a10-server-sandy.vercel.app/browseTips")
      .then((res) => setBrowseTipsCount(res.data.length))
      .catch((err) => console.log(err));

    if (user?.email) {
      axios
        .get(`https://a10-server-sandy.vercel.app/myTips?email=${user.email}`)
        .then((res) => setMyTipsCount(res.data.length))
        .catch((err) => console.log(err));
    }
  }, [user?.email]);

  return (
    <div className="bg-[#F9F9F6] min-h-screen p-4 md:p-8 text-[#2D3748]">
      <h2 className="text-3xl font-bold mb-6 text-[#2F855A]">
        📊 Dashboard Overview
      </h2>

      {/* User Info */}
      <div className="bg-white border border-[#A0DAB6] rounded-xl shadow p-4 mb-8">
        <h3 className="text-xl font-semibold text-[#2F855A] mb-2">
          Welcome, {user?.displayName || "User"}!
        </h3>
        <p className="text-sm text-gray-600">Email: {user?.email}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Browse Tips */}
        <div className="bg-white border border-[#A0DAB6] rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaLightbulb className="text-3xl mx-auto text-[#2F855A] mb-3" />
          <h4 className="text-lg font-semibold text-[#2F855A]">Browse Tips</h4>
          <p className="text-2xl font-bold text-gray-700">{browseTipsCount}</p>
        </div>

        {/* My Tips */}
        <div className="bg-white border border-[#A0DAB6] rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaClipboardList className="text-3xl mx-auto text-[#2F855A] mb-3" />
          <h4 className="text-lg font-semibold text-[#2F855A]">My Tips</h4>
          <p className="text-2xl font-bold text-gray-700">{myTipsCount}</p>
        </div>

        {/* User Summary */}
        <div className="bg-white border border-[#A0DAB6] rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <FaUser className="text-3xl mx-auto text-[#2F855A] mb-3" />
          <h4 className="text-lg font-semibold text-[#2F855A]">Account</h4>
          <p className="text-md font-medium text-gray-700">
            {user?.displayName || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
