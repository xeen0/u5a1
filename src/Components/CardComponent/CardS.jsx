import React, { useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "../HomeComponent/Home.css"
import 'react-toastify/dist/ReactToastify.min.css';
import "./cardS.css";
const CardS = ({ frontImg, color,click }) => {

  return (
    <div onClick={(e) => {
        if(click!="true"){
        e.preventDefault();
        window.location.href =
          click;
      }}}>

    <Flippy
      flipOnClick={click=="true"?true:false} 
      flipDirection="horizontal"
      style={{ padding:"10px" }}
      
    >
      <FrontSide style={{ padding: "0px" }}>
        <img src={frontImg} />
      </FrontSide>
      <BackSide className="back" style={{color:color}} >
        {/* {phno } */}
        +91 92463 52385
        <br/>
        <br/>

        <Button
          variant="dark"
          onClick={() => {
            navigator.clipboard.writeText("9246352385").then(()=> {
              alert('Copied!')
            }, (e) => {
              console.log(e)
            });
           
          }}
          size='sm'
        >
          <div>Copy</div>
        </Button>
      </BackSide>
    </Flippy>
    </div>

  );
};

export default CardS;

