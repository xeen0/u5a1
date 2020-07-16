import React from 'react';

import { useMediaQuery } from "react-responsive";


import Card from 'react-bootstrap/Card'
import Motivation from '../../Images/SL 1 motivation.svg'
import PersonalityDevelopment from '../../Images/SL 2 personality development.svg'
import CommunicationSkills from '../../Images/SL 3 communication skills.svg'
import Anchoring from '../../Images/SL 4 anchoring.svg'
import Cinematography from '../../Images/SL 5 cinematography.svg'
import FilmMaking from '../../Images/SL 6 film making.svg'
import SkillDevelopment from '../../Images/SL 7 skill development.svg'
import QuallityManagement from '../../Images/SL 8 quality management.svg'


function WorkShop(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

    return (
        <div className="container">
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainer">
            <Card>
              <Card.Img src={Motivation} />
            </Card>
            <Card>
              <Card.Img src={PersonalityDevelopment} />
            </Card>
            <Card>
              <Card.Img src={CommunicationSkills} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={Anchoring} />
            </Card>
            <Card>
              <Card.Img src={Cinematography} />
            </Card>
            <Card>
              <Card.Img src={FilmMaking} />
            </Card>
          </div>

          <div className="HomeContainer">
            <Card>
              <Card.Img src={SkillDevelopment} />
            </Card>
            <Card>
              <Card.Img src={QuallityManagement} />
            </Card>
            <Card>
              <Card.Img style={{opacity:0}}src={QuallityManagement} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={Motivation} />
              </Card>
              <Card>
                <Card.Img src={PersonalityDevelopment} />
              </Card>
            </div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={CommunicationSkills} />
              </Card>

              <Card>
                <Card.Img src={Anchoring} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={Cinematography} />
              </Card>
              <Card>
                <Card.Img src={FilmMaking} />
              </Card>
            </div>

            <div className="HomeContainer">
              <Card>
                <Card.Img src={SkillDevelopment} />
              </Card>
              <Card>
                <Card.Img src={QuallityManagement} />
              </Card>
            </div>
           
          </>
        </>
      )}
    </div>
    );
}

export default WorkShop;