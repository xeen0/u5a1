import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";
import Modal from "react-bootstrap/Modal";
import ReactImageZoom from 'react-image-zoom';

import MC from "../../Images/PopUps/Page 3/SL 1 multimedia consultants.svg";
import BA from "../../Images/PopUps/Page 3/SL 2 business analysts.svg";
import QA from "../../Images/PopUps/Page 3/SL 3 qa and qc.svg";
import WD from "../../Images/PopUps/Page 3/SL 4 web development.svg";
import AD from "../../Images/PopUps/Page 3/SL 5 app development.svg";
import DM from "../../Images/PopUps/Page 3/SL 6 digital marketing.svg";
import IM from "../../Images/PopUps/Page 3/SL 7 influencer marketing.svg";
import seo from "../../Images/PopUps/Page 3/SL 8 search engine optimisation.svg";
import BD from "../../Images/PopUps/Page 3/SL 9 branding.svg";

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
  const [modalShow, setModalShow] = React.useState(false);
  const [headTitle, setHeadTitle] = React.useState("");
  const [headSize, setHeadSize] = React.useState(".8rem");
  const [Img, setImg] = React.useState();
  const properties ={ };
  
  return (
    <>
      <div className="container">
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton  >
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ fontSize: headSize }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {headTitle}
            </Modal.Title>
          </Modal.Header>
          {/* <img style={{ width: "100%" }} src={Img} /> */}
          <ReactImageZoom {...properties}/>
        </Modal>
        {!isTabletOrMobile ? (
          <>
            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Multimedia Consultants");
                  await setImg(MC);
                  await setHeadSize("1.4rem");
                  await setModalShow(true);
                }}
              >
                <Card.Img src={MultimediaConsultant} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Business Analysts");
                  await setImg(BA);
                  await setHeadSize("1.4rem");
                  await setModalShow(true);
                }}
              >
                <Card.Img src={BussineessAnalysts} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Quality Assurance  and Quality Control");
                  await setImg(QA);
                  await setHeadSize("1.4rem");
                  await setModalShow(true);
                }}
              >
                <Card.Img src={qaAndqc} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Web Development");
                  await setImg(WD);
                  await setHeadSize("1.4rem");
                  await setModalShow(true);
                }}
              >
                <Card.Img src={webDevelopment} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("App Development");
                  await setImg(AD);
                  await setHeadSize("1.4rem");
                  await setModalShow(true);
                }}
              >
                <Card.Img src={AppDevelopment} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Digital Marketing");
                  await setImg(DM);
                  await setHeadSize("1.4rem");
                  await setModalShow(true);
                }}
              >
                <Card.Img src={DigitalMarketing} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card
                onClick={async () => {
                  await setHeadTitle("Social Influencers");
                  await setImg(IM);
                  await setHeadSize("1.4rem");
                  await setModalShow(true);
                }}
              >
                <Card.Img src={SocialInfluencer} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Search Engine Optimization");
                  await setImg(seo);
                  await setHeadSize("1.4rem");
                  await setModalShow(true);
                }}
              >
                <Card.Img src={SEO} />
              </Card>
              <Card
                onClick={async () => {
                  await setHeadTitle("Branding");
                  await setImg(BD);
                  await setHeadSize("1.4rem");
                  await setModalShow(true);
                }}
              >
                <Card.Img src={Branding} />
              </Card>
            </div>
          </>
        ) : (
          <>
            <>
              <div className="HomeContainer">
                <Card
                  onClick={async () => {
                    await setHeadTitle("Multimedia Consultants");
                    await setImg(MC);
                    await setHeadSize("1.4rem");
                    await setModalShow(true);
                  }}
                >
                  <Card.Img src={MultimediaConsultant} />
                </Card>
                <Card
                  onClick={async () => {
                    await setHeadTitle("Business Analysts");
                    await setHeadSize("1.4rem");
                    await setImg(BA);
                    await setModalShow(true);
                  }}
                >
                  <Card.Img src={BussineessAnalysts} />
                </Card>
              </div>
              <div className="HomeContainer">
                <Card
                  onClick={async () => {
                    await setHeadTitle("Quality Assurance and Quality Control");
                    await setHeadSize(".9rem");
                    await setImg(QA);
                    await setModalShow(true);
                  }}
                >
                  <Card.Img src={qaAndqc} />
                </Card>

                <Card
                  onClick={async () => {
                    await setHeadTitle("Web Development");
                    await setHeadSize("1.4rem");
                    await setImg(WD);
                    await setModalShow(true);
                  }}
                >
                  <Card.Img src={webDevelopment} />
                </Card>
              </div>

              <div className="HomeContainer">
                <Card
                  onClick={async () => {
                    await setHeadTitle("App Development");
                    await setHeadSize("1.4rem");
                    await setImg(AD);
                    await setModalShow(true);
                  }}
                >
                  <Card.Img src={AppDevelopment} />
                </Card>
                <Card
                  onClick={async () => {
                    await setHeadTitle("Digital Marketing");
                    await setHeadSize("1.4rem");
                    await setImg(DM);
                    await setModalShow(true);
                  }}
                >
                  <Card.Img src={DigitalMarketing} />
                </Card>
              </div>

              <div className="HomeContainer">
                <Card
                  onClick={async () => {
                    await setHeadTitle("Social Influencers");
                    await setHeadSize("1.4rem");
                    await setImg(IM);
                    await setModalShow(true);
                  }}
                >
                  <Card.Img src={SocialInfluencer} />
                </Card>
                <Card
                  onClick={async () => {
                    await setHeadTitle("Search Engine Optimization");
                    await setHeadSize("1.4rem");
                    await setImg(seo);
                    await setModalShow(true);
                  }}
                >
                  <Card.Img src={SEO} />
                </Card>
              </div>
              <div className="HomeContainer">
                <Card
                  onClick={async () => {
                    await setHeadTitle("Branding");
                    await setHeadSize("1.4rem");
                    await setImg(BD);
                    await setModalShow(true);
                  }}
                >
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
    </>
  );
};

export default FirstSlide;
