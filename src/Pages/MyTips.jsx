import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Loading from "../Components/Loading";
import Swal from "sweetalert2";

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3000/myTips?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this tip. This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your tip has been deleted.",
                icon: "success",
              });
              setTips((prevTips) => prevTips.filter((tip) => tip._id !== id));
            }
          })
          .catch((error) => {
            console.error("Error deleting tip:", error);
            Swal.fire("Error", "Something went wrong while deleting.", "error");
          });
      }
    });
  };
  const handleUpdate = (id) => {
    navigate(`/updateTip/${id}`);
  };
  if (loading || !user) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-[calc(100vh-10rem)]">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        My Garden Tips
      </h2>

      {tips.length === 0 ? (
        <p className="text-center text-gray-600">No tips found. Share one!</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-green-300">
          <table className="w-full text-left bg-white rounded-lg">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-4 border-b">Title</th>
                <th className="p-4 border-b hidden md:flex">Description</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tips.map((tip) => (
                <tr
                  key={tip._id}
                  className="hover:bg-green-50 transition duration-150"
                >
                  <td className="p-4 border-b text-green-900 font-medium">
                    {tip.title}
                  </td>
                  <td className="p-4 hidden md:flex border-b text-gray-700">
                    {tip.description}
                  </td>
                  <td className="p-4 border-b">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                        tip.availability === "Public"
                          ? "bg-green-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {tip.availability === "Public" ? "Public" : "Hidden"}
                    </span>
                  </td>
                  <td className="p-4 border-b space-x-2">
                    <FaRegEdit
                      size={20}
                      onClick={() => handleUpdate(tip._id)}
                      className="cursor-pointer mb-2"
                    />
                    <MdDelete
                      size={22}
                      className="cursor-pointer"
                      onClick={() => handleDelete(tip._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTips;
