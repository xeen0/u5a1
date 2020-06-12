import React from "react";

import './Header.css'

import U5A from "../../Images/u5a_logo.svg";
import PictorialLogo from "../../Images/pictorial_logo.svg";
import Email from '../../Images/email.svg'
const Header = () => {
  return (
    <div className="HeaderContainer">
          <img src={U5A} className="HeaderImage"/>
          <img src={PictorialLogo}  className="HeaderImage"/>
          <img src={Email} className="HeaderImage"/>
    </div>
  );
};

export default Header;
