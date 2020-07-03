import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

import ContentWriting from "../../Images/SL 1 content writing.svg";
import ScriptWriting from "../../Images/SL 2 script writing.svg";
import StoryWriting from "../../Images/SL 3 story boarding.svg";
import twD from "../../Images/SL 4 animation 2d.svg";
import thD from "../../Images/SL 5 animation 3d.svg";
import VirtualReality from "../../Images/SL 6 virtual reality.svg";
import MotionCapture from "../../Images/SL 7 motion capture.svg";
import Direction from "../../Images/SL 8 direction management.svg";
import Production from "../../Images/SL 9 production management.svg";

const ThirdSlide = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  // const isTabletOrMobile = true;
  return (
    // <div className="container">
    <>
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card>
              <Card.Img src={ContentWriting} />
            </Card>
            <Card>
              <Card.Img src={ScriptWriting} />
            </Card>
            <Card>
              <Card.Img src={StoryWriting} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={twD} />
            </Card>
            <Card>
              <Card.Img src={thD} />
            </Card>
            <Card>
              <Card.Img src={VirtualReality} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={MotionCapture} />
            </Card>
            <Card>
              <Card.Img src={Direction} />
            </Card>
            <Card>
              <Card.Img src={Production} />
            </Card>
            </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={ContentWriting} />
              </Card>
              <Card>
                <Card.Img src={ScriptWriting} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={StoryWriting} />
              </Card>

              <Card>
                <Card.Img src={twD} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={thD} />
              </Card>
              <Card>
                <Card.Img src={VirtualReality} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={MotionCapture} />
              </Card>
              <Card>
                <Card.Img src={Direction} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={Production} />
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

export default ThirdSlide;
