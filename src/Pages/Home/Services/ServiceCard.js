import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price, description, rating } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-screen" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.length > 100 ? <>{description.slice(0, 100) + "..."}</> : description}</p>
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
