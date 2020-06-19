import React from "react";
import {withRouter, Link } from 'react-router-dom'
import  {useMediaQuery} from 'react-responsive'
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
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 814px)' })
  return (
    <div className="container" >{
   !isTabletOrMobile ? <>
   <div className="HomeContainer">
      <Card   onClick={()=>{props.history.push('/Contact')}} >
        <Card.Img  src={WorkForce} />
      </Card>
      <Card     >
        <Card.Img  onClick={()=>{props.history.push('/Training')}}   src={Traning} />
      </Card>
      <Card 
      onClick={(e) => {
        e.preventDefault();
        window.location.href='https://www.youtube.com/channel/UCHqtgHSqcSw9YP-ACr_Glwg';
        }}>
        <Card.Img  src={Infotainment} />
        </Card>
      </div>

      <div className="HomeContainer">
        
      <Card     >
        <Card.Img  src={Feedback} />
      </Card>
      <Card     >
        <Card.Img  onClick={()=>{props.history.push('/Contact')}} src={Contact} />
      </Card>
      <Card     >
        <Card.Img  src={Pay} />
      </Card>
      </div>
      </>
      :
      <>
      <div className="HomeContainer">
      <Card   >
        <Card.Img  src={WorkForce} />
      </Card>
      <Card onClick={()=>{props.history.push('/Training')}}     >
        <Card.Img  src={Traning} />
      </Card>
      
      </div>
      <div className="HomeContainer">

      <Card  onClick={(e) => {
        e.preventDefault();
        window.location.href='https://www.youtube.com/channel/UCHqtgHSqcSw9YP-ACr_Glwg';
        }}>
        <Card.Img  src={Infotainment} />
      </Card>
      <Card     >
        <Card.Img  src={Feedback} />
      </Card>
      </div>

      <div className="HomeContainer">
        
      
      <Card   onClick={()=>{props.history.push('/Contact')}}   >
        <Card.Img  src={Contact} />
      </Card>
      <Card     >
        <Card.Img  src={Pay} />
      </Card>
      </div>
      </>
      
}
    </div>
  );
};

export default withRouter(Home);
