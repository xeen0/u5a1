import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const FlipCard1 = ({ FImg, BImg, flip, click, redrct }, props) => {
  return (
    <div>
      <Flippy flipOnClick={flip} flipDirection="horizontal">
        <FrontSide style={{ padding: "0px" }}>
          <img src={FImg} />
        </FrontSide>
        <BackSide style={{ padding: "0px" }}>
          <img src={BImg} />
        </BackSide>
      </Flippy>
    </div>
  );
};

export default FlipCard1;
