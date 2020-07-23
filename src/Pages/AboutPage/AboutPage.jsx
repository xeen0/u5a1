import React from "react";
import CardS from "../../Components/CardComponent/CardS";
import Registered from "../../Images/SL 1.svg";
import WE from "../../Images/SL 2.png";
import Card from "react-bootstrap/Card";
import Testimonicals from "../../Images/SL testimonials.svg";
import Facebook from "../../Images/SL 3 facebook.svg";

import { useMediaQuery } from "react-responsive";

const AboutPage = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 605px)" });

  return (
    <div>
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
          <Card.Img src={Testimonicals} />
        </Card>
        {
          isTabletOrMobile?<>
          <Card>
          <Card.Img src={Facebook} />
        </Card>
          </>:<>
          </>
        }
        
      </div>
      {
          !isTabletOrMobile?<>
          <div className="HomeContainerT">
        <Card
          
        >
          <Card.Img src={Facebook} />
        </Card>
        <Card style={{opacity:0}}>
          <Card.Img src={WE} />
        </Card>
        <Card style={{opacity:0}}>
          <Card.Img src={Testimonicals} />
        </Card>
        </div>
          </>:<>
          </>
        }
    </div>
  );
};

export default AboutPage;
