import React from 'react';

import Card from 'react-bootstrap/Card'

import videos from '../../Images/SL 2 videos.svg'
import Images from '../../Images/SL 1 images.svg'

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
            </div>
        </div>
    );
}

export default GalleryPage;