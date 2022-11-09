import React from "react";

const AllReview = ({ usrReview }) => {
  const { serviceName, customer, email, message, image } = usrReview;
  return (
    <tr>
      <th></th>
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
      <td>{email}</td>
      <td>{serviceName}</td>
      <td>{message}</td>
    </tr>
  );
};

export default AllReview;
