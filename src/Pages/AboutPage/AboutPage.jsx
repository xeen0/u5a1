import React from "react";
import CardS from "../../Components/CardComponent/CardS";
import Card from "react-bootstrap/Card";

import Registered from "../../Images/SL 1.svg";
import WE from "../../Images/SL 2.png";
import Testimonicals from "../../Images/SL testimonials.svg";
import Facebook from "../../Images/SL 3 facebook.svg";
import Work from "../../Images/SL 4 works.svg";
import clients from "../../Images/SL 6 clients.svg";
import Collabaration from "../../Images/SL 7 collaborations.svg";
import { useMediaQuery } from "react-responsive";


const AboutPage = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 605px)" });

  return (
    <>
   { !isTabletOrMobile? <>
      <div className="HomeContainerT">
        <Card
          onClick={() => {
            props.history.push("/u5a1/About/Registered");
          }}
        >
          <Card.Img src={Registered} />
        </Card>
        <Card>
          <Card.Img src={WE} />
        </Card>
        <Card>
          <Card.Img src={Facebook} />
        </Card>
      </div>
      <div className="HomeContainerT">
        <Card>
          <Card.Img src={Work} />
        </Card>
        <Card>
          <Card.Img src={clients} />
        </Card>
        <Card>
          <Card.Img src={Collabaration} />
        </Card>
      </div>
      <div className="HomeContainerT">
        <Card>
          <Card.Img src={Testimonicals} />
        </Card>
        <Card style={{opacity:0}}>
          <Card.Img src={clients} />
        </Card>
        <Card style={{opacity:0}}>
          <Card.Img src={Collabaration} />
        </Card>
      </div>
    </> :
    <>
    <div className="HomeContainerT">
        <Card
          onClick={() => {
            props.history.push("/u5a1/About/Registered");
          }}
        >
          <Card.Img src={Registered} />
        </Card>
        <Card>
          <Card.Img src={WE} />
        </Card>
      </div>
      <div className="HomeContainerT">
        <Card>
          <Card.Img src={Facebook} />
        </Card>
        <Card>
          <Card.Img src={Work} />
        </Card>
      </div>
      <div className="HomeContainerT">
        <Card>
          <Card.Img src={clients} />
        </Card>
        <Card>
          <Card.Img src={Collabaration} />
        </Card>
        </div>
        <div className="HomeContainer">
        <Card>
        
          <Card.Img src={Testimonicals} />
        </Card>
        <Card style={{opacity:0}}>
          <Card.Img src={clients} />
        </Card>
        
      </div>
    
    </>}
    </>
  );
};

export default AboutPage;
