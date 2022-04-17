import React from "react";
import HomeCarousel from "../Carousel/Carousel";
import Pricing from "../Pricing/Pricing";

const Home = () => {
  return (
    <div className="overflow-hidden	">
      <HomeCarousel></HomeCarousel>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
