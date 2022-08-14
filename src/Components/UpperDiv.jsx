import React from "react";
import Appbar from "./AppBar";
import ReactTypingEffect from "react-typing-effect";
import Lottie from "react-lottie";
import * as animationData from "../assests/blue.json";

const UpperDiv = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <>
      <section>
        
        <div className="main" data-aos="fade-up">
          <div className="text">
         <p>"Design your webite with us."</p>
            <h1>"Web Development Company to Elevate Your Business."</h1>
          <h3>This site is owned and operated by <span>Tallat Kareem</span></h3>
            {/* <ReactTypingEffect
              text={[
                ,
                
              ]}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          style={{
                            color: "#05386B",
                            fontFamily: "Righteous",
                            fontSize: "1.4em",
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </h1>
                );
              }}
            /> */}

            {/* <p className="intro">
              Why wait for the perfect moment when you can hire us to make your
              imaginations real in a flash. Don't wait, just pick up the phone
              and call us!
            </p> */}
          </div>
          <div className="loimage">
            <Lottie
              options={defaultOptions}
              height={350}
              width={300}
              className="lottie"
            />
          </div>
        </div>
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,192L720,288L1440,160L1440,0L720,0L0,0Z"></path>
        </svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#2F4454" fill-opacity="1" d="M0,192L720,288L1440,160L1440,320L720,320L0,320Z"></path></svg>
    */}
    </>
  );
};

export default UpperDiv;
