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
import FlipCard1 from "../../Components/CardComponent/FlipCard1";
function GalleryPage(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 605px)" });

  return (
    <div >
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainerT">
            <div
              onClick={() => {
                props.history.push("/Photos");
              }}
            >
              <FlipCard1 FImg={Images}  flip={false} />
            </div>
            <div
              onClick={() => {
                props.history.push("/Video");
              }}
            >
              <FlipCard1 FImg={videos}  flip={false} />
            </div>
           
              <FlipCard1 FImg={Achivements} BImg={PUC}  flip={true} />
          </div>
          <div className="HomeContainerT">
            <div 
             onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.youtube.com/channel/UCHqtgHSqcSw9YP-ACr_Glwg",
                "_blank"
              );
             }}
            >
            <FlipCard1 FImg={Infotainment} flip={false} />
            </div>
            <FlipCard1 FImg={Greeting} BImg={PUC} flip={true} />

            <FlipCard1 FImg={Infographic} BImg={PUC}  flip={true}  />
          </div>
        </>
      ) : (
        <>
          <div className="HomeContainerT">
            <div
              onClick={() => {
                props.history.push("/Photos");
              }}
            >
              <FlipCard1 FImg={Images}  flip={false} />
            </div>
            <div
              onClick={() => {
                props.history.push("/Video");
              }}
            >
              <FlipCard1 FImg={videos}  flip={false} />
            </div>
            </div>
          <div className="HomeContainerT">
           
              <FlipCard1 FImg={Achivements} BImg={PUC}  flip={true} />
            <div 
             onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.youtube.com/channel/UCHqtgHSqcSw9YP-ACr_Glwg",
                "_blank"
              );
             }}
            >
            <FlipCard1 FImg={Infotainment} flip={false} />
            </div>
          </div>
          <div className="HomeContainerT">

            <FlipCard1 FImg={Greeting} BImg={PUC} flip={true} />

            <FlipCard1 FImg={Infographic} BImg={PUC}  flip={true}  />
          </div>
        </>
      )}
    </div>
  );
}

export default GalleryPage;
