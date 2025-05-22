import React from "react";
import {
  FiThumbsUp,
  FiUser,
  FiGlobe,
  FiTag,
  FiActivity,
} from "react-icons/fi";

const TipCard = React.memo(({ tip }) => {
  const iconSize = 16;

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-green-200 transition-shadow duration-300 overflow-hidden flex flex-col">
      {tip.imageUrl ? (
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-green-50 flex items-center justify-center">
            {tip.title}
        </div>
      )}

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2 text-xs">
          <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            <FiTag size={iconSize} /> {tip.category}
          </span>
          <span className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
            {tip.plantType}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-1">{tip.title}</h3>

        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <FiActivity size={iconSize} /> {tip.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <FiGlobe size={iconSize} /> {tip.availability}
          </span>
        </div>

        <p className="text-gray-600 text-sm flex-grow">
          {tip.description?.slice(0, 100)}...
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-4 pt-3 border-t">
          <span className="flex items-center gap-1 group-hover:text-green-600 transition-colors">
            <FiThumbsUp size={iconSize} /> {tip.totalLiked}
          </span>
          <span className="flex items-center gap-1 text-gray-700 font-medium">
            <FiUser size={iconSize} /> {tip.userName}
          </span>
        </div>
      </div>
    </div>
  );
});

export default TipCard;
