// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../Context/AuthContext";

// const MyTips = () => {
//   const { user } = useContext(AuthContext);
//   const [tips, setTips] = useState([]);
//   //   console.log(user.email);

//   useEffect(() => {
//     if (!user) return;
//     fetch(`http://localhost:3000/myTips?email=${user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setTips(data);
//       });
//   }, [user]);
//   console.log(tips);

//   return (
//     <div className="p-4 max-w-5xl mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-6">My Garden Tips</h2>
//       <table className="w-full border text-left">
//         <thead className="bg-green-800 text-white">
//           <tr>
//             <th className="p-2 border">Title</th>
//             <th className="p-2 border">Description</th>
//             <th className="p-2 border">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tips.map((tip) => (
//             <tr key={tip._id} className="hover:bg-green-50">
//               <td className="p-2 border">{tip.title}</td>
//               <td className="p-2 border">{tip.description}</td>
//               <td className="p-2 border">
//                 {tip.isPublic ? "Public" : "Private"}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyTips;

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Loading from "../Components/Loading";

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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this tip?"
    );
    if (!confirmDelete) return;

    fetch(`http://localhost:3000/tips/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Tip deleted successfully");
          setTips(tips.filter((tip) => tip._id !== id));
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
    <div className="p-6 max-w-6xl mx-auto">
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
                <th className="p-4 border-b">Description</th>
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
                  <td className="p-4 border-b text-gray-700">
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
