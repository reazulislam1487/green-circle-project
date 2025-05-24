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
    console.log(updatedData);
    fetch(`https://a10-server-sandy.vercel.app/updatedTip/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your tip has been updated.", "success").then(
            () => {
              navigate("/myTips");
            }
          );
        } else {
          Swal.fire("No Change", "No update was made to the tip.", "info");
        }
      })
      .catch((err) => {
        Swal.fire("Error!", "Failed to update the tip.", "error");
        console.error("Update error:", err);
      });
  };
  return (
    <div className="max-w-3xl my-20 mx-auto p-6 bg-white shadow-md rounded-lg border border-green-200">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Update Garden Tip
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 text-green-500">
        <div>
          <label className="block mb-1 text-green-900 font-medium">Title</label>
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

        <div>
          <label className="block mb-1 text-green-900 font-medium">
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

        <div>
          <label className="block mb-1 text-green-900 font-medium">
            Difficulty Level
          </label>
          <select
            name="difficulty"
            value={formData.difficulty || "Easy"}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-accent font-medium">
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

        <div>
          <label className="block mb-1 text-green-900 font-medium">
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

        <div>
          <label className="block mb-1 text-green-900 font-medium">
            Category
          </label>
          <select
            name="category"
            value={formData.category || "Plant Care"}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-green-900 font-medium">
            Availability
          </label>
          <select
            name="availability"
            value={formData.availability || "Public"}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-green-900 font-medium">
            Your Name
          </label>
          <input
            type="text"
            value={formData.userName}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block mb-1 text-green-900 font-medium">
            Your Email
          </label>
          <input
            type="email"
            value={formData.userEmail}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition duration-200"
        >
          Update Tip
        </button>
      </form>
    </div>
  );
};

export default UpdateTip;
