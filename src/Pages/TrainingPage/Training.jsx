import React from "react";
import { useMediaQuery } from "react-responsive";

import FineArts from "../../Images/SL finearts.svg";
import WorkShop from "../../Images/SL workshops.svg";
import IT from "../../Images/SL IT.svg";
import HomeTution from "../../Images/SL home tuition.svg";
import OnlineClass from "../../Images/SL online classes.svg";
import Alumni from "../../Images/SL alumni.svg";
import Card from "react-bootstrap/Card";
import FlipCard from "../../Components/CardComponent/FlipCard";
import CardF from "../../Components/CardComponent/CardF"
import PUC from "../../Images/SL page under construction ICON.svg"

import "./Training.css";
import CardS from "../../Components/CardComponent/CardS";

function Training(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 814px)" });

  return (
    <div className="t">
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainerT">
            <Card>
              <Card.Img
                src={FineArts}
                onClick={() => {
                  props.history.push("/FineArts");
                }}
              />
            </Card>
            <Card>
              <Card.Img
                src={WorkShop}
                onClick={() => {
                  props.history.push("/Workshop");
                }}
              />
            </Card>
            <Card>
              <Card.Img
                src={IT}
                onClick={() => {
                  props.history.push("/IT");
                }}
              />
            </Card>
          </div>
          <div className="HomeContainerT">
            {/* <Card>
              <Card.Img src={HomeTution} />
            </Card>
            <Card>
              <Card.Img src={OnlineClass} />
            </Card> */}
            {/* <Card>
              <Card.Img src={Alumni} />
            </Card> */}
            <FlipCard FImg={HomeTution} BImg={PUC}/>
            <FlipCard FImg={OnlineClass} BImg={PUC}/>

            <FlipCard FImg={Alumni} BImg={PUC}/>

          </div>
        </>
      ) : (
        <>
         <div className="HomeContainerT">
            <Card>
              <Card.Img
                src={FineArts}
                onClick={() => {
                  props.history.push("/FineArts");
                }}
              />
            </Card>
            <Card>
              <Card.Img
                src={WorkShop}
                onClick={() => {
                  props.history.push("/Workshop");
                }}
              />
            </Card>
          </div>
          <div className="HomeContainerT">

            <Card>
              <Card.Img
                src={IT}
                onClick={() => {
                  props.history.push("/IT");
                }}
              />
            </Card>

            {/* <Card>
              <Card.Img src={HomeTution} />
            </Card> */}
            <FlipCard FImg={HomeTution} BImg={PUC}/>

          </div>
          <div className="HomeContainerT">

            {/* <Card>
              <Card.Img src={OnlineClass} />
            </Card> */}
            {/* <Card>
              <Card.Img src={Alumni} />
            </Card> */}
            <FlipCard FImg={OnlineClass} BImg={PUC}/>

            <FlipCard FImg={Alumni} BImg={PUC}/>
            
      {/* <FlipCard FImg={Alumni} Bimg={PUC}  /> */}

          </div>
        </>
      )}
    </div>
  );
}

export default Training;
