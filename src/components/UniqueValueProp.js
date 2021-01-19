import React from "react";
import { BiAlarm, BiRecycle, BiDollarCircle } from "react-icons/bi";
import "./UniqueValueProp.css";

const UniqueValueProp = () => {
  return (
    <>
      <div className="usp">
        <h1 className="usp-heading">Why Use Recyclables?</h1>
        <div className="usp-wrapper">
          <div className="usp-container">
            <div className="usp-container-card">
              <div className="usp-icon">
                <BiAlarm />
              </div>
              <h1>Convenience</h1>
              <p>
                Schedule a door step collection at your preferred timeslot and
                save the hassle of carrying heavy items to recycling points.
              </p>
            </div>
            <div className="usp-container-card">
              <div className="usp-icon">
                <BiDollarCircle />
              </div>
              <h1>Incentivised recycling</h1>
              <p>
                Earn cash when you recycle. If you wish to maximise your social
                impact, do consider giving your recyclables for free.
              </p>
            </div>
            <div className="usp-container-card">
              <div className="usp-icon">
                <BiRecycle />
              </div>
              <h1>Social impact</h1>
              <p>
                You can make a positive impact on the environment while helping
                out the local karung gunis. <br />
                How cool is that?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniqueValueProp;
