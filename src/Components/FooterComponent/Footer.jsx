import React from "react";
import { AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <div
      style={{
        letterSpacing: "1px",
        fontOpticalSizing: "auto",
        fontSize: "15px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <p>
        <a href="#">
          <AiFillFacebook color="grey" />
          {"   "}
        </a>
        © 2020 U5A. All Rights Reserved | Web Design @<a href="#">U5A Inc.</a> |
        Web Development @ <a href="#">CtrlN SS</a>
      </p>
    </div>
  );
};

export default Footer;
