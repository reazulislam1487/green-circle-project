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
    fetch(`http://localhost:3000/updatedTip/${id}`, {
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
    <div className="max-w-3xl mx-auto my-12 p-8 rounded-2xl shadow-xl bg-gradient-to-b from-green-50 to-green-100 border border-green-200">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
         Update Garden Tip
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          {
            label: "Title",
            name: "title",
            placeholder: "How I Grow Tomatoes Indoors",
          },
          {
            label: "Plant Type/Topic",
            name: "plantType",
            placeholder: "Tomatoes, Herbs, etc.",
          },
          {
            label: "Image URL",
            name: "imageUrl",
            placeholder: "https://example.com/image.jpg",
          },
        ].map(({ label, name, placeholder }) => (
          <div key={name}>
            <label className="block text-green-900 font-semibold mb-1">
              {label}
            </label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full p-3 border border-green-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required={name !== "imageUrl"}
            />
          </div>
        ))}

        <div>
          <label className="block text-green-900 font-semibold mb-1">
            Difficulty Level
          </label>
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full p-3 border border-green-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block text-green-900 font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Write your gardening tip here..."
            className="w-full p-3 border border-green-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-green-900 font-semibold mb-1">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border border-green-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
          </select>
        </div>

        <div>
          <label className="block text-green-900 font-semibold mb-1">
            Availability
          </label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full p-3 border border-green-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        <div>
          <label className="block text-green-900 font-semibold mb-1">
            Your Name
          </label>
          <input
            type="text"
            value={formData.userName}
            readOnly
            className="w-full p-3 border border-green-200 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        <div>
          <label className="block text-green-900 font-semibold mb-1">
            Your Email
          </label>
          <input
            type="email"
            value={formData.userEmail}
            readOnly
            className="w-full p-3 border border-green-200 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white text-lg font-semibold shadow-md transition-all duration-300"
        >
           Update Tip
        </button>
      </form>
    </div>
  );
  //   <div className="max-w-3xl my-20 mx-auto p-6 bg-white shadow rounded mt-6">
  //     <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
  //       Update Garden Tip
  //     </h2>
  //     <form onSubmit={handleSubmit} className="space-y-4">
  //       <div>
  //         <label className="label text-green-900 font-medium">Title</label>
  //         <input
  //           type="text"
  //           name="title"
  //           value={formData.title}
  //           onChange={handleChange}
  //           placeholder="How I Grow Tomatoes Indoors"
  //           className="input input-bordered w-full bg-white"
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label className="label text-green-900 font-medium">
  //           Plant Type/Topic
  //         </label>
  //         <input
  //           type="text"
  //           name="plantType"
  //           value={formData.plantType}
  //           onChange={handleChange}
  //           placeholder="Tomatoes, Herbs, etc."
  //           className="input input-bordered w-full bg-white"
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label className="label text-green-900 font-medium">
  //           Difficulty Level
  //         </label>
  //         <select
  //           name="difficulty"
  //           value={formData.difficulty || "Easy"}
  //           onChange={handleChange}
  //           className="select select-bordered w-full bg-white"
  //         >
  //           <option value="Easy">Easy</option>
  //           <option value="Medium">Medium</option>
  //           <option value="Hard">Hard</option>
  //         </select>
  //       </div>

  //       <div>
  //         <label className="label text-green-900 font-medium">
  //           Description
  //         </label>
  //         <textarea
  //           name="description"
  //           value={formData.description}
  //           onChange={handleChange}
  //           placeholder="Write your gardening tip here..."
  //           className="textarea textarea-bordered w-full bg-white"
  //           rows={4}
  //           required
  //         ></textarea>
  //       </div>

  //       <div>
  //         <label className="label text-green-900 font-medium">Image URL</label>
  //         <input
  //           type="url"
  //           name="imageUrl"
  //           value={formData.imageUrl}
  //           onChange={handleChange}
  //           placeholder="https://example.com/image.jpg"
  //           className="input input-bordered w-full bg-white"
  //         />
  //       </div>

  //       <div>
  //         <label className="label text-green-900 font-medium">Category</label>
  //         <select
  //           name="category"
  //           value={formData.category || "Plant Care"}
  //           onChange={handleChange}
  //           className="select select-bordered w-full bg-white"
  //         >
  //           <option value="Composting">Composting</option>
  //           <option value="Plant Care">Plant Care</option>
  //           <option value="Vertical Gardening">Vertical Gardening</option>
  //         </select>
  //       </div>

  //       <div>
  //         <label className="label text-green-900 font-medium">
  //           Availability
  //         </label>
  //         <select
  //           name="availability"
  //           value={formData.availability || "Public"}
  //           onChange={handleChange}
  //           className="select select-bordered w-full bg-white"
  //         >
  //           <option value="Public">Public</option>
  //           <option value="Hidden">Hidden</option>
  //         </select>
  //       </div>

  //       <div>
  //         <label className="label text-green-900 font-medium">Your Name</label>
  //         <input
  //           type="text"
  //           value={formData.userName}
  //           readOnly
  //           className="input input-disabled w-full bg-gray-100"
  //         />
  //       </div>

  //       <div>
  //         <label className="label text-green-900 font-medium">Your Email</label>
  //         <input
  //           type="email"
  //           value={formData.userEmail}
  //           readOnly
  //           className="input input-disabled w-full bg-gray-100"
  //         />
  //       </div>

  //       <button
  //         type="submit"
  //         className="btn bg-green-600 hover:bg-green-700 text-white w-full font-semibold"
  //       >
  //         Update Tip
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default UpdateTip;
