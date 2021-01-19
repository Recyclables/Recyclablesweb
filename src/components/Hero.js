import React from "react";
import iphone from "../assets/iphone-min.png";
import "./Hero.css";
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row hero-row">
            <div className="col">
              <div className="hero-text-container">
                <h1>Help the environment with a few simple clicks.</h1>
                <p>
                  Recyclables is a karung guni hailing service that operates in
                  the form of a Telegram Chatbot.
                </p>
                <ul>
                  <li>
                    Schedule a door step collection of your recyclables with
                    just your phone.
                  </li>
                  <li>Save the hassle of carrying heavy items.</li>
                  <li>
                    Start recycling with as little as 10kg of recyclables.
                  </li>
                </ul>
                <div className="hero-button">
                  <Link to="sectionscroll" smooth={true} duration={500}>
                    <button className="btn--normal">How it works</button>
                  </Link>
                  <Link to="demoscroll" smooth={true} duration={500}>
                    <button className="btn--invert">Get started</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <Slide triggerOnce direction="left">
                <div className="hero-img-wrapper">
                  <img src={iphone} alt="" className="hero-img" />
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
