import React from "react";
import { Link } from "react-router-dom";
import HomeSidebar from "./HomeSidebar";

function Ad() {
  const [click, setClick] = React.useState(false);
  return (
    <div className="bg-white shadow-xl rounded-lg p-5 w-full">
     
      <div className="flex justify-between">
        <h3 className="text-lg mb-4">Featured Products</h3>
        {click == true && <HomeSidebar />}
        <span>
          {click == false ? (
            <i
              className="md:hidden ri-menu-5-line"
              onClick={() => {
                setClick(true);
              }}
            ></i>
          ) : (
            <i
              className="ri-close-circle-line"
              onClick={() => {
                setClick(false);
              }}
            ></i>
          )}
        </span>
      </div>
      <div className="flex gap-2 flex-col md:flex-row items-center ">
        <div className=" space-y-3 p-4">
          <div className="ad1 w-[350px]  md:w-[500px] rounded-md p-4 text-white h-[100px]">
            We Have The Best Nike Shoes WorldWIde <br />
            <Link className="text-black">Shop Now</Link>
          </div>
          <div className="ad2 w-[350px] md:w-[500px] rounded-md p-4 text-white h-[100px]">
            We Have The Best Christmas Deals On Adidas Shoes WorldWIde <br />
            <Link className="text-black">Shop Now</Link>
          </div>
        </div>
        <div className="max-w-[300px] mx-auto rounded-md p-4 text-white flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQe1nw54VyTMMM530tG1UNKVqr76iIVYqN5_9II98FQ&s"
            alt="Advert Bag"
            className="w-32 h-32 object-cover mb-2"
          />
          <p className="text-lg mb-2 text-black">Special Bags Deals</p>
          <Link to="/bags" className="text-black font-semibold hover:underline">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ad;
