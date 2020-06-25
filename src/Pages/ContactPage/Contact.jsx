import React from 'react'
import call from '../../Images/1 SL call.svg'
import msg from '../../Images/2 SL SMS.svg'
import whstap from '../../Images/3 SL whatsapp.svg'
import map from '../../Images/4 SL location.svg'
import CardS from '../../Components/CardComponent/CardS'

const ContactPage = () => {
    return (
       <div className="HomeContainerT">
        <CardS frontImg={call} color={"black"} matter={"92463 52385"} click="true"/>
        <CardS frontImg={msg} color={"grey"} matter={"92463 52385"} click="true"/>
        <CardS frontImg={whstap} color={"green"} matter={"92463 52385"} click="true"/>
        <CardS frontImg={map} click="https://goo.gl/maps/yUhjaBYxEjuX5Z1P8"/>
      </div>
     

    )
}

export default ContactPage
