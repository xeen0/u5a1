import React from 'react';

import Card from 'react-bootstrap/Card'
import { useMediaQuery } from "react-responsive";


import videos from '../../Images/SL 2 videos.svg'
import Images from '../../Images/SL 1 images.svg'
import Infotainment from "../../Images/infotainment.svg";
import Greeting from "../../Images/SL 4 greetings.svg"
import Infographic from "../../Images/SL 5 infographics.svg"
import Achivements from "../../Images/SL 5 achievements.svg"
function GalleryPage(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 605px)" });

    return (
        <div>
            <div className="HomeContainer">
              <Card onClick={() => {
                  props.history.push("/Gallery/Photos");
                }}>
                <Card.Img src={Images} />
              </Card>
              <Card>
                <Card.Img src={videos} />
              </Card>
              <Card >
                <Card.Img src={Achivements} />
              </Card>

              { isTabletOrMobile?<Card
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.youtube.com/channel/UCHqtgHSqcSw9YP-ACr_Glwg", "_blank")
              }}
            >
              <Card.Img  src={Infotainment} />
            </Card>:<></>}
            
            </div>
            <div className="HomeContainer">
              
              
              { !isTabletOrMobile?<Card
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.youtube.com/channel/UCHqtgHSqcSw9YP-ACr_Glwg", "_blank")

              }}
            >
              <Card.Img  src={Infotainment} />
            </Card>:<></>}
            <Card >
                <Card.Img src={Greeting} />
              </Card>
              <Card >
                <Card.Img src={Infographic} />
              </Card>
            </div>
        </div>
    );
}

export default GalleryPage;