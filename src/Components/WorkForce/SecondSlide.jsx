import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

import preVisulization from "../../Images/SL 1 pre visualisation.svg";
import WalkThrough from "../../Images/SL 2 walk through.svg";
import CreativePresentation from "../../Images/SL 3 presentation.svg";
import MusicComposition from "../../Images/SL 4 music composition.svg";
import VideoEdit from "../../Images/SL 6 video editing.svg";
import AudioEdit from "../../Images/SL 5 audio editing.svg";
import Graphics from "../../Images/SL 7 graphics.svg";
import VisualEffects from "../../Images/SL 8 visual effects.svg";
import SpecialEffect from "../../Images/SL 9 special effects.svg";

const SecondSlide = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 814px)" });
  // const isTabletOrMobile = true;
  return (
    // <div className="container">
    <>
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card>
              <Card.Img src={preVisulization} />
            </Card>
            <Card>
              <Card.Img src={WalkThrough} />
            </Card>
            <Card>
              <Card.Img src={CreativePresentation} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={MusicComposition} />
            </Card>
            <Card>
              <Card.Img src={VideoEdit} />
            </Card>
            <Card>
              <Card.Img src={AudioEdit} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={Graphics} />
            </Card>
            <Card>
              <Card.Img src={VisualEffects} />
            </Card>
            <Card>
              <Card.Img src={SpecialEffect} />
            </Card>
            </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={preVisulization} />
              </Card>
              <Card>
                <Card.Img src={WalkThrough} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={CreativePresentation} />
              </Card>

              <Card>
                <Card.Img src={MusicComposition} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={VideoEdit} />
              </Card>
              <Card>
                <Card.Img src={AudioEdit} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={Graphics} />
              </Card>
              <Card>
                <Card.Img src={VisualEffects} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={SpecialEffect} />
              </Card>
              <Card>
                <Card.Img style={{ backgroundColor: "white" }} />
              </Card>
            </div>
          </>
        </>
      )}
        </>

  );
};

export default SecondSlide;
