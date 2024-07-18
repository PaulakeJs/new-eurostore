import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetAllUsers } from "../Apis/adminApi";
import Table from "./Table";
import Loading from "./Loading";

function Users() {
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const response = await GetAllUsers();
      setData(response.data);
    };
    getData();
  }, []);
  const getData = async () => {
    setData(null);
    const response = await GetAllUsers();
    setData(response.data);
  };
  return (
    <div className="md:min-h-screen p-5">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-light">Welcome - Admin {user.name}</h3>
        <p className="text-md">Edit And View All Users</p>
        <p className="text-sm text-primary cursor-pointer" onClick={getData}>
          Reload Users
        </p>
      </div>
      <div className="mt-2 flex justify-center">
        {data ? <Table data={data} getData={getData} /> : <Loading />}
      </div>
    </div>
  );
}

export default Users;
