import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-6">Looks like you got lost in space...</p>
        <p className="text-lg mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-lg underline hover:text-gray-200">
          Go back to safety
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
