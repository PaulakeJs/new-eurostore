import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetProductList } from "../Apis/productApi";

function ShopList() {
  const { tag } = useParams();
  const [products, setProducts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await GetProductList(tag);
        setProducts(result.data);
      } catch (err) {
        alert(err.message);
      }
    };
    getData();
  }, [tag]);

  return (
    <div className="md:min-h-screen p-2 md:p-5">
      <div></div>
      <div className="flex md:flex-row justify-center p-3 md:p-10 gap-3 flex-wrap flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-md p-4 cursor-pointer"
              onClick={() => nav(`/product/${product._id}`)}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-64 object-cover mb-4 "
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2 truncate">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">
                  ${product.price}
                </span>
                {product.inStock < 1 ? (
                  <span className="text-red-600 font-semibold">
                    unavailable
                  </span>
                ) : (
                  <span className="text-green-600 font-semibold">
                    {product.inStock} in stock
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopList;
