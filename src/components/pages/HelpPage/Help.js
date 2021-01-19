import React from "react";
import Faq from "../../Faq";
import "./Help.css";
import {
  helpOne,
  helpTwo,
  helpThree,
  helpFour,
  helpFive,
  helpSix,
  helpSeven,
  helpEight
} from "./HelpData";

const Help = () => {
  return (
    <>
      <div className="help">
        <h1 style={{ textAlign: "center" }}> Frequently Asked Questions</h1>
        <Faq {...helpOne} />
        <Faq {...helpTwo} />
        <Faq {...helpThree} />
        <Faq {...helpFour} />
        <Faq {...helpFive} />
        <Faq {...helpSix} />
        <Faq {...helpSeven} />
        <Faq {...helpEight} />
      </div>
    </>
  );
};

export default Help;
