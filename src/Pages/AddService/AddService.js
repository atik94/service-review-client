import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  const [services, setService] = useState([]);
  useTitle("Add sevice");
  const handleAddUser = (event) => {
    event.preventDefault();

    const service_id = event.target.service_id.value;
    const title = event.target.title.value;
    const price = event.target.price.value;
    const rating = event.target.rating.value;
    const description = event.target.description.value;
    const img = event.target.img.value;
    const service = { service_id, title, description, rating, img, price };
    console.log(service);
    event.target.reset();
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Data added successfully");
        const newService = [...services, data];
        setService(newService);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service id</span>
          </label>
          <input
            type="text"
            name="service_id"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input
            type="text"
            name="rating"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            name="img"
            placeholder="img-url"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Add User" className="btn btn-info input-sm w-full max-w-xs" />
        </div>
      </form>
    </div>
  );
};

export default AddService;
