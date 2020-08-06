import React from "react";
import { useMediaQuery } from "react-responsive";

import FineArts from "../../Images/SL finearts.svg";
import WorkShop from "../../Images/SL workshops.svg";
import IT from "../../Images/SL IT.svg";
import HomeTution from "../../Images/SL home tuition.svg";
import OnlineClass from "../../Images/SL online classes.svg";
import Alumni from "../../Images/SL alumni.svg";
import Card from "react-bootstrap/Card";

import "./Training.css";

function Training(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 814px)" });

  return (
    <>
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
            <Card>
              <Card.Img src={HomeTution} />
            </Card>
            <Card>
              <Card.Img src={OnlineClass} />
            </Card>
            <Card>
              <Card.Img src={Alumni} />
            </Card>
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
            <Card>
              <Card.Img src={HomeTution} />
            </Card>
          </div>
          <div className="HomeContainerT">

            <Card>
              <Card.Img src={OnlineClass} />
            </Card>
            <Card>
              <Card.Img src={Alumni} />
            </Card>
          </div>
        </>
      )}
    </>
  );
}

export default Training;
