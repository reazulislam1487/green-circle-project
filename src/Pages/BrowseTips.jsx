import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEye, FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";
import Loading from "../Components/Loading";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [difficultyFilter, setDifficultyFilter] = useState("Easy");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://a10-server-sandy.vercel.app/browseTips?difficultyFilterParams=${difficultyFilter}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      });
  }, [difficultyFilter]);

  const sortedTips = [...tips].sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    return sortOrder === "asc"
      ? titleA.localeCompare(titleB)
      : titleB.localeCompare(titleA);
  });

  if (loading || !tips) return <Loading />;

  return (
    <div className="bg-[#F9F9F6] px-6 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl p-6 sm:p-10 border border-[#A0DAB6]">
        <h2 className="text-4xl font-bold text-[#2F855A] text-center mb-10">
          Browse Garden Tips
        </h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-start gap-6 mb-8">
          {/* Difficulty Filter */}
          <div className="w-full sm:w-64">
            <label className="block mb-1 text-sm font-medium text-[#2D3748]">
              Filter by Difficulty
            </label>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="w-full p-3 rounded-lg border border-[#A0DAB6] bg-[#F0FFF4] text-[#2F855A] shadow-md focus:outline-none focus:ring-2 focus:ring-[#2F855A] transition"
            >
              <option value="Easy">🌱 Easy</option>
              <option value="Medium">🌿 Medium</option>
              <option value="Hard">🌵 Hard</option>
            </select>
          </div>

          {/* Sort Filter */}
          <div className="w-full sm:w-64">
            <label className="block mb-1 text-sm font-medium text-[#2D3748]">
              Sort by Title
            </label>
            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full p-3 rounded-lg border border-[#A0DAB6] bg-[#F0FFF4] text-[#2F855A] shadow-md focus:outline-none focus:ring-2 focus:ring-[#2F855A] transition"
              >
                <option value="asc">A to Z (Ascending)</option>
                <option value="desc">Z to A (Descending)</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2F855A]">
                {sortOrder === "asc" ? (
                  <FaSortAlphaDown className="text-lg" />
                ) : (
                  <FaSortAlphaUpAlt className="text-lg" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-[#A0DAB6] rounded-lg shadow-md">
          <table className="min-w-full text-sm sm:text-base text-left">
            <thead className="bg-gradient-to-r from-[#2F855A] to-[#3BAE7B] text-white">
              <tr>
                <th className="p-4 font-semibold">Image</th>
                <th className="p-4 font-semibold">Title</th>
                <th className="p-4 font-semibold hidden md:table-cell">
                  Category
                </th>
                <th className="p-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {sortedTips.map((tip) => (
                <tr
                  key={tip._id}
                  className="border-b hover:bg-[#F0FFF4] transition duration-200"
                >
                  <td className="p-4">
                    <img
                      src={tip.imageUrl}
                      alt={tip.title}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover border border-[#A0DAB6] shadow-sm"
                    />
                  </td>
                  <td className="p-4 text-[#2F855A] font-medium">
                    {tip.title}
                  </td>
                  <td className="p-4 text-gray-700 hidden md:table-cell">
                    {tip.category}
                  </td>
                  <td className="p-4 text-center">
                    <Link
                      to={`/browseTips/${tip._id}`}
                      className="inline-flex items-center gap-2 text-[#2F855A] font-semibold hover:text-[#276749] transition"
                    >
                      <FaEye />
                      <span className="hidden sm:inline">See More</span>
                    </Link>
                  </td>
                </tr>
              ))}

              {sortedTips.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-6 text-gray-500">
                    No public tips available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseTips;
