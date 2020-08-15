import React, { Fragment } from "react";
import CardS from "../../Components/CardComponent/CardS";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

import CM from "../../Images/SL CLIENTS.svg";
import "./About.css";

import Registered from "../../Images/SL 1.svg";
import WE from "../../Images/SL 2.png";
import Testimonicals from "../../Images/SL testimonials.svg";
import Facebook from "../../Images/SL 3 facebook.svg";
import Work from "../../Images/SL 4 works.svg";
import clients from "../../Images/sl clients1.svg";
import Collabaration from "../../Images/SL 7 collaborations.svg";
import Expert from "../../Images/SL expertise.svg";
import Care from "../../Images/SL care.svg";
import Team from "../../Images/SL team.svg";
import { useMediaQuery } from "react-responsive";
import PUC from "../../Images/SL page under construction ICON.svg";
import FlipCard from "../../Components/CardComponent/FlipCard";
import FlipCard1 from "../../Components/CardComponent/FlipCard1";

const AboutPage = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 605px)" });
  const [modalShow, setModalShow] = React.useState(false);
  const [headTitle, setHeadTitle] = React.useState("");
  const [headSize, setHeadSize] = React.useState(".8rem");
  const [Img, setImg] = React.useState();
  return (
    <div className="about">
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ fontSize: headSize }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {headTitle}
          </Modal.Title>
        </Modal.Header>
        <img style={{ width: "100%" }} src={Img} />
      </Modal>
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainerT">
            <div
              onClick={() => {
                props.history.push("/WE");
              }}
            >
              <FlipCard1 FImg={WE} flip={false} />
            </div>
            <div
              onClick={() => {
                props.history.push("/Registered");
              }}
            >
              <FlipCard1 FImg={Registered} flip={false} />
            </div>
            <div
              onClick={() => {
                props.history.push("/Expertise");
              }}
            >
              <FlipCard1 FImg={Expert} flip={false} />
            </div>
          </div>
          <div className="HomeContainerT">
            <FlipCard1 FImg={Team} BImg={PUC} flip={true} />
            <div
              onClick={() => {
                window.open("https://www.facebook.com/ch.s.srinivas", "_blank");
              }}
            >
              <FlipCard1 FImg={Facebook} flip={false} />
            </div>
            <FlipCard1 FImg={Care} BImg={PUC} flip={true} />
          </div>
          <div className="HomeContainerT">
            <div
              onClick={async () => {
                await setHeadTitle("CLIENTS");
                await setImg(CM);
                await setHeadSize("1.4rem");
                await setModalShow(true);
              }}
            >
              <FlipCard1 FImg={clients} BImg={PUC} flip={false} />
            </div>
            <FlipCard1 FImg={Work} BImg={PUC} flip={true} />

            <FlipCard1 FImg={Collabaration} BImg={PUC} flip={true} />
          </div>
          <div className="HomeContainerT ">
            <FlipCard1 FImg={Testimonicals} BImg={PUC} flip={true} />
            <div style={{ opacity: 0 }}>
              <FlipCard1 FImg={Testimonicals} BImg={PUC} flip={true} />
            </div>
            <div style={{ opacity: 0 }}>
              <FlipCard1 FImg={Testimonicals} BImg={PUC} flip={true} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="HomeContainerT">
            <div
              onClick={() => {
                props.history.push("/WE");
              }}
            >
              <FlipCard1 FImg={WE} flip={false} />
            </div>
            <div
              onClick={() => {
                props.history.push("/Registered");
              }}
            >
              <FlipCard1 FImg={Registered} flip={false} />
            </div>
          </div>
          <div className="HomeContainerT">
            <div
              onClick={() => {
                props.history.push("/Expertise");
              }}
            >
              <FlipCard1 FImg={Expert} flip={false} />
            </div>
            <FlipCard1 FImg={Team} BImg={PUC} flip={true} />
          </div>
          <div className="HomeContainerT">
            <div
              onClick={() => {
                window.open("https://www.facebook.com/ch.s.srinivas", "_blank");
              }}
            >
              <FlipCard1 FImg={Facebook} flip={false} />
            </div>
            <FlipCard1 FImg={Care} BImg={PUC} flip={true} />
          </div>
          <div className="HomeContainerT">
            <div
              onClick={async () => {
                await setHeadTitle("CLIENTS");
                await setImg(CM);
                await setHeadSize("1.4rem");
                await setModalShow(true);
              }}
            >
            <FlipCard1 FImg={clients} flip={false} />

            </div>
            <FlipCard1 FImg={Work} BImg={PUC} flip={true} />

          </div>

          <div className="HomeContainerT">
          <FlipCard1 FImg={Collabaration} BImg={PUC} flip={true} />
          <FlipCard1 FImg={Testimonicals} BImg={PUC} flip={true} />

          </div>
        </>
      )}
    </div>
  );
};

export default AboutPage;
