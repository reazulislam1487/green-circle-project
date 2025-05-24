import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";

// const gardeners = [
//   {
//     id: 1,
//     name: "Rahim Uddin",
//     age: 45,
//     gender: "Male",
//     status: "Active",
//     experience: "10 years in urban gardening",
//     image: "https://i.ibb.co/211Lw650/04.jpg",
//     totalTips: 28,
//     location: "Dhaka, Bangladesh",
//   },
//   {
//     id: 2,
//     name: "Fatema Begum",
//     age: 38,
//     gender: "Female",
//     status: "Available for advice",
//     experience: "7 years in rooftop farming",
//     image: "https://i.ibb.co/tTCgPFSQ/03.jpg",
//     totalTips: 42,
//     location: "Chittagong, Bangladesh",
//   },
//   {
//     id: 3,
//     name: "Sabbir Hossain",
//     age: 30,
//     gender: "Male",
//     status: "Busy - accepts bookings",
//     experience: "5 years in composting and hydroponics",
//     image: "https://i.ibb.co/sS1m7ZX/7.jpg",
//     totalTips: 18,
//     location: "Sylhet, Bangladesh",
//   },
//   {
//     id: 4,
//     name: "Nasima Khatun",
//     age: 50,
//     gender: "Female",
//     status: "Active",
//     experience: "12 years in organic vegetable gardening",
//     image: "https://i.ibb.co/d4dVy9QZ/02.jpg",
//     totalTips: 33,
//     location: "Rajshahi, Bangladesh",
//   },
//   {
//     id: 5,
//     name: "Jamal Uddin",
//     age: 35,
//     gender: "Male",
//     status: "Available for consulting",
//     experience: "8 years in medicinal plant farming",
//     image: "https://i.ibb.co/7xKLSyMC/05.jpg",
//     totalTips: 24,
//     location: "Khulna, Bangladesh",
//   },
//   {
//     id: 6,
//     name: "Shirin Akhter",
//     age: 29,
//     gender: "Female",
//     status: "Busy - mentorship slots open",
//     experience: "4 years in aquaponics and floriculture",
//     image: "https://i.ibb.co/0RX68PCS/01.jpg",
//     totalTips: 15,
//     location: "Barisal, Bangladesh",
//   },
// ];
const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://a10-server-sandy.vercel.app/exploreGardeners")
      .then((res) => res.json())
      .then((data) => {
        setGardeners(data);
        setLoading(false);
      });
  }, []);
  if (loading || !gardeners) {
    return <Loading></Loading>;
  }
  return (
    <section className="py-12 px-4 md:px-12 bg-green-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
        Explore Gardeners
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {gardeners.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={gardener.image}
              alt={gardener.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold text-green-900">
                {gardener.name}
              </h3>
              <p className="text-gray-600">
                <strong>Age:</strong> {gardener.age}
              </p>
              <p className="text-gray-600">
                <strong>Gender:</strong> {gardener.gender}
              </p>
              <p className="text-gray-600">
                <strong>Status:</strong> {gardener.status}
              </p>
              <p className="text-gray-600">
                <strong>Experience:</strong> {gardener.experience}
              </p>
              <p className="text-gray-600">
                <strong>Total Shared Tips:</strong> {gardener.totalTips}
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> {gardener.location}
              </p>
              <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreGardeners;
