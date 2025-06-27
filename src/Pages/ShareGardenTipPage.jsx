import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import {
  MdTitle,
  MdOutlineCategory,
  MdPublic,
  MdLock,
  MdDescription,
} from "react-icons/md";
import { GiPlantRoots } from "react-icons/gi";
import { FaSeedling, FaUser, FaEnvelope, FaImage } from "react-icons/fa";
import { useNavigate } from "react-router";

const ShareGardenTipPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    plantType: "",
    difficulty: "Easy",
    description: "",
    imageUrl: "",
    category: "Composting",
    availability: "Public",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    const data = {
      ...formData,
      totalLiked: 0,
      userEmail: user.email,
      userName: user.displayName || user.name,
    };

    fetch("https://a10-server-sandy.vercel.app/shareGardenTipPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Tip submitted successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({
            title: "",
            plantType: "",
            difficulty: "Easy",
            description: "",
            imageUrl: "",
            category: "Composting",
            availability: "Public",
          });
          navigate("/dashboard/myTips");
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to submit tip. Please try again.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="max-w-4xl mx-auto mb-10 p-8 bg-[#F9F9F6] shadow-lg border border-green-100 rounded-2xl">
      <h2 className=" text-2xl md:text-4xl  font-bold text-[#2F855A] text-center mb-10">
        Share a Garden Tip
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 text-[#2D3748]">
        {/* Input Field Reusable Block */}
        {[
          {
            icon: <MdTitle className="text-[#2F855A]" />,
            label: "Title",
            type: "text",
            name: "title",
            placeholder: "How I Grow Tomatoes Indoors",
            required: true,
          },
          {
            icon: <GiPlantRoots className="text-[#2F855A]" />,
            label: "Plant Type/Topic",
            type: "text",
            name: "plantType",
            placeholder: "Tomatoes, Herbs, etc.",
            required: true,
          },
          {
            icon: <FaImage className="text-[#2F855A]" />,
            label: "Image URL",
            type: "url",
            name: "imageUrl",
            placeholder: "https://example.com/image.jpg",
            required: false,
          },
        ].map(({ icon, label, type, name, placeholder, required }) => (
          <div key={name}>
            <label className="flex items-center gap-2 mb-2 font-medium text-green-900">
              {icon}
              {label}
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F855A] bg-white transition"
            />
          </div>
        ))}

        {/* Difficulty Level */}
        <div>
          <label className="flex items-center gap-2 mb-2 font-medium text-green-900">
            <FaSeedling className="text-[#2F855A]" />
            Difficulty Level
          </label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F855A] bg-white transition"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="flex items-center gap-2 mb-2 font-medium text-green-900">
            <MdDescription className="text-[#2F855A]" />
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write your gardening tip here..."
            rows={4}
            required
            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F855A] bg-white transition"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="flex items-center gap-2 mb-2 font-medium text-green-900">
            <MdOutlineCategory className="text-[#2F855A]" />
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F855A] bg-white transition"
          >
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
          </select>
        </div>

        {/* Availability */}
        <div>
          <label className="flex items-center gap-2 mb-2 font-medium text-green-900">
            {formData.availability === "Public" ? (
              <MdPublic className="text-[#2F855A]" />
            ) : (
              <MdLock className="text-[#2F855A]" />
            )}
            Availability
          </label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F855A] bg-white transition"
          >
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>

        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium text-green-900">
              <FaUser className="text-[#2F855A]" />
              Your Name
            </label>
            <input
              type="text"
              value={user?.displayName || user?.name || ""}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium text-green-900">
              <FaEnvelope className="text-[#2F855A]" />
              Your Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full cursor-pointer py-3 bg-[#2F855A] hover:bg-[#276749] text-white font-semibold text-lg rounded-lg transition duration-300 shadow-md"
        >
          Add Tip
        </button>
      </form>
    </div>
  );
};

export default ShareGardenTipPage;
