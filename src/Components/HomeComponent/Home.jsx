import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// import Card from '../../Components/CardComponent/Card'
import Card from "react-bootstrap/Card";
import WorkForce from "../../Images/workforce.svg";
import Traning from "../../Images/SL training.svg";
import Feedback from "../../Images/feedback.svg";
import Contact from "../../Images/contact.svg";
import Pay from "../../Images/pay.svg";
import Download from "../../Images/download.svg";
import About from "../../Images/SL about us.svg";
import Gallery from "../../Images/SL gallery.svg";
import uploadedFileLink from "../../Images/u5a.zip";
import "./Home.css";
import Advertisement from "../Advertisement/Advertisement";

const Home = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="container">
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card
              onClick={() => {
                props.history.push("/Workforce");
              }}
            >
              <Card.Img src={WorkForce} />
            </Card>
            <Card>
              <Card.Img
                onClick={() => {
                  props.history.push("/Training");
                }}
                src={Traning}
              />
            </Card>
            <Card 
            onClick={() => {
              props.history.push("/Gallery");
            }}
            >
              <Card.Img src={Gallery} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card
              onClick={() => {
                props.history.push("/About");
              }}
            >
              <Card.Img src={About} />
            </Card>
            <Card>
              <Card.Img
                onClick={() => {
                  props.history.push("/Contact");
                }}
                src={Contact}
              />
            </Card>
            <Card>
              <Card.Img
                onClick={() => {
                  props.history.push("/Pay");
                }}
                src={Pay}
              />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <a href={uploadedFileLink} target="_blank" download="u5a">
                <Card.Img src={Download} />
              </a>
            </Card>
            <Card onClick={(e) => {
                e.preventDefault();
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSdEPHzMmDqJkuZ1nZ5wjyyR12GVwo81hKkeDe59u8eXqqeLiA/viewform?usp=sf_link", "_blank")

              }}> 
              <Card.Img src={Feedback} />
            </Card>
            <Card
             style={{opacity:0}}
            >
              <Card.Img src={Feedback} />
            </Card>
          </div>
         
        <Advertisement />

        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card
                onClick={() => {
                  props.history.push("/Workforce");
                }}
              >
                <Card.Img src={WorkForce} />
              </Card>
              <Card>
                <Card.Img
                  onClick={() => {
                    props.history.push("/Training");
                  }}
                  src={Traning}
                />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card 
              onClick={() => {
                props.history.push("/Gallery");
              }}
              >
                <Card.Img src={Gallery} />
              </Card>

              <Card
                onClick={() => {
                  props.history.push("/About");
                }}
              >
                <Card.Img src={About} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img
                  onClick={() => {
                    props.history.push("/Contact");
                  }}
                  src={Contact}
                />
              </Card>
              <Card>
                <Card.Img
                  onClick={() => {
                    props.history.push("/Pay");
                  }}
                  src={Pay}
                />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <a href={uploadedFileLink} target="_blank" download="u5a">
                  <Card.Img src={Download} />
                </a>
              </Card>
              <Card 
              onClick={(e) => {
                e.preventDefault();
                window.open("https://docs.google.com/forms/d/e/1FAIpQLSdEPHzMmDqJkuZ1nZ5wjyyR12GVwo81hKkeDe59u8eXqqeLiA/viewform?usp=sf_link", "_blank")

              }}>
                <Card.Img src={Feedback} />
              </Card>
            </div>
           
            <Advertisement/>

          </>
        </>
      )}

    </div>
  );
};

export default withRouter(Home);
