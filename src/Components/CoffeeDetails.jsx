import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData(); // loader থেকে coffee data পাওয়া
  const { name, price, quantity, details, photo } = coffee;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 rounded-xl shadow-lg">
      <img
        src={photo}
        alt={name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-lg text-gray-700 mb-1">
        <span className="font-semibold">Price:</span> ${price}
      </p>
      <p className="text-lg text-gray-700 mb-1">
        <span className="font-semibold">Quantity:</span> {quantity}
      </p>
      <p className="text-gray-600 mt-4">
        {details || "No additional details available."}
      </p>
    </div>
  );
};

export default CoffeeDetails;
