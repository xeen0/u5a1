import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import FirstSlide from "../../Components/WorkForce/FirstSlide";
import "./WorkForce.css";
const WorkForce = () => {
  return (
    // <FirstSlide/>
    <Carousel>
      <div>
        <FirstSlide />
        <br />
        <br />
        <br />
      </div>
      <div>
        <div>SecondSlide</div>
      </div>
      <div>
        <div>ThirdSlide</div>
      </div>
      <div>
        <div>FourthSlide</div>
      </div>
      <div>
        <div>FifthSlide</div>
      </div>
      <div>
        <div>SixthSlide</div>
      </div>

    </Carousel>
  );
};

export default WorkForce;
