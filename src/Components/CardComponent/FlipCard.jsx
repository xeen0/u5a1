import React from 'react'
import Flippy, { FrontSide, BackSide } from "react-flippy";

const FlipCard = ({FImg , BImg}) => {
    return (
        <div>
             <Flippy >
            <FrontSide  style={{ padding: "0px" , }}>
                <img src={FImg}/>
            </FrontSide>
            <BackSide  style={{ padding: "0px" }}>
                <img src={BImg}/>
            </BackSide>
        </Flippy>
        </div>
    )
}

export default FlipCard
