import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";
import Modal from "react-bootstrap/Modal";
import Zoom from "react-img-zoom";

import { RiZoomInLine ,RiZoomOutLine } from "react-icons/ri";

import SB from "../../Images/PopUps/Page 4/SL 3 story boarding.png"
import tdA from "../../Images/PopUps/Page 4/SL 4 2d animation.svg"
import thdA from "../../Images/PopUps/Page 4/SL 5 3d animation.svg"
import VR from "../../Images/PopUps/Page 4/SL 6 virtual reality.svg"
import MC from "../../Images/PopUps/Page 4/SL 7 motion capture.svg"
import DM from "../../Images/PopUps/Page 4/SL 8 direction management.svg"
import PM from "../../Images/PopUps/Page 4/SL 9 production management.svg"



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
    const [modalShow, setModalShow] = React.useState(false);
  const [headTitle, setHeadTitle] = React.useState("");
  const [Img, setImg] = React.useState();
  const [allowZoom, setAllowZoom] = React.useState(false);
  React.useEffect(() => {
    const effect = () => {
      setAllowZoom(false);
    };
    effect();
  }, [modalShow]);

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div className="ModalH">
            <Modal.Title id="contained-modal-title-vcenter">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {headTitle}
            </Modal.Title>
            {!isTabletOrMobile?<div
              style={{ display: "flex", cursor: "pointer" }}
              onClick={() => {
                setAllowZoom(!allowZoom);
              }}
            >
              
              <div style={{ marginRight: "5px" }}>
                {
                  allowZoom?<RiZoomOutLine size="2em"/>:<RiZoomInLine size="2em"/>
                }
              </div>
            </div>:<></>}
          </div>
        </Modal.Header>
        {!allowZoom ? (
          <img style={{ width: "100%" }} src={Img} />
        ) : (
          <Zoom img={Img} zoomScale={2} width={498} height={550} />
        )}
      </Modal>
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card 
            
            >
              <Card.Img src={ContentWriting} />
            </Card>
            <Card>
              <Card.Img src={ScriptWriting} />
            </Card>
            <Card 
             onClick={async () => {
              await setHeadTitle("Story Boarding");
              await setImg(SB);
              await setModalShow(true);
            }} 
            >
              <Card.Img src={StoryWriting} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card
            onClick={async () => {
              await setHeadTitle("2D Animation");
              await setImg(tdA);
              await setModalShow(true);
            }} 
            >
              <Card.Img src={twD} />
            </Card>
            <Card
            onClick={async () => {
              await setHeadTitle("3D Animation");
              await setImg(thdA);
              await setModalShow(true);
            }}  
            >
              <Card.Img src={thD} />
            </Card>
            <Card
            onClick={async () => {
              await setHeadTitle("Virtual Reality");
              await setImg(VR);
              await setModalShow(true);
            }} 
            >
              <Card.Img src={VirtualReality} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card
              onClick={async () => {
                await setHeadTitle("Motion Capture");
                await setImg(MC);
                await setModalShow(true);
              }} 
            >
              <Card.Img src={MotionCapture} />
            </Card>
            <Card
            onClick={async () => {
              await setHeadTitle("Direction Management");
              await setImg(DM);
              await setModalShow(true);
            }}  
            >
              <Card.Img src={Direction} />
            </Card>
            <Card 
            onClick={async () => {
              await setHeadTitle("Production Management");
              await setImg(PM);
              await setModalShow(true);
            }} 
            >
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

              <Card
               onClick={async () => {
                await setHeadTitle("2D Animation");
                await setImg(tdA);
                await setModalShow(true);
              }}  
              >
                <Card.Img src={twD} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card
              onClick={async () => {
                await setHeadTitle("3D Animation");
                await setImg(thdA);
                await setModalShow(true);
              }}  
              
              >
                <Card.Img src={thD} />
              </Card>
              <Card 
              onClick={async () => {
                await setHeadTitle("Virtual Reality");
                await setImg(VR);
                await setModalShow(true);
              }}  
              >
                <Card.Img src={VirtualReality} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card 
              onClick={async () => {
                await setHeadTitle("Motion Capture");
                await setImg(MC);
                await setModalShow(true);
              }} 
              >
                <Card.Img src={MotionCapture} />
              </Card>
              <Card 
              onClick={async () => {
                await setHeadTitle("Direction Management");
                await setImg(DM);
                await setModalShow(true);
              }}  
              >
                <Card.Img src={Direction} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card 
              onClick={async () => {
                await setHeadTitle("Production Management");
                await setImg(PM);
                await setModalShow(true);
              }} 
              >
                <Card.Img src={Production} />
              </Card>
              <Card
               onClick={async () => {
                await setHeadTitle("Story Boarding");
                await setImg(SB);
                await setModalShow(true);
              }}  
              >
                <Card.Img style={{ opacity:0}} />
              </Card>
            </div>
          </>
        </>
      )}
        </>

  );
};

export default ThirdSlide;
