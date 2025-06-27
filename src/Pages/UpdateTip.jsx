import React, { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const UpdateTip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useLoaderData();

  const defaultTip = {
    title: "",
    plantType: "",
    difficulty: "Easy",
    description: "",
    imageUrl: "",
    category: "Plant Care",
    availability: "Public",
    userName: "",
    userEmail: "",
  };

  const [formData, setFormData] = useState({ ...defaultTip, ...data });

  if (!formData || Object.keys(formData).length === 0) {
    return <Loading />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      title: formData.title,
      plantType: formData.plantType,
      difficulty: formData.difficulty,
      description: formData.description,
      imageUrl: formData.imageUrl,
      category: formData.category,
      availability: formData.availability,
      userName: formData.userName,
      userEmail: formData.userEmail,
    };

    fetch(`https://a10-server-sandy.vercel.app/updatedTip/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your tip has been updated.", "success").then(
            () => {
              navigate("/dashboard/myTips");
            }
          );
        } else {
          Swal.fire("No Change", "No update was made to the tip.", "info");
        }
      })
      .catch((err) => {
        Swal.fire("Error!", "Failed to update the tip.", err);
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-20 p-8 bg-white border border-green-200 shadow-lg rounded-2xl">
      <div className="">
        <h2 className="text-4xl font-extrabold text-center text-[#2F855A] mb-10">
          Update Garden Tip
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-[#2D3748]">
          {/* Title */}
          <div>
            <label className="block mb-2 font-semibold text-[#2F855A]">
              Tip Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="How I Grow Tomatoes Indoors"
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 bg-[#F9F9F6] outline-none"
            />
          </div>

          {/* Plant Type */}
          <div>
            <label className="block mb-2 font-semibold text-[#2F855A]">
              Plant Type / Topic
            </label>
            <input
              type="text"
              name="plantType"
              value={formData.plantType}
              onChange={handleChange}
              required
              placeholder="Tomatoes, Herbs, etc."
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 bg-[#F9F9F6] outline-none"
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="block mb-2 font-semibold text-[#2F855A]">
              Difficulty Level
            </label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 bg-[#F9F9F6] outline-none"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-[#2F855A]">
              Tip Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Share your garden wisdom..."
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 bg-[#F9F9F6] outline-none"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-semibold text-[#2F855A]">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/tip.jpg"
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 bg-[#F9F9F6] outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold text-[#2F855A]">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 bg-[#F9F9F6] outline-none"
            >
              <option value="Composting">Composting</option>
              <option value="Plant Care">Plant Care</option>
              <option value="Vertical Gardening">Vertical Gardening</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block mb-2 font-semibold text-[#2F855A]">
              Visibility
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-500 bg-[#F9F9F6] outline-none"
            >
              <option value="Public">Public</option>
              <option value="Hidden">Hidden</option>
            </select>
          </div>

          {/* Author Name */}
          <div>
            <label className="block mb-2 font-semibold text-[#2F855A]">
              Your Name
            </label>
            <input
              type="text"
              value={formData.userName}
              readOnly
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 cursor-not-allowed"
            />
          </div>

          {/* Author Email */}
          <div>
            <label className="block mb-2 font-semibold text-[#2F855A]">
              Your Email
            </label>
            <input
              type="email"
              value={formData.userEmail}
              readOnly
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 cursor-pointer bg-[#2F855A] hover:bg-[#276749] text-white font-bold rounded-lg shadow-md transition"
          >
            Update Tip
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTip;
