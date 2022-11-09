import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price, description, rating } = service;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={img} style={{ minWidth: "800px" }} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <h3>{rating}</h3>
        <p className="text-2xl font-bold text-orange-600">Price: $ {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/viewDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
