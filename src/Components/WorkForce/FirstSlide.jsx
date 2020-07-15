import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

import CreativeVisulization from "../../Images/SL 1 creative visualisation.svg";
import VisualMerchandise from "../../Images/SL 2 visual merchandise.svg";
import GraphicDesign from "../../Images/SL 3 graphic design.svg";
import AppDesign from "../../Images/SL app design.svg"
import webDesign from "../../Images/SL 4 web design.svg";
import Advertisement from "../../Images/SL 5 advertisements.svg";
import Photoshop from "../../Images/SL 6 photoshoot.svg";
import videoShot from "../../Images/SL 7 videoshoot.svg";
import Portfolio from "../../Images/SL 8 portfolio.svg";
import Makeovers from "../../Images/SL 9 makeover.svg";

const FirstSlide = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="container">
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card>
              <Card.Img src={CreativeVisulization} />
            </Card>
            <Card>
              <Card.Img src={VisualMerchandise} />
            </Card>
            <Card>
              <Card.Img src={GraphicDesign} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={webDesign} />
            </Card>
            <Card>
              <Card.Img src={AppDesign} />
            </Card>
            <Card>
              <Card.Img src={Advertisement} />
            </Card>
            
          </div>

          <div className="HomeContainer">
          <Card>
              <Card.Img src={Photoshop} />
            </Card>
            <Card>
              <Card.Img src={videoShot} />
            </Card>
            <Card>
              <Card.Img src={Portfolio} />
            </Card>
            
          </div>
          <div className="HomeContainer">
           
            <Card>
              <Card.Img src={Makeovers} />
            </Card>
            <Card>
              <Card.Img src={videoShot} style={{opacity:0}} />
            </Card>
            <Card>
            <Card.Img src={videoShot} style={{opacity:0}} />

            </Card>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={CreativeVisulization} />
              </Card>
              <Card>
                <Card.Img src={VisualMerchandise} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={GraphicDesign} />
              </Card>

              <Card>
                <Card.Img src={webDesign} />
              </Card>
            </div>

            <div className="HomeContainer">
            <Card>
                <Card.Img src={AppDesign} />
              </Card>
              <Card>
                <Card.Img src={Advertisement} />
              </Card>
              
            </div>

            <div className="HomeContainer">
            <Card>
                <Card.Img src={Photoshop} />
              </Card>
              <Card>
                <Card.Img src={videoShot} />
              </Card>
              
            </div>
            <div className="HomeContainer">
            <Card>
                <Card.Img src={Portfolio} />
              </Card>
              <Card>
                <Card.Img src={Makeovers} />
              </Card>
              
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default FirstSlide;
