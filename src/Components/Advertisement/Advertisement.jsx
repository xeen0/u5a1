import React, { Component } from "react";
import Slider from "react-slick";
import SL1 from "../../Images/Advertisement/Light/SL 1.svg";
import SL2 from "../../Images/Advertisement/Light/SL 2.svg";
import SL3 from "../../Images/Advertisement/Light/SL 3.svg";
import SL4 from "../../Images/Advertisement/Light/SL 4.svg";
import SL5 from "../../Images/Advertisement/Light/SL 5.svg";
import SL6 from "../../Images/Advertisement/Light/SL 6.svg";
import SL7 from "../../Images/Advertisement/Light/SL 7.svg";
import SL8 from "../../Images/Advertisement/Light/SL 8.svg";
import SL9 from "../../Images/Advertisement/Light/SL 9.svg";
import SL10 from "../../Images/Advertisement/Light/SL 10.svg";
import SL11 from "../../Images/Advertisement/Light/SL 11.svg";
import SL12 from "../../Images/Advertisement/Light/SL 12.svg";
import SL13 from "../../Images/Advertisement/Light/SL 13.svg";
import SL14 from "../../Images/Advertisement/Light/SL 14.svg";
import SL15 from "../../Images/Advertisement/Light/SL 15.svg";
import SL16 from "../../Images/Advertisement/Light/SL 16.svg";

import SD1 from "../../Images/Advertisement/Dark/SL 1.svg";
import SD2 from "../../Images/Advertisement/Dark/SL 2.svg";
import SD3 from "../../Images/Advertisement/Dark/SL 3.svg";
import SD4 from "../../Images/Advertisement/Dark/SL 4.svg";
import SD5 from "../../Images/Advertisement/Dark/SL 5.svg";
import SD6 from "../../Images/Advertisement/Dark/SL 6.svg";
import SD7 from "../../Images/Advertisement/Dark/SL 7.svg";
import SD8 from "../../Images/Advertisement/Dark/SL 8.svg";
import SD9 from "../../Images/Advertisement/Dark/SL 9.svg";
import SD10 from "../../Images/Advertisement/Dark/SL 10.svg";
import SD11 from "../../Images/Advertisement/Dark/SL 11.svg";
import SD12 from "../../Images/Advertisement/Dark/SL 12.svg";
import SD13 from "../../Images/Advertisement/Dark/SL 13.svg";
import SD14 from "../../Images/Advertisement/Dark/SL 14.svg";
import SD15 from "../../Images/Advertisement/Dark/SL 15.svg";
import SD16 from "../../Images/Advertisement/Dark/SL 16.svg";

import "./Advertisement.css";

export default class Advertisement extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // autoplaySpeed: 1000,
      
      pauseOnHover: true,
      fade: true,
      speed: 10,
      arrows: false,
    };
    var img = [
      SL1,
      SL2,
      SL3,
      SL4,
      SL5,
      SL6,
      SL7,
      SL8,
      SL9,
      SL10,
      SL11,
      SL12,
      SL13,
      SL14,
      SL15,
      SL16,
      SD1,
      SD2,
      SD3,
      SD4,
      SD5,
      SD6,
      SD7,
      SD8,
      SD9,
      SD10,
      SD11,
      SD12,
      SD13,
      SD14,
      SD15,
      SD16,
    ];
    return (
      <div className="AdvContainer">
        <Slider {...settings}>
          {img.map((val) => (
            <div className="AdvContent">
              <img className="ImgAdvContentV" src={val} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
