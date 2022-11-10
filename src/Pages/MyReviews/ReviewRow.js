import React from "react";

const ReviewRow = ({ review, handleDelete }) => {
  const { _id, serviceName, customer, message, image } = review;

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn bg-orange-600">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{customer}</td>
      <td>{serviceName}</td>
      <td>{message}</td>
    </tr>
  );
};

export default ReviewRow;
