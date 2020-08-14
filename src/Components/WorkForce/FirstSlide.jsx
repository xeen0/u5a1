import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useMediaQuery } from "react-responsive";
import Modal from "react-bootstrap/Modal";
import Zoom from "react-img-zoom";

import { RiZoomInLine ,RiZoomOutLine } from "react-icons/ri";
import "./modal.css";
// import gdp from "../../Images/PopUps/SL graphic design.svg";
import GD from "../../Images/PopUps/Page1/SL graphic design.svg";
import PG from "../../Images/PopUps/Page1/SL photography.svg";
import CV from "../../Images/PopUps/Page1/SL 1 creative visualisation.svg";
import VM from "../../Images/PopUps/Page1/SL 2 visual merchandise.svg";
import WD from "../../Images/PopUps/Page1/SL 4 web design.svg";
import AD from "../../Images/PopUps/Page1/SL 5 app design.svg";
import ads from "../../Images/PopUps/Page1/SL 6 ads.svg";
import VG from "../../Images/PopUps/Page1/SL 8 videography.svg";
import PF from "../../Images/PopUps/Page1/SL 9 portfolio.svg";
import MO from "../../Images/PopUps/Page1/SL 10 makeover.svg";

import CreativeVisulization from "../../Images/SL 1 creative visualisation.svg";
import VisualMerchandise from "../../Images/SL 2 visual merchandise.svg";
import GraphicDesign from "../../Images/SL 3 graphic design.svg";
import AppDesign from "../../Images/SL app design.svg";
import webDesign from "../../Images/SL 4 web design.svg";
import Advertisement from "../../Images/SL 5 advertisements.svg";
import Photoshop from "../../Images/SL 6 photoshoot.svg";
import videoShot from "../../Images/SL 7 videoshoot.svg";
import Portfolio from "../../Images/SL 8 portfolio.svg";
import Makeovers from "../../Images/SL 9 makeover.svg";

const FirstSlide = (props) => {
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
    <div className="container">
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
            { !isTabletOrMobile?<div
              style={{ display: "flex", cursor: "pointer" }}
              onClick={() => {
                setAllowZoom(!allowZoom);
              }}
            >
              
              <div style={{ marginRight: "5px" }}>
                {
                  allowZoom?<RiZoomOutLine size="1.8em"/>:<RiZoomInLine size="1.8em"/>
                }
              </div>
            </div>:<></>}
          </div>
        </Modal.Header>
        {!allowZoom ? (
          <img style={{width:"auto"}} src={Img} />
        ) : (
          <Zoom img={Img} zoomScale={2} width={498} height={550} />
        )}
      </Modal>

      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card
              onClick={async () => {
                await setHeadTitle("Creative Visualisation");
                await setImg(CV);
                await setModalShow(true);
              }}
            >
              <Card.Img src={CreativeVisulization} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Visual Merchandise");
                await setImg(VM);
                await setModalShow(true);
              }}
            >
              <Card.Img src={VisualMerchandise} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Graphic Design");
                await setImg(GD);
                await setModalShow(true);
              }}
            >
              <Card.Img src={GraphicDesign} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card
              onClick={async () => {
                await setHeadTitle("Web Design");
                await setImg(WD);
                await setModalShow(true);
              }}
            >
              <Card.Img src={webDesign} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("App Design");
                await setImg(AD);
                await setModalShow(true);
              }}
            >
              <Card.Img src={AppDesign} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Advertisements");
                await setImg(ads);
                await setModalShow(true);
              }}
            >
              <Card.Img src={Advertisement} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card
              onClick={async () => {
                await setHeadTitle("Photography");
                await setImg(PG);
                await setModalShow(true);
              }}
            >
              <Card.Img src={Photoshop} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Videography");
                await setImg(VG);
                await setModalShow(true);
              }}
            >
              <Card.Img src={videoShot} />
            </Card>
            <Card
              onClick={async () => {
                await setHeadTitle("Portfolio");
                await setImg(PF);
                await setModalShow(true);
              }}
            >
              <Card.Img src={Portfolio} />
            </Card>
          </div>
          <div className="HomeContainer">
            <Card
              onClick={async () => {
                await setHeadTitle("Makeovers");
                await setImg(MO);
                await setModalShow(true);
              }}
            >
              <Card.Img src={Makeovers} />
            </Card>
            <Card>
              <Card.Img src={videoShot} style={{ opacity: 0 }} />
            </Card>
            <Card>
              <Card.Img src={videoShot} style={{ opacity: 0 }} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Creative Visulization");
                  await setImg(CV);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={CreativeVisulization} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Visual Merchandise");
                  await setImg(VM);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={VisualMerchandise} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Graphic Design");
                  await setImg(GD);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={GraphicDesign} />
              </Card>

              <Card
                onClick={async () => {
                  await setHeadTitle("Web Design");
                  await setImg(WD);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={webDesign} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("App Design");
                  await setImg(AD);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={AppDesign} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Advertisements");
                  await setImg(ads);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={Advertisement} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Photography");
                  await setImg(PG);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={Photoshop} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Videography");
                  await setImg(VG);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={videoShot} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Portfolio");
                  await setImg(PF);
                  await setModalShow(true);
                }}
              >
                <Card.Img src={Portfolio} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Makeovers");
                  await setImg(MO);
                  await setModalShow(true);
                }}
              >
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
