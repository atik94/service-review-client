import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={img} style={{ minWidth: "800px" }} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl font-bold text-orange-600">Price: $ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
