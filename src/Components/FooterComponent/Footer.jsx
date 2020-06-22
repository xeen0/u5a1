import React from "react";
import { AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <div
      style={{
        letterSpacing: "1.5px",
        fontOpticalSizing: "auto",
        fontSize: "14px",
        textAlign:"center",
        padding:"10px"
      }}
    >
      <p >
        <a href="#">
          <AiFillFacebook color="grey" size="20px" />
          {"   "}
        </a>
        © 2020 U5A. All Rights Reserved | Web Design @<a href="#">U5A Inc.</a> |
        Web Development @ <a href="#">CtrlN SS</a>
      </p>
    </div>
  );
};

export default Footer;
