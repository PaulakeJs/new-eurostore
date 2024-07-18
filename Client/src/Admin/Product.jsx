import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllProducts } from "../Apis/adminApi";
import Loading from "./Loading";
import Table from "./ProductTable";

function Product() {
  const { user } = useSelector((state) => state.user);
  const nav = useNavigate();
  const [loading, setLoading] = useState(true); // Changed initial loading state to true
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllProducts();
        if (response.success) {
          setData(response.data);
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching data");
      } finally {
        setLoading(false); // Moved setLoading(false) to finally block
      }
    };
    fetchData();
  }, []);

  const refreshData = async () => {
    try {
      const response = await GetAllProducts();
      if (response.success) {
        setData(response.data);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data");
    } finally {
      setLoading(false); // Moved setLoading(false) to finally block
    }
  };

  return (
    <div className="md:min-h-screen p-5">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-light">Welcome - Admin {user.name}</h3>
        <p className="text-md">Edit And View All Products</p>
        <div className="space-x-2 mt-1">
          <span
            className="text-sm text-primary cursor-pointer"
            onClick={() => nav("/admin/products/add")}
          >
            Add New Product
          </span>
        </div>
      </div>
      <div className="flex justify-center p-3">
        {loading && <Loading />}{" "}
        {!loading && <Table data={data} refreshData={refreshData} />}{" "}
      </div>
    </div>
  );
}

export default Product;
