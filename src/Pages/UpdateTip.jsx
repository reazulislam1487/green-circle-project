import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const UpdateTip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tip, setTip] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the existing tip
  useEffect(() => {
    fetch(`http://localhost:3000/updatedTip/${id}`)
      .then((res) => res.json())
      .then((data) => setTip(data));
    setLoading(false);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTip = {
      title: form.title.value,
      description: form.description.value,
      isPublic: form.isPublic.checked,
    };

    fetch(`http://localhost:3000/updatedTip/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your tip has been updated.", "success");
          navigate("/myTips");
        }
      });
  };
  console.log(tip);
  if (loading || !tip) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
        ✏️ Update Garden Tip
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold text-green-800 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={tip.title}
            required
            className="w-full border border-green-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold text-green-800 mb-1">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={tip.description}
            required
            className="w-full border border-green-300 rounded px-4 py-2"
          ></textarea>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isPublic"
            defaultChecked={tip.isPublic}
            className="accent-green-700"
          />
          <label className="text-green-800 font-medium">Make tip public</label>
        </div>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded transition"
        >
          Update Tip
        </button>
      </form>
    </div>
  );
};

export default UpdateTip;
