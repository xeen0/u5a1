import React from 'react'
import Flippy ,{FrontSide , BackSide} from'react-flippy'
import Card from 'react-bootstrap/Card'
import Header from '../../Components/HeaderComponent/Header'
import call from '../../Images/1 SL call.svg'
import msg from '../../Images/2 SL SMS.svg'
import whstap from '../../Images/3 SL whatsapp.svg'
import map from '../../Images/4 SL location.svg'
const ContactPage = () => {
    return (
       <>
       <Header/>
       <div className="HomeContainerT">
        {/* <Card className="cardT">
          <Card.Img src={call} />
        </Card>
        <Card className="cardT">
          <Card.Img src={msg} />
        </Card>
        <Card className="cardT">
          <Card.Img src={whstap} />
        </Card>
        <Card className="cardT">
          <Card.Img src={map} />
        </Card> */}
        <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" // horizontal or vertical
    // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
      <FrontSide
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        src={call}
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
      ROCKS
    </BackSide>
  </Flippy>
      </div>
     

       </>
    )
}

export default ContactPage
