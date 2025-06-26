import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center p-6">
      <h1 className="text-7xl font-bold text-green-800 mb-4">404</h1>
      <h3 className="text-2xl font-bold text-green-600 mb-2">Page not found</h3>
      <p className="text-xl text-green-800 mb-4">
        Sorry, the content that you are looking for doesn't exist.
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
