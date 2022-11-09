import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Reviews from "../../Reviews/Reviews";

const ViewDetails = () => {
  const { _id, title, img, price, description, rating } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "Unregistered";
    const image = form.image.value;
    const message = form.message.value;
    const review = {
      service: _id,
      serviceName: title,
      customer: name,
      email,
      message,
      image,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review submit successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <form onSubmit={handleReview}>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={img} style={{ minWidth: "800px" }} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{description}</p>
              <h3>Rating: {rating}</h3>
              <p className="text-2xl font-bold text-orange-600">Price: $ {price}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
            <input name="firstName" type="text" placeholder="First name" className="input input-bordered w-full" />
            <input name="lastName" type="text" placeholder="Last name" className="input input-bordered w-full" />
            <input name="image" type="text" placeholder="your img url" className="input input-bordered w-full" />
            {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
            <input
              name="email"
              type="text"
              placeholder="your email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Write your review here:"
          ></textarea>
          <input className="btn btn-info" type="submit" value="submit" />
        </form>
      </div>

      <div>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default ViewDetails;
