import React from 'react'
import call from '../../Images/1 SL call.svg'
import msg from '../../Images/2 SL SMS.svg'
import whstap from '../../Images/3 SL whatsapp.svg'
import map from '../../Images/4 SL location.svg'
import Femail from '../../Images/SL 5 email.svg'
import { useMediaQuery } from "react-responsive";

import CardS from '../../Components/CardComponent/CardS'

const ContactPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 814px)" });

    return (

         <div>
           {!isTabletOrMobile ? 
           <>
       <div className="HomeContainerT">
        <CardS frontImg={call} color={"black"} matter={"92463 52385"} click="true"/>
        <CardS frontImg={msg} color={"grey"} matter={"92463 52385"} click="true"/>
        <CardS frontImg={whstap} color={"green"} matter={"92463 52385"} click="true"/>
        </div>
       <div className="HomeContainerT">
        <CardS frontImg={Femail} color={"skyblue"} matter={"creations.u5a@gmail.com"} click ="true" font="15px"/>
        <CardS frontImg={map} click="https://goo.gl/maps/yUhjaBYxEjuX5Z1P8"/>
        <CardS frontImg={Femail} color={"skyblue"} matter={"creations.u5a@gmail.com"} click ="true" font="15px" display={0}/>
           </div> </>:
       <div className="HomeContainerT">

           <CardS frontImg={call} color={"black"} matter={"92463 52385"} click="true"/>
           <CardS frontImg={msg} color={"grey"} matter={"92463 52385"} click="true"/>
           <CardS frontImg={whstap} color={"green"} matter={"92463 52385"} click="true"/>
           <CardS frontImg={Femail} color={"skyblue"} matter={"creations.u5a@gmail.com"} click ="true" font="9px"/>
           <CardS frontImg={map} click="https://goo.gl/maps/yUhjaBYxEjuX5Z1P8"/>
           <CardS frontImg={Femail} color={"blue"} matter={"creations.u5a@gmail.com"} click ="true" font="15px" display={0}/>
           
           </div>
    }
      </div> 
     

    )
}

export default ContactPage
