import React from "react";
import Card from "react-bootstrap/Card";
import art from "../../Images/SL 1 art.svg";
import guitar from "../../Images/SL 1 guitar.svg";
import drums from "../../Images/SL 1 jazz drums.svg";
import piano from "../../Images/SL 1 piano.svg";
import artf from "../../Images/SL 2 art.svg";
import guitarf from "../../Images/SL MOD 2 guitar.svg";
import drumsf from "../../Images/SL MOD 2 jazz drums.svg";
import pianof from "../../Images/SL MOD 2 piano.svg";
import finearts from "../../Images/SL 0.svg";
import timings from "../../Images/SL timings.svg";
import regclss from "../../Images/SL 7.svg";
import newjng from "../../Images/SL 10.svg";
import edp from "../../Images/SL 1 edp.svg";
import edpf from "../../Images/SL 2 edp.svg";
import congodrum from "../../Images/SL 1 congo drums.svg";
import congodrumf from "../../Images/SL 2 congo drums.svg";
import musInst from '../../Images/SL 8.svg';
import drwapnt from '../../Images/SL 9.svg';


import "./FineArts.css";
import { withRouter } from "react-router-dom";
import FlipCard from "../../Components/CardComponent/FlipCard";
import CardS from "../../Components/CardComponent/CardS";
import Flippy from "react-flippy/dist/Flippy";
import { FrontSide } from "react-flippy/dist/FlippyCard";
const Training = (props) => {
  return (
    <>
      <div className="HomeContainerT">
        <FlipCard FImg={guitar} BImg={guitarf} />
        <CardS frontImg={finearts} click="falsea" />
      </div>
      <div className="HomeContainerT">
        <FlipCard FImg={piano} BImg={pianof} />
        <CardS frontImg={regclss} click="falsea" />
      </div>

      <div className="HomeContainerT">
        <FlipCard FImg={drums} BImg={drumsf} />
        <Flippy flipOnClick={false} style={{ padding: "10px" }}>
          <FrontSide style={{ padding: "0px" }}>
            <img
              src={timings}
              onClick={() => {
                props.history.push("/Timing");
              }}
            />
          </FrontSide>
        </Flippy>
        
      </div>
      <div className="HomeContainerT">
        <FlipCard FImg={edp} BImg={edpf} />
        <CardS frontImg={musInst} click="falsea"/>
      </div>
      <div className="HomeContainerT">
        <FlipCard FImg={congodrum} BImg={congodrumf} />
        <CardS frontImg={newjng} click="falsea" />


      </div>
      <div className="HomeContainerT">
        <FlipCard FImg={art} BImg={artf} />
        <CardS frontImg={drwapnt} click="falsea"/>
       
      </div>
    </>
  );
};

export default withRouter(Training);
