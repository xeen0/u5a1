import React from "react";
import CardS from "../../Components/CardComponent/CardS";
import Registered from "../../Images/SL 1.svg";
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
      </div>
    </div>
  );
};

export default AboutPage;
