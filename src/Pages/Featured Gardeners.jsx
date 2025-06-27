import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";

const FeaturedGardeners = () => {
  const [gardenerProfiles, setGardenerProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://a10-server-sandy.vercel.app/gardeners")
      .then((res) => res.json())
      .then((data) => {
        setGardenerProfiles(data);
        setLoading(false);
      });
  }, []);

  if (loading || !gardenerProfiles) {
    return <Loading />;
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 bg-[#F3FDF7] rounded-3xl shadow-inner">
      <h2 className="text-4xl font-extrabold text-center text-[#2F855A] mb-10 tracking-tight drop-shadow-md">
         Featured Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {gardenerProfiles.map(({ id, name, photo, bio }, index) => (
          <motion.div
            key={id}
            className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl border border-[#E2F3EA] hover:border-[#A0DAB6] transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#F6C26B] mb-6 shadow-md">
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#2D3748] mb-2 tracking-wide">
              {name}
            </h3>
            <p className="text-[#4A5568] text-base leading-relaxed px-3">
              {bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGardeners;
