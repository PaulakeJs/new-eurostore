import React from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation

function HomeSidebar() {
  return (
    <div className="bg-white shadow-xl rounded-lg p-5 w-[330px]">
      <h3 className="text-xl mb-4">Categories</h3>
      <div>
        <Link
          to="/shop/electronics"
          className="border-2 border-dotted border-gray-200 flex items-center gap-4 p-2 rounded-md block text-gray-800 hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          <i className="text-md ri-computer-line"></i>
          <span className="text-md">Electronic And Computers</span>
        </Link>
        <Link
          to="/shop/fashion"
          className="border-2 border-dotted border-gray-200 flex items-center gap-4 p-2 rounded-md block text-gray-800 hover:bg-primary hover:text-white transition duration-300 ease-in-out mt-4"
        >
          <i className="text-md ri-shirt-line"></i>
          <span className="text-md">Fashion And Clothing</span>
        </Link>
        <Link
          to="/shop/home"
          className="border-2 border-dotted border-gray-200 flex items-center gap-4 p-2 rounded-md block text-gray-800 hover:bg-primary hover:text-white transition duration-300 ease-in-out mt-4"
        >
          <i className="ri-home-6-line"></i>
          <span className="text-md">Home Appliances</span>
        </Link>
        <Link
          to="/shop/food"
          className="border-2 border-dotted border-gray-200 flex items-center gap-4 p-2 rounded-md block text-gray-800 hover:bg-primary hover:text-white transition duration-300 ease-in-out mt-4"
        >
          <i className="ri-restaurant-line"></i>
          <span className="text-md">Food And Groceries</span>
        </Link>
        {/* Add more categories like this */}
      </div>
    </div>
  );
}

export default HomeSidebar;
