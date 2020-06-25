import React from 'react'
import Gpay from '../../Images/SL gpay.svg'
import GpayCode from '../../Images/SL gpay code.svg'
import Paytm  from '../../Images/SL paytm.svg'
import PaytmCode from '../../Images/SL paytm code.svg'
import sbi from '../../Images/SL sbi.svg'
import PhonePay from '../../Images/SL phonepe.svg'
import PhonePayCode from '../../Images/SL phonepe code.svg'

import Flippy from 'react-flippy/dist/Flippy'
import { FrontSide,BackSide } from 'react-flippy/dist/FlippyCard'
import FlipCard from '../../Components/CardComponent/FlipCard'

import './pay.css'
const PayPage = () => {
    return (
       <div className="HomeContainerT">
           <FlipCard FImg={Gpay} BImg={GpayCode} />
           <FlipCard FImg={PhonePay} BImg={PhonePayCode} />
           <FlipCard FImg={Paytm} BImg={PaytmCode} />
           <Flippy
      flipDirection="horizontal"
      style={{ padding:"10px" }}
    >
      <FrontSide style={{ padding: "0px" }}>
        <img src={sbi} />
      </FrontSide>
      <BackSide className="back" style={{color:"black" ,padding: "20px 20px 20px 20px" }} >
        <div className="payMatter">
        <div>Account Name: u5a inc</div>
        <div>Account Number: 36282433366</div>
        <div>IFSC code: sbin0004347</div>
        <div> sbi ( state bank of India ) vanasthalipuram branch, opposite police station</div>
        </div>
        <br/>
        <br/>
      </BackSide>
    </Flippy>
      </div>
     

    )
}

export default PayPage
