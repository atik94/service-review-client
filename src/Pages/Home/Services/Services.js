import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-2">
        <h2 className="text-5xl font-bold text-orange-600">Services</h2>
        <h2 className="text-3xl font-semibold ">Our service area</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
