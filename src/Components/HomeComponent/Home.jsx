import React from "react";
import CardColoumn from 'react-bootstrap/CardColumns'
import {withRouter } from 'react-router-dom'
// import Card from '../../Components/CardComponent/Card'
import Card from "react-bootstrap/Card";
import WorkForce from "../../Images/workforce.svg";
import Traning from '../../Images/training.svg'
import Infotainment from '../../Images/infotainment.svg'
import Feedback from '../../Images/feedback.svg'
import Contact from '../../Images/contact.svg'
import Pay from '../../Images/pay.svg'
import './Home.css'

const Home = (props) => {
  return (
    <div  >
      <div className="HomeContainer">
      <Card  style={{ width: "14rem", height:"15rem" }} onClick={()=>{props.history.push('/Contact')}} >
        <Card.Img variant="top" src={WorkForce} />
      </Card>
      <Card  style={{ width: "14rem", height:"15rem" }} >
        <Card.Img variant="top" src={Traning} />
      </Card>
      <Card  style={{ width: "14rem", height:"15rem" }} >
        <Card.Img variant="top" src={Infotainment} />
      </Card>
      </div>
      <div className="HomeContainer">

      <Card  style={{ width: "14rem", height:"15rem"}} >
        <Card.Img variant="top" src={Feedback} />
      </Card>
      <Card  style={{ width: "14rem", height:"15rem" }} >
        <Card.Img variant="top" src={Contact} />
      </Card>
      <Card  style={{ width: "14rem", height:"15rem" }} >
        <Card.Img variant="top" src={Pay} />
      </Card>
      </div>

    </div>
  );
};

export default withRouter(Home);
