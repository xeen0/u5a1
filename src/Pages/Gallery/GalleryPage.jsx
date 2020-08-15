import React from "react";

import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

import videos from "../../Images/SL 2 videos.svg";
import Images from "../../Images/SL 1 images.svg";
import Infotainment from "../../Images/SL infotainment.svg";
import Infotainment1 from "../../Images/infotainment1.svg";


import Greeting from "../../Images/SL 4 greetings.svg";
import Infographic from "../../Images/SL 5 infographics.svg";
import Achivements from "../../Images/SL 5 achievements.svg";
import FlipCard from "../../Components/CardComponent/FlipCard";
import PUC from "../../Images/SL page under construction ICON.svg";
import "./Gallery.css"
function GalleryPage(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 605px)" });

  return (
    <div className="G">
      <div className="HomeContainer">
        <Card
          onClick={() => {
            props.history.push("/Photos");
          }}
        >
          <Card.Img src={Images} />
        </Card>
        <Card
          onClick={() => {
            props.history.push("/Video");
          }}
        >
          <Card.Img src={videos} />
        </Card>

        <FlipCard FImg={Achivements} BImg={PUC} />

        {isTabletOrMobile ? (
          <div className="infotainment">

          <Card
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.youtube.com/channel/UCHqtgHSqcSw9YP-ACr_Glwg",
                "_blank"
              );
            }}
          >
            <Card.Img src={Infotainment} />
          </Card>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="HomeContainer">
        {!isTabletOrMobile ? (
          <div className="infotainment">
          <Card 
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.youtube.com/channel/UCHqtgHSqcSw9YP-ACr_Glwg",
                "_blank"
              );
            }}
          >
            <Card.Img src={Infotainment} />
          </Card>
          </div>
        ) : (
          <></>
        )}
       
        <FlipCard FImg={Greeting} BImg={PUC} />
        <FlipCard FImg={Infographic} BImg={PUC} />
      </div>
    </div>
  );
}

export default GalleryPage;
