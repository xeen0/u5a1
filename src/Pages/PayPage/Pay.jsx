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
import { MdContentCopy } from "react-icons/md";

import FlipCard from '../../Components/CardComponent/FlipCard'

import './pay.css'
import { Tooltip } from '@material-ui/core'
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
      <BackSide className="back" style={{color:"black" ,padding: "15px 0px 20px 20px",lineHeight:"1.8" }} >
        <div className="payMatter">
        <div> Account Name: u5a inc  <MdContentCopy
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log(navigator.clipboard);
                navigator.clipboard.writeText("u5a inc").then(
                  () => {
                    alert("Copied!");
                  },
                  (e) => console.log(e)
                );
              }}
            />
            </div>
        <div>Account Number:   36282433366    <MdContentCopy
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log(navigator.clipboard);
                navigator.clipboard.writeText("36282433366").then(
                  () => {
                    alert("Copied!");
                  },
                  (e) => console.log(e)
                );
              }}
            /></div>
        <div>IFSC code: sbin0004347   <MdContentCopy
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log(navigator.clipboard);
                navigator.clipboard.writeText("sbin0004347").then(
                  () => {
                    alert("Copied!");
                  },
                  (e) => console.log(e)
                );
              }}
            /></div>
        <div> sbi ( state bank of India ) vanasthalipuram branch, opposite police station  <MdContentCopy
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log(navigator.clipboard);
                navigator.clipboard.writeText("sbi ( state bank of India ) vanasthalipuram branch, opposite police station").then(
                  () => {
                    alert("Copied!");
                  },
                  (e) => console.log(e)
                );
              }}
            />

        </div>
        </div>
        <br/>
        <br/>
      </BackSide>
    </Flippy>
      </div>
     

    )
}

export default PayPage
