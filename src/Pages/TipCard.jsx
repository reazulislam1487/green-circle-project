import React from "react";
import { FiThumbsUp, FiUser, FiGlobe, FiTag, FiActivity } from "react-icons/fi";

const TipCard = React.memo(({ tip }) => {
  const iconSize = 18;

  // Truncate text cleanly without cutting words mid-way
  const truncateText = (text, maxLength = 130) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
  };

  return (
    <div
      className="group flex flex-col overflow-hidden rounded-3xl
      shadow-[0_8px_24px_rgba(46,139,87,0.15)]
      hover:shadow-[0_14px_40px_rgba(46,139,87,0.35)]
      transition-shadow duration-400
      bg-white cursor-pointer"
      aria-label={`Tip card: ${tip.title}`}
      title={tip.title}
    >
      {tip.imageUrl ? (
        <div className="overflow-hidden rounded-t-3xl h-56 relative">
          <img
            src={tip.imageUrl}
            alt={tip.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Optional gradient overlay for better text contrast */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none rounded-t-3xl"></div> */}
        </div>
      ) : (
        <div
          className="h-56 flex items-center justify-center rounded-t-3xl
          bg-gradient-to-r from-[#A0DAB6] via-[#F6C26B] to-[#A0DAB6]
          text-[#2F855A] font-extrabold text-2xl px-5 text-center"
          title={tip.title}
        >
          {tip.title}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow min-h-[320px]">
        <div className="flex justify-between items-center mb-4 text-xs font-semibold tracking-wider">
          <span
            className="flex items-center gap-1
          bg-[#A0DAB6] text-[#2F855A] px-3 py-1 rounded-full
          shadow-sm"
          >
            <FiTag size={iconSize} />
            {tip.category}
          </span>
          <span
            className="flex items-center gap-1
          bg-[#F6C26B] text-[#855E0B] px-3 py-1 rounded-full
          shadow-sm"
          >
            {tip.plantType}
          </span>
        </div>

        <h3
          className="text-2xl font-extrabold text-[#2D3748] mb-4 tracking-wide
          truncate"
          title={tip.title}
        >
          {tip.title}
        </h3>

        <div className="flex justify-between text-sm text-[#4A5568] mb-5 font-medium">
          <span className="flex items-center gap-1">
            <FiActivity size={iconSize} /> {tip.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <FiGlobe size={iconSize} /> {tip.availability}
          </span>
        </div>

        <p
          className="text-[#4A5568] text-sm flex-grow leading-relaxed mb-6
          line-clamp-5"
          title={tip.description}
        >
          {truncateText(tip.description)}
        </p>

        <div className="flex justify-between items-center text-sm text-[#718096] pt-4 border-t border-gray-200">
          <span
            className="flex items-center gap-1
            group-hover:text-[#2F855A] transition-colors font-semibold"
          >
            <FiThumbsUp size={iconSize} />
            {tip.totalLiked}
          </span>
          <span className="flex items-center gap-1 text-[#2D3748] font-semibold">
            <FiUser size={iconSize} />
            {tip.userName}
          </span>
        </div>
      </div>
    </div>
  );
});

export default TipCard;
