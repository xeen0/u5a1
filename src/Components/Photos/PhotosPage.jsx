import React from 'react';

import { useMediaQuery } from "react-responsive";
import Card from 'react-bootstrap/Card'

import A from '../../Images/Gallery/Photos/SL a.svg'
import B from '../../Images/Gallery/Photos/SL b.svg'
import C from '../../Images/Gallery/Photos/SL c.svg'
import D from '../../Images/Gallery/Photos/SL d.svg'
import E from '../../Images/Gallery/Photos/SL e.svg'
import F from '../../Images/Gallery/Photos/SL f.svg'
import G from '../../Images/Gallery/Photos/SL g.svg'
import H from '../../Images/Gallery/Photos/SL h.svg'
function PhotosPage(props) {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return (
        <div className="container">
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card 
             onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1hirczMLDOpLjNQH_A0vgtu11LEJqKAPY"
            }}
            >
              <Card.Img src={A} />
            </Card>
            <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1MmDr8gRfB4ECFAwCXB0y8tf1KnnJmjo-"
            }}
            
            >
              <Card.Img src={B} />
            </Card>
            <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1074e3FWj63rM40NQGRS8aiYU5AvdOvwV"
            }}>
              <Card.Img src={C} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1hsgCRiV9h-WhHKclersrfgeznmlJF6a6"
            }}>
              <Card.Img src={D} />
            </Card>
            <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1hg_TZRxUUF2zdlFlARgxmriN20B0F1pX"
            }}>
              <Card.Img src={E} />
            </Card>
            <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1hMpanFUOPQbdmzqVmd-hDs3WQDRWUlFL"
            }}>
              <Card.Img src={F} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1yot4R72N27A0J8zAeJJwEsnMkcvyfj0O"
            }}>
              <Card.Img src={G} />
            </Card>
            <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1Rz-epvI1KzFfBV0YUBBzpJ-kw-w1Atl0"
            }}>
              <Card.Img src={H} />
            </Card>
            <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1Rz-epvI1KzFfBV0YUBBzpJ-kw-w1Atl0"
            }}>
              <Card.Img style={{opacity:0}}src={H} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1hirczMLDOpLjNQH_A0vgtu11LEJqKAPY"
            }}>
                <Card.Img src={A} />
              </Card>
              <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1MmDr8gRfB4ECFAwCXB0y8tf1KnnJmjo-"
            }}>
                <Card.Img src={B} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1074e3FWj63rM40NQGRS8aiYU5AvdOvwV"
            }}>
                <Card.Img src={C} />
              </Card>

              <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1hsgCRiV9h-WhHKclersrfgeznmlJF6a6"
            }}>
                <Card.Img src={D} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1hg_TZRxUUF2zdlFlARgxmriN20B0F1pX"
            }}>
                <Card.Img src={E} />
              </Card>
              <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1hMpanFUOPQbdmzqVmd-hDs3WQDRWUlFL"
            }}>
                <Card.Img src={F} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1yot4R72N27A0J8zAeJJwEsnMkcvyfj0O"
            }}>
                <Card.Img src={G} />
              </Card>
              <Card onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://drive.google.com/drive/folders/1Rz-epvI1KzFfBV0YUBBzpJ-kw-w1Atl0"
            }}>
                <Card.Img src={H} />
              </Card>
            </div>
           
          </>
        </>
      )}
    </div>
    );
}

export default PhotosPage;