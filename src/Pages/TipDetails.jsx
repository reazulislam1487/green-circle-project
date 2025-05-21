import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import Loading from "../Components/Loading";

const TipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tip, setTip] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/browseTips/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTip(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tip:", error);
        setLoading(false);
      });
  }, [id]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading || !tip) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mb-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow hover:brightness-110 transition"
      >
        ← Back
      </button>

      <div className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-2xl shadow-xl p-6 relative border border-green-200">
        <button
          onClick={handleLike}
          className={`absolute top-4 right-4 text-3xl transition-transform duration-300 ${
            liked ? "text-red-500 scale-110" : "text-gray-400"
          }`}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>

        <h2 className="text-4xl font-extrabold text-green-700 mb-4">
          {tip.title}
        </h2>

        {tip.imageUrl && (
          <img
            src={tip.imageUrl}
            alt={tip.title}
            className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
          />
        )}

        <p className="text-gray-800 text-lg mb-6">{tip.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          {tip.plantType && (
            <p>
              <span className="font-semibold text-green-700">Plant Type:</span>{" "}
              {tip.plantType}
            </p>
          )}
          <p>
            <span className="font-semibold text-green-700"> Difficulty:</span>{" "}
            {tip.difficulty}
          </p>
          <p>
            <span className="font-semibold text-green-700">Category:</span>{" "}
            {tip.category}
          </p>
          <p>
            <span className="font-semibold text-green-700">Availability:</span>{" "}
            {tip.availability}
          </p>
        </div>

        {/* User Info Box */}
        <div className="mt-8 bg-green-100 border border-green-300 p-4 rounded-lg text-sm text-green-800 shadow-sm">
          <p>
            <strong> Submitted by:</strong> {tip.userName || "Anonymous"}
          </p>
          <p>
            <strong> Email:</strong> {tip.userEmail || "Not provided"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
