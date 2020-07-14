import React from "react";
import CardS from "../../Components/CardComponent/CardS";
import Registered from "../../Images/SL 1.svg";
import WE from "../../Images/SL 2.png"
import Card from "react-bootstrap/Card";
const AboutPage = (props) => {
  return (
    <div>
      <div className="HomeContainerT">
        <Card style={{ width: "auto" }} onClick={() => {
                props.history.push("/u5a1/About/Registered");
              }}>
          <Card.Img src={Registered} />
        </Card>
        <Card style={{ width: "auto" }} onClick={() => {
                // props.history.push("/u5a1/About/Registered");
              }}>
          <Card.Img src={WE} />
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
