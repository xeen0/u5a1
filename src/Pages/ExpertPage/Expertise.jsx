import React from "react";
import CardS from "../../Components/CardComponent/CardS";
import Card from "react-bootstrap/Card";

import SkilledManPower from "../../Images/SL 1 skilled manpower.svg";
import Freelancing from "../../Images/SL 2 freelancing.svg";
import Outsourcing from "../../Images/SL 3 outsourcing.svg";
import Advice from "../../Images/SL 4 advice.svg";
import Acknoledgement from "../../Images/SL 5 acknowledge.svg";
import Debate from "../../Images/SL 6 debate.svg";

import { useMediaQuery } from "react-responsive";

const ExpertisePage = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 605px)" });

  return (
    <>
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={SkilledManPower} />
            </Card>
            <Card>
              <Card.Img src={Freelancing} />
            </Card>
            <Card>
              <Card.Img src={Advice} />
            </Card>
          </div>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={Acknoledgement} />
            </Card>
            <Card>
              <Card.Img src={Debate} />
            </Card>
            <Card>
              <Card.Img src={Outsourcing} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={SkilledManPower} />
            </Card>
            <Card>
              <Card.Img src={Freelancing} />
            </Card>
          </div>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={Advice} />
            </Card>
            <Card>
              <Card.Img src={Acknoledgement} />
            </Card>
          </div>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={Debate} />
            </Card>
            <Card>
              <Card.Img src={Outsourcing} />
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default ExpertisePage;
