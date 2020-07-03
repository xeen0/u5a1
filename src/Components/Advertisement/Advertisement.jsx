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
            <h3 className ="AdvContent"style={{background:"red" }}>1 </h3>
          </div>
          <div>
            <h3 className ="AdvContent"style={{background:"green" }}>2</h3>
          </div>
          <div>
            <h3 className ="AdvContent"style={{background:"blue" }}>3</h3>
          </div>
          <div>
            <h3 className ="AdvContent"style={{background:"grey" }}>4</h3>
          </div>
          <div>
            <h3 className ="AdvContent"style={{background:"yellow" }}>5</h3>
          </div>
          <div>
            <h3 className ="AdvContent"style={{background:"purple" }}>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}