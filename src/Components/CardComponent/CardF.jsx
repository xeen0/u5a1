import React from "react";
import "./cardS.css"
const CardF = ({Fimg, Bimg}) => {
  return (
  <>
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Fimg} alt="Avatar" />
    </div>
    <div class="flip-card-back">
    <img src={Bimg} alt="Avatar" />
    </div>
  </div>
</div>
  </>)
};

export default CardF;
