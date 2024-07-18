import React from "react";
import { useNavigate } from "react-router-dom";
import { DeleteProduct } from "../Apis/adminApi";

function Table({ data, refreshData }) {
  const deleteProduct = async (id) => {
    const res = await DeleteProduct(id);
    alert(res.message);
    refreshData();
  };
  const nav = useNavigate();
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Subcategory</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">In Stock</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row._id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{row._id}</td>
              <td className="px-4 py-2">{row.title}</td>
              <td className="px-4 py-2">{row.category}</td>
              <td className="px-4 py-2">{row.subCategory}</td>
              <td className="px-4 py-2">${row.price}</td>
              <td className="px-4 py-2">{row.inStock}</td>
              <td className="px-4 py-2 tx">{row.description}</td>
              <td className="px-4 py-2 flex gap-3">
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => {
                    nav(`/admin/products/edit/${row._id}`);
                  }}
                >
                  Edit
                </span>
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => {
                    deleteProduct(row._id);
                  }}
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
