import React, { useState } from "react";
import { NewItem } from "../Apis/itemsApi";

function AddCategory() {
  const [formData, setFormData] = useState({
    categoryName: "",
    itemName: "",
    itemDescription: "",
    tags: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await NewItem(formData);
    if (response.success) {
      alert(response.message);
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="p-4 md:min-h-screen text-center">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      <div className="flex justify-center mt-6">
        <div className="card w-full max-w-md shadow-lg bg-white">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="categoryName" className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input
                type="text"
                id="categoryName"
                placeholder="Category Name"
                className="input input-bordered bg-transparent"
                value={formData.categoryName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="itemName" className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                type="text"
                id="itemName"
                placeholder="Item Name"
                className="input input-bordered bg-transparent"
                value={formData.itemName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="itemDescription" className="label">
                <span className="label-text">Item Description</span>
              </label>
              <input
                type="text"
                id="itemDescription"
                placeholder="Item Description"
                className="input input-bordered bg-transparent"
                value={formData.itemDescription}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="tags" className="label">
                <span className="label-text">Tags</span>
              </label>
              <input
                type="text"
                id="tags"
                placeholder="Tags"
                className="input input-bordered bg-transparent"
                value={formData.tags}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="imageUrl" className="label">
                <span className="label-text">Item Image Url</span>
              </label>
              <input
                type="url"
                id="imageUrl"
                placeholder="Image.jpg"
                className="input input-bordered bg-transparent"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-primary text-white border-0 w-full"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
