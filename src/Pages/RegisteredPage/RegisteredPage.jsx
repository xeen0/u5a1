import React from "react";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";

import CIN from "../../Images/SL 2 CIN.svg";
import PAN from "../../Images/SL 3 PAN.svg";
import TAN from "../../Images/SL 4 TAN.svg";
import estb from "../../Images/SL 5 estd.png";
import Reg from "../../Images/SL 5 APFCC.svg";
const RegisteredPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div>
      
        {!isTabletOrMobile ? (
          <>
         <div className="HomeContainerT">
         <Card style={{ width: "auto" }}>
           <Card.Img src={CIN} />
         </Card>
         <Card style={{ width: "auto" }}>
           <Card.Img src={PAN} />
         </Card>
         <Card style={{ width: "auto" }} t>
           <Card.Img src={TAN} />
         </Card>
       </div>
       <div className="HomeContainerT">
         <Card style={{ width: "auto" }}>
           <Card.Img src={estb} />
         </Card>
         <Card style={{ width: "auto" }}>
           <Card.Img src={Reg} />
         </Card>
         <Card style={{ width: "auto", opacity: 0 }}>
           <Card.Img src={estb} />
         </Card>
         </div>
         </>
        ) : (
          <>
          <div className="HomeContainerT">
         <Card style={{ width: "auto" }}>
           <Card.Img src={CIN} />
         </Card>
         <Card style={{ width: "auto" }}>
           <Card.Img src={PAN} />
         </Card>
       </div>
       <div className="HomeContainerT">

         <Card style={{ width: "auto" }} t>
           <Card.Img src={TAN} />
         </Card>
         <Card style={{ width: "auto" }}>
           <Card.Img src={estb} />
         </Card>
         </div>
       <div className="HomeContainerT">

         <Card style={{ width: "auto" }}>
           <Card.Img src={Reg} />
         </Card>
         <Card style={{ width: "auto", opacity: 0 }}>
           <Card.Img src={estb} />
         </Card>
         </div>
         </>
        )}
    </div>
  );
};

export default RegisteredPage;
