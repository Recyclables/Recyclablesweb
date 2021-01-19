import React from "react";
import Hero from "../../Hero";
import Feature from "../../Feature";
import { homeObjOne, homeObjTwo, homeObjThree } from "./HomeData";
import Section from "../../Section";
import UniqueValueProp from "../../UniqueValueProp";
import Demo from "../../Demo";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <UniqueValueProp />
      <Element name="sectionscroll">
        <h1 className="section-heading">How it works</h1>
      </Element>
      <Section {...homeObjOne} />
      <Section {...homeObjTwo} />
      <Section {...homeObjThree} />
      <Element name="demoscroll">
        <Demo />
      </Element>
    </>
  );
};

export default Home;
