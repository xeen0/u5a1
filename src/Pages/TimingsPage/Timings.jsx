import React from "react";
import Card from "react-bootstrap/Card";
import T1 from "../../Images/SL MOD 1.svg";
import T2 from "../../Images/SL MOD 2.svg";
import T3 from "../../Images/SL MOD 3.svg";
import T4 from "../../Images/SL MOD 4.svg";
import T5 from "../../Images/SL MOD 5.svg";
import T6 from "../../Images/SL MOD 6.svg";
import regClss from '../../Images/SL 7.svg';
import musInst from '../../Images/SL 8.svg';
import drwapnt from '../../Images/SL 9.svg';
import Header from "../../Components/HeaderComponent/Header";

const Timings = () => {
  return (
    <>
      <Header/>
      <div className="HomeContainerT">
        <Card className="cardT">
          <Card.Img src={T1} />
        </Card>
        <Card className="cardT">
          <Card.Img src={regClss} />
        </Card>
        <Card className="cardT">
          <Card.Img src={T2} />
        </Card>
      </div>
      <div className="HomeContainerT">
        <Card className="cardT">
          <Card.Img src={T3} />
        </Card>
        <Card className="cardT">
          <Card.Img src={musInst} />
        </Card>
        <Card className="cardT">
          <Card.Img src={T4} />
        </Card>
      </div>

      <div className="HomeContainerT">
        <Card className="cardT">
          <Card.Img src={T5} />
        </Card>
        <Card className="cardT">
          <Card.Img src={drwapnt} />
        </Card>
        <Card className="cardT">
          <Card.Img src={T6} />
        </Card>
      </div>
 
    </>
  );
};

export default Timings;
