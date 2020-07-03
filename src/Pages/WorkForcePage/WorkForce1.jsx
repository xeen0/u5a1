import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './WorkForce1.css';
import Slider from "react-slick";

import FirstSlide from "../../Components/WorkForce/FirstSlide";
import SecondSlide from "../../Components/WorkForce/SecondSlide";
import ThirdSlide from "../../Components/WorkForce/ThirdSlide";
import FourthSlide from "../../Components/WorkForce/FouthSlide";
import FifthSlide from "../../Components/WorkForce/FifthSlide"; 

function Gallery() {
  var settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    
  };

      return (
        <div className="container">
            <Slider {...settings}>
              <div>
                <FirstSlide/>
              </div>
              <div>
                <SecondSlide/>
              </div>
              <div>
                <ThirdSlide/>
              </div>
              <div>
                <FourthSlide/>
              </div>
              <div>
                <FifthSlide/>
              </div>
              <div>
                Sizth Slide
              </div>
            </Slider>
         </div>
    );
}
export default Gallery