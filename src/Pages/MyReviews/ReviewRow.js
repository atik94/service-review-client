import React from "react";

const ReviewRow = ({ review }) => {
  const { serviceName, customer, message, image } = review;
  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-info">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
      </td>
      <td>{serviceName}</td>
      <td>{message}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ReviewRow;
