import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../Components/Table";
import Loading from "./Loading";
import { GetCategoryItems } from "../Apis/adminApi";
import { useNavigate } from "react-router-dom";

function CategoaryItem() {
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await GetCategoryItems("electronics");
      setData(res.data);
    };
    getData();
  }, []);

  const getInfo = async (category) => {
    setData(null);
    const res = await GetCategoryItems(category);
    setData(res.data);
  };
  const nav = useNavigate();
  return (
    <div className="md: min-h-screen p-5">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-light">Welcome - Admin {user.name}</h3>
        <p className="text-md">
          Select From The List Which Category You Want To Edit
        </p>
        <p
          className="text-sm text-primary cursor-pointer"
          onClick={() => nav("/admin/add-category")}
        >
          Add New Category Item
        </p>
      </div>
      <div className="space-y-4 p-10">
        <div
          className="collapse collapse-arrow bg-white border"
          onClick={() => getInfo("electronics")}
        >
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Electronics And Computers
          </div>
          <div className="collapse-content border-t">
            {data ? <Table data={data} /> : <Loading />}
          </div>
        </div>
        <div
          className="collapse collapse-arrow bg-white border "
          onClick={() => getInfo("fashion")}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Fashion</div>
          <div className="collapse-content border-t">
            {data ? <Table data={data} /> : <Loading />}
          </div>
        </div>

        <div
          className="collapse collapse-arrow bg-white border"
          onClick={() => getInfo("home")}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Home Appliances
          </div>
          <div className="collapse-content border-t">
            {data ? <Table data={data} /> : <Loading />}
          </div>
        </div>
        <div
          className="collapse collapse-arrow bg-white border"
          onClick={() => getInfo("food")}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Food</div>
          <div className="collapse-content border-t">
            {data ? <Table data={data} /> : <Loading />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoaryItem;
