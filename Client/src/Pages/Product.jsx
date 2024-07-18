import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProduct } from "../Apis/productApi";
import { useSelector } from "react-redux";
import { AddToCart } from "../Apis/cartApi";

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetProduct(id);
        if (res.success) {
          setProduct(res.data);
          document.title = res.data.title; // Set document title here
        } else {
          setError(res.message);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData(); // Call fetchData when id changes
  }, [id]);
  const formData = {
    email: user?.email,
    id: product?._id,
    price: product?.price,
  };

  const addToCart = async () => {
    try {
      const res = await AddToCart(formData);
      if (res.success) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="md:min-h-screen p-4">
      {error && <p className="text-red-500">{error}</p>}
      {product && (
        <>
          <div className="flex flex-col md:flex-row gap-10 py-3 md:py-10 px-4">
            <div className="images flex flex-col-reverse md:flex-row gap-7 overflow-x-auto md:overflow-x-hidden">
              <div className="flex md:flex-col gap-2 md:gap-4">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={index}
                    className={
                      imageIndex === index
                        ? "w-16 h-16 md:w-24 md:h-24 object-cover cursor-pointer border rounded-md border-primary md:p-2"
                        : "w-16 h-16 md:w-24 md:h-24 object-cover cursor-pointer"
                    }
                    onClick={() => setImageIndex(index)}
                  />
                ))}
              </div>
              <div className="main-img">
                <img
                  src={product.images[imageIndex]}
                  alt=""
                  className="object-contain w-full md:w-[600px] md:max-h-[550px] md:rounded-md "
                />
              </div>
            </div>
            <div className="w-full md:w-[300px]">
              <div>
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-md text-gray-600 mb-4">
                  Price: ${product.price}
                </p>
                <p className="text-md text-gray-600 mb-4">
                  In Stock: {product.inStock}
                </p>
                {user ? (
                  <button
                    className="btn bg-primary text-white w-full border-0"
                    onClick={addToCart}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <div>You Must Be Logged In To Add To Cart</div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between p-4">
            <div className="w-full md:w-[60%]">
              <h3 className="font-bold mb-2">Product Description</h3>
              <p className="text-md text-gray-600">{product.description}</p>
            </div>
            <div className="w-full md:w-[35%] mt-4 md:mt-0">
              <h3 className="font-bold mb-2">Comments</h3>
              <p className="text-md text-gray-600">Add New Comments</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductInfo;
