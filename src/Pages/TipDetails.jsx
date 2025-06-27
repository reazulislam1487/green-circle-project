import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import Loading from "../Components/Loading";
import Swal from "sweetalert2";

const TipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tip, setTip] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://a10-server-sandy.vercel.app/browseTips/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTip(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleLike = () => {
    fetch(`https://a10-server-sandy.vercel.app/browseTips/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: liked ? -1 : 1 }),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: liked ? "Like removed!" : "You liked this tip!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setTip((prev) => ({
          ...prev,
          totalLiked: prev.totalLiked + (liked ? -1 : 1),
        }));
        setLiked(!liked);
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading || !tip) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mb-6 cursor-pointer inline-flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow transition"
      >
        ← Back to Tips
      </button>

      {/* Main Card */}
      <div className="grid md:grid-cols-2 gap-10 bg-white border border-green-200 rounded-3xl shadow-2xl overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={tip.imageUrl}
            alt={tip.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleLike}
            className="absolute top-5 right-5 text-4xl text-white drop-shadow-lg hover:scale-110 transition"
          >
            {liked ? (
              <FaHeart className="text-red-500 cursor-pointer" />
            ) : (
              <FaRegHeart className="cursor-pointer" />
            )}
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#2F855A] mb-4">
              {tip.title}
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {tip.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 mb-6">
              {tip.plantType && (
                <p>
                  <span className="font-semibold text-[#2F855A]">
                    🌿 Plant Type:
                  </span>{" "}
                  {tip.plantType}
                </p>
              )}
              <p>
                <span className="font-semibold text-[#2F855A]">
                  📘 Difficulty:
                </span>{" "}
                {tip.difficulty}
              </p>
              <p>
                <span className="font-semibold text-[#2F855A]">
                  📂 Category:
                </span>{" "}
                {tip.category}
              </p>
              <p>
                <span className="font-semibold text-[#2F855A]">
                  👁️ Visibility:
                </span>{" "}
                {tip.availability}
              </p>
              <p>
                <span className="font-semibold text-[#2F855A]">
                  ❤️ Total Likes:
                </span>{" "}
                {tip.totalLiked || 0}
              </p>
            </div>
          </div>

          {/* Author Info */}
          <div className="mt-4 bg-green-50 border border-green-200 p-4 rounded-xl text-sm text-green-900 shadow-sm">
            <p>
              <strong>👤 Submitted by:</strong> {tip.userName || "Anonymous"}
            </p>
            <p>
              <strong>✉️ Email:</strong> {tip.userEmail || "Not provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetails;
