import React from "react";

const ServiceGallery = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold text-center text-orange-700">My Laundry Gallery</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-1 mt-6">
        <div className="card ">
          <figure>
            <img
              className="w-screen"
              src="https://thumbs.dreamstime.com/b/clothes-laundry-basket-blue-indigo-purple-16818142.jpg"
              alt=""
            />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img
              className="w-screen"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD44dB-mirhuCHigvwGWGQS53I38HsE6QGwMM55Fg5xlTv5_nP4xjnpP0lb5gs9AQj2us&usqp=CAU"
              alt=""
            />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img
              className="w-screen"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwH0RWeuFHslEBNWy8Rj9fTB8s7qEY9qz8Zg&usqp=CAU"
              alt=""
            />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img
              className="w-screen"
              src="https://www.thespruce.com/thmb/HFiKyWIVFjBZlH7GR_spk9poJSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-dry-clean-at-home-5076182-05-ff2a563d14ef46a98bcfe92d0bf48ce6.jpg"
              alt=""
            />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img
              className="w-screen"
              src="https://www.tumbledry.in/wp-content/uploads/2020/07/Steam-Ironing.jpg"
              alt=""
            />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img
              className="w-screen"
              src="https://nigerianguide.com.ng/wp-content/uploads/2020/11/Laundry-And-Dry-Cleaning-Services-Price-List-In-Nigeria.jpeg"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
