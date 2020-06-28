import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import FirstSlide from "../../Components/WorkForce/FirstSlide";
import "./WorkForce.css";
import SecondSlide from "../../Components/WorkForce/SecondSlide";
import { useMediaQuery } from "react-responsive";
import ThirdSlide from "../../Components/WorkForce/ThirdSlide";

const WorkForce = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 814px)" });

  return (
    <Carousel showArrows={!isTabletOrMobile} showStatus={false} showThumbs={false}   >
      <div>
        <FirstSlide />
        <br />
        <br />
        <br />
      </div>
      <div>
        <SecondSlide/>
        <br />
        <br />
        <br />
      </div>
      <div>
        <ThirdSlide/>
        <br />
        <br />
        <br />
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
