import React from "react";
import channel8 from "../assets/Channel8.jpg";
import channelu from "../assets/ChannelU.jpg";
import goodyfeed from "../assets/goodyfeed.jpg";
import sic from "../assets/sic.jpg";
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <div className="feature">
        <div className="text">As featured on :</div>
        <div className="container">
          <div className="feature-wrap">
            <img src={channel8} alt="" className="imagezoom" />
            <img src={channelu} alt="" className="imagezoom" />
            <img src={sic} alt="" className="imagezoom" />
            <img src={goodyfeed} alt="" className="imagezoom" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
