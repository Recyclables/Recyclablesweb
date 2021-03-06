import React from "react";
import channel8 from "../assets/Channel8.webp";
import channelu from "../assets/ChannelU.webp";
import goodyfeed from "../assets/goodyfeed.webp";
import sic from "../assets/sic.webp";
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <div className="feature">
        <div className="text">As featured on :</div>
        <div className="container">
          <div className="feature-wrap">
            <section>
              <img src={channel8} alt="" className="imagezoom"/>
            </section>
            <section>
              <img src={channelu} alt="" className="imagezoom"/>
            </section>
            <section>
              <img src={sic} alt="" className="imagezoom"/>
            </section>
            <section>
              <img src={goodyfeed} alt="" className="imagezoom"/>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
