import React from "react";
import call from "../../Images/1 SL call.svg";
import msg from "../../Images/2 SL SMS.svg";
import whstap from "../../Images/3 SL whatsapp.svg";
import map from "../../Images/4 SL location.svg";
import Femail from "../../Images/SL 5 email.svg";
// import {GrMailOption} from "react-icons/gr"
import Mail from "../../mail.svg"
import { FiPhoneCall } from "react-icons/fi";
import { MdMessage, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import {FaEnvelope} from "react-icons/fa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CardS from "../../Components/CardComponent/CardS";

const ContactPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 814px)" });

  return (
    <div>

      {!isTabletOrMobile ? (
        <>
          <div className="HomeContainerT">
            <CardS
              frontImg={call}
              color={"black"}
              matter={"92463 52385"}
              click="true"
              icon={
                <a href="tel:92463 52385" style={{ color: "black" }}>
                  <FiPhoneCall  size={"2em"} />
                </a>
              }
            />
            <CardS
              frontImg={msg}
              color={"grey"}
              matter={"92463 52385"}
              click="true"
              icon={
                <a href="sms:92463 52385" style={{ color: "grey" }}>
                  <MdMessage size={"2em"} />
                </a>
              }
            />
            <CardS
              frontImg={whstap}
              color={"green"}
              matter={"92463 52385"}
              click="true"
              icon={
                <a
                  href="https://api.whatsapp.com/send?phone=8341543176"
                  style={{ color: "green" }}
                >
                  <FaWhatsapp size={"2em"} />
                </a>
              }
            />
          </div>
          <div className="HomeContainerT">
            <CardS
              frontImg={Femail}
              color={"#26A9DF"}
              matter={"creations.u5a@gmail.com"}
              click="true"
              font=".6em"
              icon={
                <a
                href="mailto:creations.u5a@gmail.com"
                  style={{ color: "#26A9DF" }}
                >
        {/* <img src={Mail} height={"40px"} width={"50"}/> */}

                  <FaEnvelope  size={"1.95em"} viewBox={"0 38 512 512"}  />
                  {/* <FontAwesomeIcon icon={faCoffee} /> */}
                </a>
              }
            />
            <CardS
              frontImg={map}
              click="https://goo.gl/maps/yUhjaBYxEjuX5Z1P8"
            />
            <CardS
              frontImg={Femail}
              color={"skyblue"}
              matter={"creations.u5a@gmail.com"}
              click="true"
              font="15px"
              display={0}
            />
          </div>{" "}
        </>
      ) : (
        <div className="HomeContainerT">
          <CardS
            frontImg={call}
            color={"black"}
            matter={"92463 52385"}
            click="true"
            icon={
              <a href="tel:+91 92463 52385" style={{ color: "black" }}>
                <FiPhoneCall size={"2.3em"} />
              </a>
            }
          />
          <CardS
            frontImg={msg}
            color={"grey"}
            matter={"92463 52385"}
            click="true"
            icon={
              <div>
              <a href="sms:+91 92463 52385" style={{ color: "grey" }}>
                <MdMessage size={"2.9em"} />
              </a>
               

              </div>
            }
          />
          <CardS
            frontImg={whstap}
            color={"green"}
            matter={"92463 52385"}
            click="true"
            icon={
              <a
                href="https://api.whatsapp.com/send?phone=+9192463 52385"
                style={{ color: "green" }}
              >
                <FaWhatsapp size={"2.9em"} />
              </a>
            }
          />
          <CardS
            frontImg={Femail}
            color={"#26A9DF"}
            matter={"creations.u5a@gmail.com"}
            click="true"
            font="9px"
            paddingBottom="7px"
            icon={
              <a
              href="mailto:creations.u5a@gmail.com"
                style={{ color: "#26A9DF"  }}
              >
              {/* <img src={Mail} height={"10px"} width={"10px" }/> */}

                <FaEnvelope size={"3em"} viewBox={"0 40 512 512"}   />
              </a>
            }
          />
          <CardS frontImg={map} click="https://goo.gl/maps/yUhjaBYxEjuX5Z1P8" />
          <CardS
            frontImg={Femail}
            color={"blue"}
            matter={"creations.u5a@gmail.com"}
            click="true"
            font="18px"
            display={0}
          />
        </div>
      )}
    </div>
  );
};

export default ContactPage;
