import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

import MultimediaConsultant from "../../Images/SL 1 multimedia consultants.svg";
import BussineessAnalysts from "../../Images/SL 2 business analysts.svg";
import qaAndqc from "../../Images/SL 3 qa and qc.svg";
import webDevelopment from "../../Images/SL 4 web development.svg";
import AppDevelopment from "../../Images/SL 5 app development.svg";
import DigitalMarketing from "../../Images/SL 6 digital marketing.svg";
import SocialInfluencer from "../../Images/SL 7 social influencers.svg";
import SEO from "../../Images/SL 8 SEO.svg";
import Branding from "../../Images/SL 9 branding.svg";

const FirstSlide = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  
  return (
    <div className="container">
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card>
              <Card.Img src={MultimediaConsultant} />
            </Card>
            <Card>
              <Card.Img src={BussineessAnalysts} />
            </Card>
            <Card>
              <Card.Img src={qaAndqc} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={webDevelopment} />
            </Card>
            <Card>
              <Card.Img src={AppDevelopment} />
            </Card>
            <Card>
              <Card.Img src={DigitalMarketing} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={SocialInfluencer} />
            </Card>
            <Card>
              <Card.Img src={SEO} />
            </Card>
            <Card>
              <Card.Img src={Branding} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={MultimediaConsultant} />
              </Card>
              <Card>
                <Card.Img src={BussineessAnalysts} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={qaAndqc} />
              </Card>

              <Card>
                <Card.Img src={webDevelopment} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={AppDevelopment} />
              </Card>
              <Card>
                <Card.Img src={DigitalMarketing} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={SocialInfluencer} />
              </Card>
              <Card>
                <Card.Img src={SEO} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={Branding} />
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

export default FirstSlide;
