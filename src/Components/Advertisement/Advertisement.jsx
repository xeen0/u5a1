import React, { Component } from "react";
import Slider from "react-slick";
import SL1 from "../../Images/Advertisement/SL 1.svg"
import SL2 from "../../Images/Advertisement/SL 2.svg"
import SL3 from "../../Images/Advertisement/SL 3.svg"
import SL4 from "../../Images/Advertisement/SL 4.svg"
import SL5 from "../../Images/Advertisement/SL 5.svg"
import SL6 from "../../Images/Advertisement/SL 6.svg"
import SL7 from "../../Images/Advertisement/SL 7.svg"
import SL8 from "../../Images/Advertisement/SL 8.svg"
import SL9 from "../../Images/Advertisement/SL 9.svg"
import SL10 from "../../Images/Advertisement/SL 10.svg"
import SL11 from "../../Images/Advertisement/SL 11.svg"
import SL12 from "../../Images/Advertisement/SL 12.svg"
import SL13 from "../../Images/Advertisement/SL 13.svg"
import SL14 from "../../Images/Advertisement/SL 14.svg"
import SL15 from "../../Images/Advertisement/SL 15.svg"
import SL16 from "../../Images/Advertisement/SL 16.svg"

import './Advertisement.css'

export default class Advertisement extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows:false
      
    };
    var img = [SL1,SL2,SL3,SL4,SL5,SL6,SL7,SL8,SL9,SL10,SL11,SL12,SL13,SL14,SL15,SL16]
    return (
      <div className="AdvContainer">
        <Slider {...settings}>
          { 
            img.map(val =>(
              <div className="AdvContent">
                <img className="ImgAdvContent" src={val}/>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}