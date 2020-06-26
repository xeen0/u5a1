import React from "react";

import "./Header.css";

// import U5A from "../../Images/u5a_logo.svg";
import U5A from "../../Images/Logo/u5a_logo.png";

import PictorialLogo from "../../Images/pictorial_logo.svg";
import { withRouter } from "react-router-dom";
const Header = (props) => {
  return (
    <div className="HeaderContainer">
      <img
        src={U5A}
        onClick={() => {
          props.history.push("/u5a1");
        }}
        className="HeaderImage"
      />
      <img
        src={PictorialLogo}
        onClick={() => {
          props.history.push("/u5a1");
        }}
        className="HeaderImage"
      />
    </div>
  );
};

export default withRouter(Header);
