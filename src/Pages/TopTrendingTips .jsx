import React from "react";
import { Lightbulb } from "lucide-react";

const tips = [
  "Always write clean, readable code.",
  "Use semantic HTML for better accessibility.",
  "Break components into reusable parts.",
  "Keep your state management minimal and effective.",
  "Use environment variables for secrets.",
  "Optimize images and assets for faster loading.",
];

const TopTrendingTips = () => {
  return (
    <section className=" py-10 mb-10 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Lightbulb className="text-yellow-500" />
          Top Trending Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl p-5 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Tip {index + 1}
              </h3>
              <p className="text-gray-600">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopTrendingTips;
