import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetItem } from "../Apis/itemsApi";

function Shop() {
  const { category } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await GetItem(category);
      if (res.success) {
        setData(res.data);
      } else {
        alert(res.message);
      }
    };
    getData();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="md:min-h-screen p-4">
      <h3 className="text-lg font-semibold">Category/{category}</h3>
      <p className="text-md">Get The Best {category} For All Your Needs</p>
      <div className="mt-4 p-8 md:p-5 flex flex-col md:flex-row gap-3 justify-center items-center">
        {data ? (
          data.map((item) => (
            <div
              key={item._id}
              className="card w-full md:w-96 h-96 bg-base-100 shadow-xl cursor-pointer"
              onClick={() => navigate(`/shop/list/${item.tags}`)}
            >
              <figure>
                <img src={item.imageUrl} alt={item.itemName} />
              </figure>
              <div className="card-body bg-white">
                <h2 className="card-title">
                  {item.itemName}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.itemDescription}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{item.categoryName}</div>
                  <div className="badge badge-outline">{item.tags}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}

export default Shop;
