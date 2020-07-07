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

      {/* <Flippy flipDirection="horizontal" style={{ padding: " 10px 10px" }}>
        <FrontSide style={{ padding: "0px" }}>
          <img src={sbi} />
        </FrontSide>
        <BackSide
          className="back"
          
        >
          <>
            <div className="payMatter">
              <div className="head1"> CURRENT ACCOUNT NAME </div>
              <div className="head2">
                U5A INC
                <MdContentCopy
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
            </div>
            <div className="payMatter">
              <div className="head1"> CURRENT ACCOUNT NUMBER </div>
              <div className="head2">
                36 28 24 333 66
                <MdContentCopy
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
                />
              </div>
            </div>
            <div className="payMatter">
              <div className="head1"> IFSC CODE </div>
              <div className="head2">
                SBI 000 4347
                <MdContentCopy
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    console.log(navigator.clipboard);
                    navigator.clipboard.writeText("SBI0004347").then(
                      () => {
                        alert("Copied!");
                      },
                      (e) => console.log(e)
                    );
                  }}
                />
              </div>
            </div>

            <br />
            <br />
          </>
        </BackSide>
      </Flippy> */}
    </div>
  );
};

export default PayPage;
