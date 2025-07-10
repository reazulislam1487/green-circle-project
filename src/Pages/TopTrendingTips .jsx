import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const TopTrendingTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://a10-server-sandy.vercel.app/toptrending")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      });
  }, []);

  if (loading || !tips) {
    return <Loading />;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-14 my-20 px-6 bg-gradient-to-br from-[#E6F4EA] to-[#D3E8D5] rounded-3xl shadow-lg max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center font-extrabold text-[#2F855A] mb-10 drop-shadow-md">
          Top Trending Tips
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {tips.map((tip) => (
            <motion.div
              key={tip._id}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 18px 40px rgba(46,139,87,0.3)",
                borderColor: "#2F855A",
              }}
              className="bg-white rounded-3xl shadow-md cursor-pointer transition-all duration-300 border-2 border-transparent flex flex-col min-h-[420px]"
            >
              {/* Image */}
              {tip.imageUrl && (
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full h-40 object-cover rounded-t-3xl"
                />
              )}

              {/* Content */}
              <div className="flex flex-col flex-grow p-5">
                {/* Title */}
                <h3 className="text-green-800 font-bold text-lg mb-2 line-clamp-2">
                  {tip.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {tip.description}
                </p>

                {/* Author & Likes */}
                <div className="flex justify-between items-center text-green-700 text-sm mb-4 font-medium">
                  <span>👤 {tip.userName || "Anonymous"}</span>
                  <span className="flex items-center gap-1">
                    <FaHeart className="text-red-500" />
                    {tip.totalLiked || 0}
                  </span>
                </div>

                {/* See More Button */}
                <Link
                  to={`/browseTips/${tip._id}`}
                  className="mt-auto inline-block text-center text-white bg-[#2F855A] px-4 py-2 rounded-full font-semibold hover:bg-[#276749] transition"
                >
                  See More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopTrendingTips;
