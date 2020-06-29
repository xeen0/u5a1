import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

import ShortFlim from "../../Images/SL 1 shortfilm.svg";
import Interview from "../../Images/SL 2 interview.svg";
import Documentary from "../../Images/SL 3 documentary.svg";
import VideoAlbum from "../../Images/SL 4 video album.svg";
import FeatureFilm from "../../Images/SL 5 feature film.svg";
import PressMeet from "../../Images/SL 6 press meet.svg";
import InteriorDesigner from "../../Images/SL 7 interior design.svg";
import Setdesign from "../../Images/SL 8 set design.svg";
import FashionDesign from "../../Images/SL 9 fashion design.svg";

const FourthSlide = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 814px)" });
  // const isTabletOrMobile = true;
  return (
    <div className="container">
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card>
              <Card.Img src={ShortFlim} />
            </Card>
            <Card>
              <Card.Img src={Interview} />
            </Card>
            <Card>
              <Card.Img src={Documentary} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={VideoAlbum} />
            </Card>
            <Card>
              <Card.Img src={FeatureFilm} />
            </Card>
            <Card>
              <Card.Img src={PressMeet} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={InteriorDesigner} />
            </Card>
            <Card>
              <Card.Img src={Setdesign} />
            </Card>
            <Card>
              <Card.Img src={FashionDesign} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={ShortFlim} />
              </Card>
              <Card>
                <Card.Img src={Interview} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={Documentary} />
              </Card>

              <Card>
                <Card.Img src={VideoAlbum} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={FeatureFilm} />
              </Card>
              <Card>
                <Card.Img src={PressMeet} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={InteriorDesigner} />
              </Card>
              <Card>
                <Card.Img src={Setdesign} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={FashionDesign} />
              </Card>
              <Card>
                <Card.Img style={{ backgroundColor: "white" }} />
              </Card>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default FourthSlide;
