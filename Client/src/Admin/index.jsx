import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Admin() {
  const tasks = [
    {
      heading: "Analytics",
      description: "Check Out How Your Website Is Doing",
      path: "/admin/analytics",
      imageUrl:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/data_analyticstrendsmin.jpg",
    },
    {
      heading: "View Category Item",
      description: "Check Out All sub-Category ",
      path: "/admin/category-item",
      imageUrl:
        "https://valq.com/wp-content/uploads/8-step-process-for-category-planning-a.png",
    },
    {
      heading: "All Products",
      description: "Check Out All The Products On Your Website",
      path: "/admin/products",
      imageUrl:
        "https://assets.aboutamazon.com/dims4/default/7447b7f/2147483647/strip/true/crop/1999x1125+0+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fab%2F5d%2F9ea369ad4d69abe56a3230d6730c%2Fhero-influencerbestseller-2023-2.jpg",
    },
    {
      heading: "Users",
      description: "Check Out All The Users From Your Website",
      path: "/admin/users",
      imageUrl:
        "https://chisellabs.com/glossary/wp-content/uploads/2023/05/962b45f9-e2a6-4f59-8f0a-9e1e1a1d1f7f.png",
    },
    {
      heading: "Orders",
      description: "Review All Orders On This Platform",
      path: "/admin/orders",
      imageUrl:
        "https://www.mxdata.com/wp-content/uploads/2019/01/Retailers-Guide-to-a-Seamless-eCommerce-Order-Fulfillment-Process--1024x579.jpg",
    },
  ];
  const { user } = useSelector((state) => state.user);
  const nav = useNavigate();
  return (
    <div className="md:min-h-screen p-5">
      <div className="text-center space-y-1">
        <h3 className="text-2xl font-light">Welcome - Admin {user.name}</h3>
        <p className="text-md">Which Task Would You Like To Perform Today</p>
        <p className="text-primary text-sm cursor-pointer">Edit Account Settings</p>
      </div>
      <div className=" md:mt-5 flex flex-wrap md:flex-row flex-col justify-center items-center gap-3">
        {tasks.map((item, index) => (
          <div key={index}>
            <div className="card w-96 bg-blue-50 shadow-xl border-0  h-96">
              <figure>
                <img
                  src={item.imageUrl}
                  alt={item.heading}
                  className="h-52 object-cover" // Added alt attribute
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.heading}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => nav(item.path)} // Changed `item.path` to `{item.path}`
                    className="btn text-white bg-primary border-0"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
