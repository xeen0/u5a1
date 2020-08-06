import React from 'react';
import { useMediaQuery } from "react-responsive";

import CardS from '../../Components/CardComponent/CardS';
import FineArts from '../../Images/SL finearts.svg'
import WorkShop from '../../Images/SL workshops.svg'
import IT from '../../Images/SL IT.svg'
import Card from "react-bootstrap/Card";

import './Training.css'

function Training(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 814px)" });

  return (
    <div className='HomeContainerT' >
      <Card>
        <Card.Img src={FineArts} onClick={() => {
          props.history.push("/FineArts");
        }} />
      </Card>
      <Card>
        <Card.Img src={WorkShop} onClick={() => {
          props.history.push("/Workshop");
        }} />
      </Card>
      <Card>
        <Card.Img src={IT} onClick={() => {
          props.history.push("/IT");
        }} />
      </Card>
      {
        isTabletOrMobile?(
          <>
          <Card>
            <Card.Img style={{opacity:0}} src={WorkShop} />
          </Card>
          </>

        ):(<></>)
      }

    </div>
        );
}

export default Training; 