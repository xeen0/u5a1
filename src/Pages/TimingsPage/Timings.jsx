import React from "react";
import Card from "react-bootstrap/Card";
import T1 from "../../Images/Timmings/Running timming/SL MOD 1.svg";
import T2 from "../../Images/Timmings/Running timming/SL MOD 2.svg";
import T3 from "../../Images/Timmings/Running timming/SL MOD 3.svg";
import T4 from "../../Images/Timmings/Running timming/SL MOD 4.svg";
import T5 from "../../Images/Timmings/Running timming/SL MOD 5.svg";
// import T6 from "../../Images/Timmings/Running timming/SL MOD 6.svg";


const Timings = () => {
  return (
    <>
      <div className="HomeContainerT">
        <Card className="cardT">
          <Card.Img src={T1} />
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
          <Card.Img src={T4} />
        </Card>
      </div>

      <div className="HomeContainerT">
        <Card className="cardT">
          <Card.Img src={T5} />
        </Card>
        
        <Card className="cardT" style={{opacity:0}}>
          <Card.Img src={T5} />
        </Card>
      </div>
 
    </>
  );
};

export default Timings;
