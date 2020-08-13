import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";
import Modal from "react-bootstrap/Modal";
import Zoom from "react-img-zoom";

import PV from "../../Images/PopUps/Page2/SL 1 pre visualisation.svg";
import WT from "../../Images/PopUps/Page2/SL 2 walk through.svg";
import CP from "../../Images/PopUps/Page2/SL 3 creative presentation.svg";
import MC from "../../Images/PopUps/Page2/SL 4 music composition.svg";
import VE from "../../Images/PopUps/Page2/SL 5 video edit.svg";
import AE from "../../Images/PopUps/Page2/SL 6 audio edit.svg";
import Grps from "../../Images/PopUps/Page2/SL 7 graphics.svg";
import VFX from "../../Images/PopUps/Page2/SL 8 vfx.svg";
import SE from "../../Images/PopUps/Page2/SL 9 special effects.svg";

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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [modalShow, setModalShow] = React.useState(false);
  const [headTitle, setHeadTitle] = React.useState("");
  const [Img, setImg] = React.useState();
  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {headTitle}
          </Modal.Title>
        </Modal.Header>
        {/* <img style={{ width: "100%" }} src={Img} /> */}
        <Zoom img={Img} zoomScale={2} width={500} height={500} />
      </Modal>
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card
              onClick={async () => {
                await setHeadTitle("Pre Visualisation");
                await setImg(PV);
                await setModalShow(true);
              }}
            >
              <Card.Img src={preVisulization} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Walk Through");
                await setImg(WT);
                await setModalShow(true);
              }}
            >
              <Card.Img src={WalkThrough} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Creative Presentation");
                await setImg(CP);
                await setModalShow(true);
              }}
            >
              <Card.Img src={CreativePresentation} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card
              onClick={async () => {
                await setHeadTitle("Music Composition");
                await setImg(MC);
                await setModalShow(true);
              }}
            >
              <Card.Img src={MusicComposition} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Video Edit");
                await setImg(VE);
                await setModalShow(true);
              }}
            >
              <Card.Img src={VideoEdit} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Audio Edit");
                await setImg(AE);
                await setModalShow(true);
              }}
            >
              <Card.Img src={AudioEdit} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card
              onClick={async () => {
                await setHeadTitle("Graphics");
                await setImg(Grps);
                await setModalShow(true);
              }}
            >
              <Card.Img src={Graphics} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("VFX");
                await setImg(VFX);
                await setModalShow(true);
              }}
            >
              <Card.Img src={VisualEffects} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Special Effects");
                await setImg(SE);
                await setModalShow(true);
              }}
            >
              <Card.Img src={SpecialEffect} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Pre Visualisation");
                  await setImg(PV);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={preVisulization} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Walk Through");
                  await setImg(WT);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={WalkThrough} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Creative Presentation");
                  await setImg(CP);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={CreativePresentation} />
              </Card>

              <Card
                onClick={async () => {
                  await setHeadTitle("Music Composition");
                  await setImg(MC);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={MusicComposition} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Video edit");
                  await setImg(VE);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={VideoEdit} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Audio Edit");
                  await setImg(AE);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={AudioEdit} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Graphics");
                  await setImg(Grps);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={Graphics} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("VFX");
                  await setImg(VFX);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={VisualEffects} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Special Effects");
                  await setImg(SE);
                  await setModalShow(true);
                }}
              >
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
