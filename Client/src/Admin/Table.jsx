import React, { useState } from "react";
import { UpdateUser } from "../Apis/adminApi";
import Loading from "./Loading";

function Table({ data, getData }) {
  const update = async (id, status) => {
    const response = await UpdateUser({ id, status });
    alert(response.message);
    getData();
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>{row.role}</td>
                <td>{row.status}</td>
                {row.status == "Active" ? (
                  <td
                    className="text-red-500 cursor-pointer"
                    onClick={() => update(row._id, "Blocked")}
                  >
                    Block
                  </td>
                ) : (
                  <td
                    className="text-red-500 cursor-pointer"
                    onClick={() => update(row._id, "Active")}
                  >
                    Unblock
                  </td>
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Id</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Table;
