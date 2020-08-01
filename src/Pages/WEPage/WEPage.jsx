import React from "react";
import CardS from "../../Components/CardComponent/CardS";
import Card from "react-bootstrap/Card";

import Brainstrom from "../../Images/SL 1 brainstorm.svg";
import ImagineIdeas from "../../Images/SL 2 imagine ideas.svg";
import Analysis from "../../Images/SL 3 analyse.svg";
import Evaluate from "../../Images/SL 4 evaluate.svg";
import RnD from "../../Images/SL 5 r n d.svg";
import Approve from "../../Images/SL 6 approve.svg";
import Quote from "../../Images/SL 7 quote.svg";
import Create from "../../Images/SL 8 create.svg";
import { useMediaQuery } from "react-responsive";

const WEPage = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 605px)" });

  return (
    <>
      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={Brainstrom} />
            </Card>
            <Card>
              <Card.Img src={ImagineIdeas} />
            </Card>
            <Card>
              <Card.Img src={Evaluate} />
            </Card>
          </div>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={RnD} />
            </Card>
            <Card>
              <Card.Img src={Approve} />
            </Card>
            <Card>
              <Card.Img src={Quote} />
            </Card>
          </div>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={Analysis} />
            </Card>
            <Card>
              <Card.Img src={Create} />
            </Card>
            <Card style={{ opacity: 0 }}>
              <Card.Img src={Create} />
            </Card>
          </div>
        </>
      ) : (
        <>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={Brainstrom} />
            </Card>
            <Card>
              <Card.Img src={ImagineIdeas} />
            </Card>
          </div>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={Evaluate} />
            </Card>
            <Card>
              <Card.Img src={RnD} />
            </Card>
          </div>
          <div className="HomeContainerT">
            <Card>
              <Card.Img src={Approve} />
            </Card>
            <Card>
              <Card.Img src={Quote} />
            </Card>
          </div>
          <div className="HomeContainer">
            <Card>
              <Card.Img src={Analysis} />
            </Card>
            <Card>
              <Card.Img src={Create} />
            </Card>
          </div>
         
        </>
      )}
    </>
  );
};

export default WEPage;
