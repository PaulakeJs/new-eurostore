import React, { useEffect, useState } from "react";
import { GetProduct, EditProducts } from "../Apis/adminApi";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    title: "",
    price: "",
    inStock: "",
    description: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await GetProduct(id);
        if (res.success) {
          setProduct(res.data);
          setFormData(res.data);
        } else {
          alert(res.message);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        alert("Error fetching product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await EditProducts(id, formData);
      if (response.success) {
        alert("Product updated successfully");
        window.location.href="/admin/products"
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:min-h-screen p-14">
      <div className="text-center mb-8">
        <p className="text-lg font-light">Edit Product</p>
      </div>
      <div className="border border-solid border-gray-300 p-10">
        <p className="text-md mb-6">Fill In All LowerCase Letters</p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
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
              className="input input-bordered w-full bg-gray-100 py-2 px-4 rounded"
              required
            />
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
              className="input input-bordered w-full bg-gray-100 py-2 px-4 rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
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

export default EditProduct;
