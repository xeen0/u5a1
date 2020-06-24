import React from 'react'
import Flippy ,{FrontSide , BackSide} from'react-flippy'
import Card from 'react-bootstrap/Card'
import Header from '../../Components/HeaderComponent/Header'
import call from '../../Images/1 SL call.svg'
import msg from '../../Images/2 SL SMS.svg'
import whstap from '../../Images/3 SL whatsapp.svg'
import map from '../../Images/4 SL location.svg'
import CardS from '../../Components/CardComponent/CardS'

const ContactPage = () => {
    return (
       <div className="HomeContainerT">
        <CardS frontImg={call} color={"black"} phno={"8341543176"} click="true"/>
        <CardS frontImg={msg} color={"grey"} phno={"8341543176"} click="true"/>
        <CardS frontImg={whstap} color={"green"} phno={"8341543176"} click="true"/>
        <CardS frontImg={map} click="https://goo.gl/maps/yUhjaBYxEjuX5Z1P8"/>

      </div>
     

    )
}

export default ContactPage
