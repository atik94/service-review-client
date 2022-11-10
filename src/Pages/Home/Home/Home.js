import React from "react";
import LanundryNews from "../../LanudryNews/LanundryNews";
import ServiceGallery from "../../ServiceGallery/ServiceGallery";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <LanundryNews></LanundryNews>
      <ServiceGallery></ServiceGallery>
    </div>
  );
};

export default Home;
