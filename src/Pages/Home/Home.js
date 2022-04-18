import React from "react";
import HomeCarousel from "../Carousel/Carousel";
import MustRead from "../MustRead/MustRead";
import Pricing from "../Pricing/Pricing";

const Home = () => {
  return (
    <div className="overflow-hidden	">
      <HomeCarousel></HomeCarousel>
      <MustRead />
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
