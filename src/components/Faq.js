import React from "react";
import "./Faq.css";

const Faq = ({ question, answer }) => {
  return (
    <div className="faq">
      <div className="container">
        <div className="faqBox">
          <h1>{question}</h1>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
