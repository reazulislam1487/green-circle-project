
import React from "react";
import TeamShowcase from "../Components/TeamShowcase";

const ExploreGardeners = () => {
  return (
    <div className="bg-[#F9F9F6] py-10 px-4 sm:px-6 md:px-10 min-h-screen text-[#2D3748]">
      <div className="max-w-6xl mx-auto bg-white border border-[#A0DAB6] shadow-xl rounded-3xl p-6 sm:p-10">
        {/* <h2 className="text-4xl font-bold text-[#2F855A] text-center mb-10 tracking-tight">
          🌿 Explore Gardeners
        </h2> */}
         {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2F855A] tracking-tight">
          Meet Our Gardeners
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Our passionate experts helping the world go green, one garden at a time 🌱
        </p>
      </div>

        {/* Team Cards Section */}
        <div className="mt-4">
          <TeamShowcase />
        </div>
      </div>
    </div>
  );
};

export default ExploreGardeners;
