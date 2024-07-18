import React, { useState } from "react";
import { AddProducts } from "../Apis/adminApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const nav = useNavigate()
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    title: "",
    price: "",
    inStock: "",
    description: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await AddProducts(formData);
    if (response.success) {
      alert(response.message);
      nav("/admin/products")
    } else {
      alert(response.message);
    }
  };

  const preset_key = "numbers";
  const cloudName = "dhvss7qmu";

  const handleFile = (e) => {
    const file = e.target.files[0];
    const imgFormData = new FormData();
    imgFormData.append("file", file);
    imgFormData.append("upload_preset", preset_key);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        imgFormData
      )
      .then((res) => {
        setFormData({
          ...formData,
          images: [...formData.images, res.data.secure_url],
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="md:min-h-screen p-14">
      <div className="text-center mb-8">
        <p className="text-lg font-light">
          Fill Out The Form To Add A New Product
        </p>
      </div>
      <div className="border border-solid border-gray-300 p-10">
        <p className="text-md mb-6">Fill In All LowerCase Letters</p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="file"
            className="file-input file-input-bordered w-full bg-gray-100 py-2 px-4 rounded"
            onChange={handleFile}
          />
          <div className="flex flex-row gap-3">
            {formData.images.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                {item && (
                  <img src={item} alt="" className="w-32 h-32 object-cover" />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Electronics"
                className="input input-bordered w-full bg-gray-100 py-2 px-4 rounded"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Category (Category Item)</span>
              </label>
              <input
                type="text"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleInputChange}
                placeholder="games"
                className="input input-bordered w-full bg-gray-100 py-2 px-4 rounded"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="PlayStation 3"
              className="input input-bordered w-full bg-gray-100 py-2 px-4 rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="$799"
              className="input input-bordered w-full bg-gray-100 py-2 px-4 rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">In Stock</span>
            </label>
            <input
              type="number"
              name="inStock"
              value={formData.inStock}
              onChange={handleInputChange}
              placeholder="100"
              className="input input-bordered w-full bg-gray-100 py-2 px-4 rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="A Lovely Console"
              className="input input-bordered w-full bg-gray-100 py-2 px-4 rounded"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
