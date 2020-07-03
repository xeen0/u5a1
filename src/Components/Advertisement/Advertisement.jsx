import React, { Component } from "react";
import Slider from "react-slick";
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
    return (
      <div className="AdvContainer">
        <Slider {...settings}>
          <div>
            <h3 style={{background:"red" ,height:"150px"}}>1 </h3>
          </div>
          <div>
            <h3 style={{background:"green" ,height:"150px"}}>2</h3>
          </div>
          <div>
            <h3 style={{background:"blue" ,height:"150px"}}>3</h3>
          </div>
          <div>
            <h3 style={{background:"grey" ,height:"150px"}}>4</h3>
          </div>
          <div>
            <h3 style={{background:"yellow" ,height:"150px"}}>5</h3>
          </div>
          <div>
            <h3 style={{background:"purple" ,height:"150px"}}>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}