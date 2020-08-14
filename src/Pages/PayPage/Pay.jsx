import React from "react";
import Gpay from "../../Images/SL gpay.svg";
import GpayCode from "../../Images/SL gpay code.svg";
import Paytm from "../../Images/SL paytm.svg";
import PaytmCode from "../../Images/SL paytm code.svg";
import sbi from "../../Images/SL sbi.svg";
import PhonePay from "../../Images/SL phonepe.svg";
import PhonePayCode from "../../Images/SL phonepe code.svg";
import SbiInfo from "../../Images/SL sbi details.svg";
import Flippy from "react-flippy/dist/Flippy";
import { FrontSide, BackSide } from "react-flippy/dist/FlippyCard";
import { MdContentCopy } from "react-icons/md";

import FlipCard from "../../Components/CardComponent/FlipCard";

import "./pay.css";
const PayPage = () => {
  return (
    <div className="HomeContainerT">
      <FlipCard FImg={Gpay} BImg={GpayCode} />
      <FlipCard FImg={PhonePay} BImg={PhonePayCode} />
      <FlipCard FImg={Paytm} BImg={PaytmCode} />
      <FlipCard FImg={sbi} BImg={SbiInfo} />

    </div>
  );
};

export default PayPage;
