import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaSeedling, FaUsers, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router";

const Grow = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto py-24 px-4 "
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
        {/* Left: Heading & text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className=" text-2xl md:text-4xl font-extrabold text-green-800 mb-6 leading-tight tracking-wide">
            <Typewriter
              words={[
                "Ready to Grow With Us?",
                "Join Our Green Community!",
                "Let's Bloom Together!",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2200}
            />
          </h2>
          <p className="text-sm md:text-xl text-gray-700 mb-10 max-w-lg mx-auto md:mx-0 tracking-wide leading-relaxed">
            Whether you're just planting your first seed or you're a seasoned
            green thumb, GardenCircle welcomes you. Share, learn, and thrive in
            our growing community.
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col gap-6 w-full max-w-xs">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05, outline: "none" }}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-lime-400 text-green-900 font-semibold px-12 py-4 rounded-full shadow-lg hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition"
          >
            <FaUsers size={24} />
            <Link to="/exploreGardeners">Join the Community</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05, outline: "none" }}
            className="flex items-center justify-center gap-3 border-2 border-green-800 text-green-800 font-semibold px-12 py-4 rounded-full shadow-md hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 transition"
          >
            <FaBookOpen size={24} />
            <Link to="/dashboard/myTips"> Explore Resources</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05, outline: "none" }}
            className="flex items-center justify-center gap-3 bg-green-700 text-white font-semibold px-12 py-4 rounded-full shadow-md hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-600 transition"
          >
            <FaSeedling size={24} />
            <Link to="/dashboard/shareGardenTipPage">
              Plant Your First Seed
            </Link>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Grow;
