import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-600">
          The page you are looking for might have been removed or doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg md:text-xl lg:text-2xl focus:outline-none focus:shadow-outline"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
