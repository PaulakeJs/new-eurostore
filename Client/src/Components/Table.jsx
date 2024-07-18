import React from "react";

function Table({ data }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>CategoryName</th>
              <th>ItemName</th>
              <th>Item Description</th>
              <th>Tags</th>
              <th>Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{row.categoryName}</td>
                <td>{row.itemName}</td>
                <td>{row.itemDescription}</td>
                <td>{row.tags}</td>
                <td>{row._id}</td>
                <td>Action</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>CategoryName</th>
              <th>ItemName</th>
              <th>Item Description</th>
              <th>Tags</th>
              <th>Id</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Table;
