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

const ShareGardenTipPage = () => {
  const { user } = useContext(AuthContext);
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
    <div className="max-w-3xl my-20 mx-auto p-6 bg-white shadow-md rounded-lg border border-green-200">
      <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
        Share a Garden Tip
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 text-green-500 ">
        {/* Title */}
        <div>
          <label className="flex items-center gap-2 mb-1 text-green-900 font-medium">
            <MdTitle className="text-green-700" />
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="How I Grow Tomatoes Indoors"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            required
          />
        </div>

        {/* Plant Type */}
        <div>
          <label className="flex items-center gap-2 mb-1 text-green-900 font-medium">
            <GiPlantRoots className="text-green-700" />
            Plant Type/Topic
          </label>
          <input
            type="text"
            name="plantType"
            value={formData.plantType}
            onChange={handleChange}
            placeholder="Tomatoes, Herbs, etc."
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            required
          />
        </div>

        {/* Difficulty Level */}
        <div>
          <label className="flex items-center gap-2 mb-1 text-green-900 font-medium">
            <FaSeedling className="text-green-700" />
            Difficulty Level
          </label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="flex items-center gap-2 mb-1 text-green-900 font-medium">
            <MdDescription className="text-green-700" />
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write your gardening tip here..."
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="flex items-center gap-2 mb-1 text-green-900 font-medium">
            <FaImage className="text-green-700" />
            Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          />
        </div>

        {/* Category */}
        <div>
          <label className="flex items-center gap-2 mb-1 text-green-900 font-medium">
            <MdOutlineCategory className="text-green-700" />
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
          </select>
        </div>

        {/* Availability */}
        <div>
          <label className="flex items-center gap-2 mb-1 text-green-900 font-medium">
            {formData.availability === "Public" ? (
              <MdPublic className="text-green-700" />
            ) : (
              <MdLock className="text-green-700" />
            )}
            Availability
          </label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>

        {/* User Name */}
        <div>
          <label className="flex items-center gap-2 mb-1 text-green-900 font-medium">
            <FaUser className="text-green-700" />
            Your Name
          </label>
          <input
            type="text"
            value={user?.displayName || user?.name || ""}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
          />
        </div>

        {/* User Email */}
        <div>
          <label className="flex items-center gap-2 mb-1 text-green-900 font-medium">
            <FaEnvelope className="text-green-700" />
            Your Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition duration-200"
        >
          Submit Tip
        </button>
      </form>
    </div>
  );
};

export default ShareGardenTipPage;
