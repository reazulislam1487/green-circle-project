import React from "react";
import {
  FaLeaf,
  FaHandsHelping,
  FaLightbulb,
  FaSeedling,
} from "react-icons/fa";

const WhyJoin = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly Wisdom",
      desc: "Practical, nature-friendly tips to help your plants thrive sustainably.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Supportive Community",
      desc: "Ask questions, share your growth journey, and help others bloom.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Garden Ideas",
      desc: "Discover fun DIY projects and unique planting techniques.",
    },
    {
      icon: <FaSeedling />,
      title: "Grow Together",
      desc: "Attend real-life events, workshops, and plant swaps nearby.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F9F9F6] to-[#E6F4EA] py-24 px-6 lg:px-0">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F855A] mb-14">
          Why Join <span className="text-[#F6C26B]">GreenCircle</span>?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-white border border-[#A0DAB6] rounded-3xl p-6 transition-all duration-300 shadow hover:shadow-2xl hover:scale-105"
            >
              <div className="text-4xl text-[#2F855A] mb-4 group-hover:text-[#276749] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2D3748] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
