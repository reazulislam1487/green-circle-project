import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center p-6">
      <img
        src="https://www.shutterstock.com/image-vector/young-man-surprised-hand-on-600nw-1175222608.jpg"
        alt="Garden not found"
        className="w-50 max-w-md rounded-xl shadow-md mb-6"
      />
      <h1 className="text-5xl font-bold text-green-700 mb-4">404</h1>
      <p className="text-xl text-green-800 mb-4">
        Oops! The garden path you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="btn bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
