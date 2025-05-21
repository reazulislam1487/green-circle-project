// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";
// import { Eye } from "lucide-react";
// import Loading from "../Components/Loading";

// const BrowseTips = () => {
//   const [tips, setTips] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:3000/browseTips")
//       .then((res) => res.json())
//       .then((data) => {
//         setTips(data);
//         setLoading(false);
//       });
//   }, []);
//   if (loading || !tips) {
//     return <Loading></Loading>;
//   }
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Browse Tips</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded shadow">
//           <thead className="bg-gray-100 text-gray-700 text-left">
//             <tr>
//               <th className="p-3">Image</th>
//               <th className="p-3">Title</th>
//               <th className="p-3">Category</th>
//               <th className="p-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tips.map((tip) => (
//               <tr key={tip._id} className="border-b hover:bg-gray-50">
//                 <td className="p-3">
//                   <img
//                     src={tip.imageUrl}
//                     alt={tip.title}
//                     className="w-16 h-16 rounded object-cover"
//                   />
//                 </td>
//                 <td className="p-3">{tip.title}</td>
//                 <td className="p-3">{tip.category}</td>
//                 <td className="p-3">
//                   <Link
//                     to={`/browseTips/${tip._id}`}
//                     className="text-blue-600 cursor-pointer hover:underline flex items-center gap-2"
//                   >
//                     <Eye className="w-5 h-5" />
//                     <span>See More</span>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//             {tips.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center p-4 text-gray-500">
//                   No public tips available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BrowseTips;
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Eye } from "lucide-react";
import Loading from "../Components/Loading";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/browseTips")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      });
  }, []);

  if (loading || !tips) {
    return <Loading />;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Browse Garden Tips
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-green-200 bg-white">
        <table className="min-w-full text-left">
          <thead className="bg-gradient-to-r from-green-700 to-green-500 text-white">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr
                key={tip._id}
                className="border-b hover:bg-green-50 transition duration-150"
              >
                <td className="p-4">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-16 h-16 rounded object-cover border border-green-300"
                  />
                </td>
                <td className="p-4 text-green-800 font-semibold">
                  {tip.title}
                </td>
                <td className="p-4 text-gray-700">{tip.category}</td>
                <td className="p-4">
                  <Link
                    to={`/browseTips/${tip._id}`}
                    className="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-900 transition"
                  >
                    <Eye className="w-5 h-5" />
                    <span>See More</span>
                  </Link>
                </td>
              </tr>
            ))}

            {tips.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  No public tips available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
