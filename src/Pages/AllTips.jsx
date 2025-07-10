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
    <div className="bg-[#F9F9F6] py-10 px-6 md:px-8 xl:px-0 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl p-6 sm:p-10 border border-[#A0DAB6]">
        <h2 className="text-4xl font-bold text-[#2F855A] text-center mb-10">
          Browse Garden Tips
        </h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-start gap-6  md:gap-4 mb-8">
          {/* Difficulty Filter */}
          <div className="w-full sm:w-72">
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
          <div className="w-full sm:w-72">
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

        {/* Tips Grid */}
        {sortedTips.length === 0 ? (
          <p className="text-center text-gray-500 p-10">
            No public tips available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedTips.map((tip) => (
              <div
                key={tip._id}
                className="flex flex-col bg-white rounded-xl shadow-lg border border-[#A0DAB6] overflow-hidden"
                style={{ minHeight: "380px" }} // consistent card height
              >
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full h-40 object-cover"
                />
                <div className="flex flex-col flex-grow p-4">
                  <h3 className="text-green-800 font-semibold text-lg mb-2 line-clamp-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-700 flex-grow text-sm mb-4 line-clamp-3">
                    {tip.description}
                  </p>
                  <Link
                    to={`/browseTips/${tip._id}`}
                    className="mt-auto inline-block text-green-700 font-semibold hover:text-green-900 transition"
                  >
                    See More <FaEye className="inline ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseTips;
