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
import PUC from "../../Images/SL page under construction ICON.svg";
import FlipCard1 from "../../Components/CardComponent/FlipCard1";

const Training1 = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 814px)" });

  return (
    <div>
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainerT">
            <div
              onClick={() => {
                props.history.push("/FineArts");
              }}
            >
              <FlipCard1 FImg={FineArts}  flip={false} />
            </div>
            <div
              onClick={() => {
                props.history.push("/Workshop");
              }}
            >
              <FlipCard1 FImg={WorkShop}  flip={false} />
            </div>
            <div
              onClick={() => {
                props.history.push("/IT");
              }}
            >
              <FlipCard1 FImg={IT}  flip={false} />
            </div>
          </div>
          <div className="HomeContainerT">
            <FlipCard1 FImg={HomeTution} BImg={PUC} />
            <FlipCard1 FImg={OnlineClass} BImg={PUC} />
            <FlipCard1 FImg={Alumni} BImg={PUC} />
          </div>
        </>
      ) : (
        <>
          <div className="HomeContainerT">
            <div
              onClick={() => {
                props.history.push("/FineArts");
              }}
            >
              <FlipCard1 FImg={FineArts} BImg={PUC}  flip={false} />
            </div>
            <div
              onClick={() => {
                props.history.push("/Workshop");
              }}
            >
              <FlipCard1 FImg={WorkShop}  BImg={PUC} flip={false} />
            </div>
          </div>
          <div className="HomeContainerT">
            <div
              onClick={() => {
                props.history.push("/IT");
              }}
            >
              <FlipCard1 FImg={IT}   BImg={PUC}  flip={false} />
            </div>
            <FlipCard1 FImg={HomeTution} BImg={PUC} />
          </div>
          <div className="HomeContainerT">
            <FlipCard1 FImg={OnlineClass} BImg={PUC} />
            <FlipCard1 FImg={Alumni} BImg={PUC} />
          </div>
        </>
      )}
    </div>
  );
};

export default Training1;
