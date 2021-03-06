import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class HomeCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div className="block h-3/4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/484/206/non_2x/school-physics-education-classroom-cartoon-poster-vector.jpg"
              alt=""
            />
            <h4 className="legend">Learn Physics With Fun</h4>
          </div>
          <div className="block w-full h-2/4">
            <img
              src="https://previews.123rf.com/images/bluebee3/bluebee32006/bluebee3200600003/150481908-cartoon-proton-electron-and-neutron-vector-illustration.jpg"
              alt=""
            />
            <h4 className="legend">Play With Physics</h4>
          </div>
          <div>
            <img
              src="https://st2.depositphotos.com/1007168/6108/v/950/depositphotos_61080413-stock-illustration-funny-professor-with-pointer.jpg"
              alt=""
            />
            <h4 className="legend">Don't be afraid of physics</h4>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;
