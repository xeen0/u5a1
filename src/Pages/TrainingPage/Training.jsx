import React from 'react'
import Card from "react-bootstrap/Card";
import art from '../../Images/SL 1 art.svg'
import guitar from '../../Images/SL 1 guitar.svg'
import drums from '../../Images/SL 1 jazz drums.svg'
import piano from '../../Images/SL 1 piano.svg'
import artf from '../../Images/SL 2 art.svg'
import guitarf from '../../Images/SL 2 guitar.svg'
import drumsf from '../../Images/SL 2 jazz drums.svg'
import pianof from '../../Images/SL 2 piano.svg'
import finearts from '../../Images/SL 0.svg'
import timings from '../../Images/SL timings.svg'
import regclss from '../../Images/SL 7.svg'
import newjng from '../../Images/SL 10.svg'
import './Training.css'
import Header from '../../Components/HeaderComponent/Header';
import { withRouter } from 'react-router-dom';
const Training = (props) => {
    return (
        <div>
          <Header/>
           <>
      <div className="HomeContainerT">
      <Card className="cardT"  >
        <Card.Img  src={guitar} />
      </Card>
      <Card  className="cardT"    >
        <Card.Img  src={guitarf} />
      </Card>
      <Card  className="cardT"    >
      <Card.Img  src={finearts} />
      </Card>
      
      </div>
      <div className="HomeContainerT">

      <Card className="cardT"  >
        <Card.Img  src={piano} />
      </Card>
      <Card className="cardT"     >
        <Card.Img  src={pianof} />
      </Card> 
      <Card  className="cardT"    >
      <Card.Img  src={newjng} />

      </Card>
      </div>

      <div className="HomeContainerT">
        
      
      <Card  className="cardT"    >
        <Card.Img  src={drums} />
      </Card>
      <Card  className="cardT"    >
        <Card.Img  src={drumsf} />
      </Card>
      <Card  className="cardT"    >
      <Card.Img  src={regclss} />

      </Card>
      </div>
      <div className="HomeContainerT">
        
      
        <Card  className="cardT"    >
          <Card.Img  src={art} />
        </Card>
        <Card   className="cardT"   >
          <Card.Img  src={artf} />
        </Card>
        <Card onClick={()=>{props.history.push('/Timing')}} className="cardT"    >
        <Card.Img  src={timings} />

        </Card>
        </div>
      </>
        </div>
    )
}

export default withRouter(Training)
