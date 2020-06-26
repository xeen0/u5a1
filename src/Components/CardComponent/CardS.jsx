import React, { useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HomeComponent/Home.css";
import "react-toastify/dist/ReactToastify.min.css";
import { MdContentCopy } from "react-icons/md";
import { MdWhatshot } from "react-icons/md";

import "./cardS.css";

const s = <div>sahith</div>;
const CardS = ({ frontImg, color, click, matter, display, icon, font}) => {
  return (
    <div
      onClick={(e) => {
        if (click != "true") {
          e.preventDefault();
          window.location.href = click;
        }
      }}
    >
      <Flippy
        flipOnClick={click == "true" ? true : false}
        flipDirection="horizontal"
        style={{ padding: "10px", opacity: display }}
      >
        <FrontSide style={{ padding: "0px" }}>
          <img src={frontImg} />
        </FrontSide>
        <BackSide
          className="back"
          style={{ color: color,fontSize:font ,textAlign: "center"}}
        >
          <div>
            {matter}
            {"   "}
            <MdContentCopy
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log(navigator.clipboard);
                navigator.clipboard.writeText(matter).then(
                  () => {
                    alert("Copied!");
                  },
                  (e) => console.log(e)
                );
              }}
            />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>{icon}</div>
        </BackSide>
      </Flippy>
    </div>
  );
};

export default CardS;
