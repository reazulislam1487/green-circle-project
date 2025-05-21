import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

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
    fetch("http://localhost:3000/shareGardenTipPage", {
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
          // setFormData({
          //   title: "",
          //   plantType: "",
          //   difficulty: "Easy",
          //   description: "",
          //   imageUrl: "",
          //   category: "Composting",
          //   availability: "Public",
          // });
        } else {
          Swal.fire({
            icon: "success",
            title: "Failed to submit tip. Please try again.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    // console.log("Submitted Tip:", data);
  };

  return (
    <div className="p-6 my-20 max-w-xl mx-auto mt-10 bg-gradient-to-br from-green-100 via-green-200 to-green-300 rounded-2xl shadow-lg border border-green-300">
      <h2 className="text-2xl font-extrabold text-green-800 mb-6 text-center">
        Share a Garden Tip
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label text-green-900 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="How I Grow Tomatoes Indoors"
            className="input input-bordered w-full bg-white"
            required
          />
        </div>
        <div>
          <label className="label text-green-900 font-medium">
            Plant Type/Topic
          </label>
          <input
            type="text"
            name="plantType"
            value={formData.plantType}
            onChange={handleChange}
            placeholder="Tomatoes, Herbs, etc."
            className="input input-bordered w-full bg-white"
            required
          />
        </div>
        <div>
          <label className="label text-green-900 font-medium">
            Difficulty Level
          </label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="select select-bordered w-full bg-white"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div>
          <label className="label text-green-900 font-medium">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write your gardening tip here..."
            className="textarea textarea-bordered w-full bg-white"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <label className="label text-green-900 font-medium">Image URL</label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full bg-white"
          />
        </div>
        <div>
          <label className="label text-green-900 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="select select-bordered w-full bg-white"
          >
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
          </select>
        </div>
        <div>
          <label className="label text-green-900 font-medium">
            Availability
          </label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="select select-bordered w-full bg-white"
          >
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>
        <div>
          <label className="label text-green-900 font-medium">Your Name</label>
          <input
            type="text"
            value={user?.displayName || user?.name || ""}
            readOnly
            className="input input-disabled w-full bg-gray-100"
          />
        </div>
        <div>
          <label className="label text-green-900 font-medium">Your Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-disabled w-full bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="btn bg-green-600 hover:bg-green-700 text-white w-full font-semibold"
        >
          Submit Tip
        </button>
      </form>
    </div>
  );
};

export default ShareGardenTipPage;
