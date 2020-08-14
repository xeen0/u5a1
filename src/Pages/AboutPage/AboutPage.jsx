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
            <Card
              onClick={() => {
                props.history.push("/WE");
              }}
            >
              <Card.Img src={WE} />
            </Card>
            <Card
              onClick={() => {
                props.history.push("/Registered");
              }}
            >
              <Card.Img src={Registered} />
            </Card>
            <Card
              onClick={() => {
                props.history.push("/Expertise");
              }}
            >
              <Card.Img src={Expert} />
            </Card>
          </div>
          <div className="HomeContainerT">
            {/* <Card>
              <Card.Img src={Team} />
            </Card> */}
            <FlipCard FImg={Team} BImg={PUC} />
            <Card
              onClick={() => {
                window.open("https://www.facebook.com/ch.s.srinivas", "_blank");
              }}
            >
              <Card.Img src={Facebook} />
            </Card>
            <FlipCard FImg={Care} BImg={PUC} />
          </div>
          <div className="HomeContainerT">
            <Card
              onClick={async () => {
                await setHeadTitle("CLIENTS");
                await setImg(CM);
                await setHeadSize("1.4rem");
                await setModalShow(true);
              }}
            >
              <Card.Img src={clients} />
            </Card>
            <FlipCard FImg={Work} BImg={PUC} />

            <FlipCard FImg={Collabaration} BImg={PUC} />
          </div>
          <div className="HomeContainerT ">
            <FlipCard FImg={Testimonicals} BImg={PUC} />

            <Card>
              <Card.Img style={{ opacity: 0 }} src={Work} />
            </Card>
            <Card>
              <Card.Img style={{ opacity: 0 }} src={Collabaration} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <div className="HomeContainerT">
            <Card
              onClick={() => {
                props.history.push("/WE");
              }}
            >
              <Card.Img src={WE} />
            </Card>
            <Card
              onClick={() => {
                props.history.push("/Registered");
              }}
            >
              <Card.Img src={Registered} />
            </Card>
          </div>
          <div className="HomeContainerT">
            <Card
              onClick={() => {
                props.history.push("/Expertise");
              }}
            >
              <Card.Img src={Expert} />
            </Card>
            <FlipCard FImg={Team} BImg={PUC} />
          </div>
          <div className="HomeContainerT">
            <Card
              onClick={() => {
                window.open("https://www.facebook.com/ch.s.srinivas", "_blank");
              }}
            >
              <Card.Img src={Facebook} />
            </Card>
            <FlipCard FImg={Care} BImg={PUC} />
          </div>
          <div className="HomeContainerT">
            <Card
              onClick={async () => {
                await setHeadTitle("CLIENTS");
                await setImg(CM);
                await setHeadSize("1.4rem");
                await setModalShow(true);
              }}
            >
              <Card.Img src={clients} />
            </Card>
            <FlipCard FImg={Work} BImg={PUC} />
          </div>

          <div className="HomeContainerT">
            <FlipCard FImg={Collabaration} BImg={PUC} />
            <div className="test">
              <FlipCard FImg={Testimonicals} BImg={PUC} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutPage;
