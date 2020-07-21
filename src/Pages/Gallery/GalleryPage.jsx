import React from 'react';

import Card from 'react-bootstrap/Card'

import videos from '../../Images/SL 2 videos.svg'
import Images from '../../Images/SL 1 images.svg'
import Infotainment from "../../Images/infotainment.svg";

function GalleryPage(props) {
    return (
        <div>
            <div className="HomeContainer">
              <Card onClick={() => {
                  props.history.push("/u5a1/Gallery/Photos");
                }}>
                <Card.Img src={Images} />
              </Card>
              <Card>
                <Card.Img src={videos} />
              </Card>
              <Card
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.youtube.com/channel/UCHqtgHSqcSw9YP-ACr_Glwg";
              }}
            >
              <Card.Img  src={Infotainment} />
            </Card>
            </div>
        </div>
    );
}

export default GalleryPage;