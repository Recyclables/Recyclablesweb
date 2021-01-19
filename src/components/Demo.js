import React from "react";
import "./Demo.css";
import iphonesix from "../assets/iphone6.png";
import demovid from "../assets/demo.mp4";
import gbadge from "../assets/playstore-badge.png";
import appbadge from "../assets/appstore-badge.svg";
import { Slide } from "react-awesome-reveal";

const Demo = () => {
  return (
    <>
      <div className="Demo">
        <h1 className="Demo-heading">Get Started</h1>
        <div className="Demo-wrapper">
          <div className="container">
            <div
              className="row Demo-row"
              style={{
                flexDirection: "row"
              }}
            >
              <div className="col">
                <div className="Demo-text-container">
                  <ol>
                    <li style={{ marginBottom: "2rem" }}>
                      Download the <mark>Telegram app</mark>, available on both
                      iOS and android.
                    </li>
                    <div className="Demo-img-wrapper">
                      <img src={gbadge} alt="" className="Demo-img" />
                      <img src={appbadge} alt="" className="Demo-img" />
                    </div>
                    <li>
                      Search for{" "}
                      <mark className="Demo-mark1">@RecyclablesBot</mark>.
                    </li>
                    <li>
                      Type <mark>/start</mark> to begin.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="col">
                <Slide triggerOnce direction="right" fraction={0.4}>
                  <div
                    className="Demo-video-wrap"
                    style={{
                      backgroundImage: `url(${iphonesix})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }}
                  >
                    <div className="Demo-video-iphone">
                      <video
                        className="Demo-video-iphone-player"
                        controls
                        autoPlay
                        muted
                        loop
                      >
                        <source src={demovid} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
