import React from "react";
import "./Section.css";
import { Fade } from "react-awesome-reveal";
import Pdf from '../guidelines.pdf';

const Section = ({
  step,
  headline,
  description,
  img,
  alt,
  Button,
  imgStart,
  bgColor,
  headColor,
  paraColor
}) => {
  return (
    <>
      <div className="section" style={{ background: bgColor }}>
        <div className="container">
          <div
            className="row section-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row"
            }}
          >
            <div className="col">
              <div className="section-text-container">
                <h2 style={{ color: headColor }}>{step}</h2>
                <h2 style={{ color: headColor, fontWeight: 500 }}>
                  {headline}
                </h2>
                <p style={{ color: paraColor }}>{description}</p>
                <a
                  href={Pdf}
                  target="_blank"
                  style={{
                    display: Button ? "inline" : "none"
                  }}
                >
                  Show me what I can recycle with Recyclables
                </a>
              </div>
            </div>
            <div className="col">
              <Fade triggerOnce fraction={0.7}>
                <div className="section-img-wrapper">
                  <img src={img} alt={alt} className="section-img" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
