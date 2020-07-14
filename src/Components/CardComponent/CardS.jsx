import React, { useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HomeComponent/Home.css";
import "react-toastify/dist/ReactToastify.min.css";
import { MdContentCopy } from "react-icons/md";
import { Tooltip } from "@material-ui/core";
import "./cardS.css";

const s = <div>sahith</div>;
const CardS = (
  { frontImg, paddingBottom, click, matter, display, icon, font },
  props
) => {
  return (
    <div
      onClick={(e) => {
        if (click == "false" || click != "true") {
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
          style={{
            color: "black",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <div style={{ fontSize: font, paddingBottom }}>
            {matter}
            {"   "}
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Tooltip title="Copy" arrow>
              <div>
                <Button
                  variant="dark"
                  onClick={() => {
                    console.log(navigator.clipboard);
                    navigator.clipboard.writeText(matter).then(
                      () => {
                        alert("Copied!");
                      },
                      (e) => console.log(e)
                    );
                  }}
                >
                  <MdContentCopy style={{ cursor: "pointer" }} />
                </Button>
              </div>
            </Tooltip>
            {icon}
          </div>
        </BackSide>
      </Flippy>
    </div>
  );
};

export default CardS;
