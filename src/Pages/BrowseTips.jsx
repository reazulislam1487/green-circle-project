// export default BrowseTips;
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Eye } from "lucide-react";
import Loading from "../Components/Loading";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [difficultyFilter, setDifficultyFilter] = useState("Easy");

  useEffect(() => {
    fetch(
      `https://a10-server-sandy.vercel.app/browseTips?difficultyFilterParams=${difficultyFilter}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      });
  }, [difficultyFilter]);

  if (loading || !tips) {
    return <Loading />;
  }

  return (
    <div className="p-3 md:p-6 max-w-6xl mb-20 mx-auto  min-h-[calc(100vh-10rem)]">
      <h2 className="text-3xl font-bold  text-secondary text-center mb-8">
        Browse Garden Tips
      </h2>
      <div className="mb-4">
        <label className="mr-2 font-medium text-secondary">
          Filter by Difficulty:
        </label>
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="p-2 border rounded-md text-secondary"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-green-200 bg-white">
        <table className="min-w-full text-left">
          <thead className="bg-gradient-to-r from-green-700 to-green-500 text-white">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr
                key={tip._id}
                className="border-b hover:bg-green-50 transition duration-150"
              >
                <td className="p-4">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-16 h-16 rounded object-cover border border-green-300"
                  />
                </td>
                <td className="p-4 text-green-800 font-semibold">
                  {tip.title}
                </td>
                <td className="p-4 text-gray-700">{tip.category}</td>
                <td className="p-4">
                  <Link
                    to={`/browseTips/${tip._id}`}
                    className="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-900 transition"
                  >
                    <Eye className="w-5 h-5" />
                    <span className="hidden md:flex">See More</span>
                  </Link>
                </td>
              </tr>
            ))}

            {tips.length === 0 && (
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
  );
};

export default BrowseTips;
