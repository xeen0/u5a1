import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

import EventManagement from "../../Images/SL 1 event management.svg";
import HostingOrAnchoring from "../../Images/SL 2 hosting or anchoring.svg";
import Choreography from "../../Images/SL 3 choreography.svg";
import LEDProjectionScreen from "../../Images/SL 4 LED projection screens.svg";
import SigingOrOrchestra from "../../Images/SL 5 singing or orchestra.svg";
import DJSoundSystem from "../../Images/SL 6 dj sound system.svg";
import Lightning from "../../Images/SL 7 lighting systems.svg";
import Makeup from "../../Images/SL 8 makeup.svg";
import LiveStream from "../../Images/SL 9 LIVE stream.svg";

const FifthSlide = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  // const isTabletOrMobile = true;
  return (
    <div className="container">
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card>
              <Card.Img src={EventManagement} />
            </Card>
            <Card>
              <Card.Img src={HostingOrAnchoring} />
            </Card>
            <Card>
              <Card.Img src={Choreography} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={LEDProjectionScreen} />
            </Card>
            <Card>
              <Card.Img src={SigingOrOrchestra} />
            </Card>
            <Card>
              <Card.Img src={DJSoundSystem} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={Lightning} />
            </Card>
            <Card>
              <Card.Img src={Makeup} />
            </Card>
            <Card>
              <Card.Img src={LiveStream} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={EventManagement} />
              </Card>
              <Card>
                <Card.Img src={HostingOrAnchoring} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={Choreography} />
              </Card>

              <Card>
                <Card.Img src={LEDProjectionScreen} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={SigingOrOrchestra} />
              </Card>
              <Card>
                <Card.Img src={DJSoundSystem} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={Lightning} />
              </Card>
              <Card>
                <Card.Img src={Makeup} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={LiveStream} />
              </Card>
              <Card>
                <Card.Img style={{ opacity:0 }} />
              </Card>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default FifthSlide;
