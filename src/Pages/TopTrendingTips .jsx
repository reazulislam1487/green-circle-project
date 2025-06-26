import React, { useEffect, useState } from "react";
import { Lightbulb } from "lucide-react";
import Loading from "../Components/Loading";
import TipCard from "./TipCard";
import { motion } from "framer-motion";

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
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl text-center font-extrabold text-[#2F855A] mb-10 items-center gap-4 drop-shadow-md"
          aria-label="Top Trending Tips"
        >
          Top Trending Tips
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {tips.map((tip) => (
            <motion.div
              key={tip._id}
              variants={cardVariants}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 18px 40px rgba(46,139,87,0.3)",
                borderColor: "#2F855A",
              }}
              className="bg-white rounded-3xl shadow-md cursor-pointer transition-all duration-300 border-2 border-transparent min-h-[340px] flex flex-col"
            >
              <TipCard tip={tip} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopTrendingTips;
