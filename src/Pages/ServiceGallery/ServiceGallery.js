import React from "react";

const ServiceGallery = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold text-center text-orange-700">My Laundry Gallery</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-1 mt-6">
        <div className="card ">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
