import React from "react";
import Profile from "../../Profile";
import { p1, p2, p3, p4, p5, p6, p7, p8 } from "./ProfileData";
import { data } from "./AboutChartData";
import { Fade } from "react-awesome-reveal";
import "./About.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import aboutimg from "../../../assets/nus_sic.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about-mission-text-container">
            <h1>
              Our mission is to enhance the convenience and effectiveness of
              household recycling.
            </h1>
            <p>
              Recyclables partners with the local karung guni community and
              connects both household residents and karung gunis via a digital
              platform.
            </p>
          </div>
          <div
            className="row about-row"
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div className="col">
              <div className="about-goals-text-container">
                <h1>Our Goal</h1>
                <p>
                  Singapore's domestic recycling rate has been hovering at a low
                  20% over the past few years. This has been largely attributed
                  to inconvenience and lack of knowledge.
                </p>
                <p>
                  Recyclables seeks to promote Singapore's domestic recycling
                  efforts by working with karung gunis to provide household
                  residents a hassle-free and rewarding recycling experience.
                </p>
              </div>
            </div>
            <div className="col">
              <Fade triggerOnce fraction={0.7}>
                <div className="about-charts">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={data}
                      margin={{ top: 15, right: 20, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="a" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="5%"
                            stopColor="#6EC0FF"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="95%"
                            stopColor="#6EC0FF"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient id="b" x1="0" y1="0" x2="0" y2="1">
                          <stop
                            offset="5%"
                            stopColor="#FFD06E"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="95%"
                            stopColor="#FFD06E"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="names" />
                      <YAxis
                        domain={[0, 100]}
                        tickFormatter={(tick) => {
                          return `${tick}%`;
                        }}
                      />
                      <CartesianGrid strokeDasharray="5 5" strokeWidth={0.4} />
                      <Tooltip />
                      <Legend
                        verticalAlign="bottom"
                        align="center"
                        height={0}
                      />
                      <Area
                        name="Singapore"
                        type="monotone"
                        dataKey="Singapore"
                        stroke="#6EC0FF"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#a)"
                        isAnimationActive={false}
                      />
                      <Area
                        name="Germany"
                        type="monotone"
                        dataKey="Germany"
                        stroke="#FFD06E"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#b)"
                        isAnimationActive={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Fade>
            </div>
          </div>
          <div
            className="row about-row"
            style={{
              display: "flex",
              flexDirection: "row-reverse"
            }}
          >
            <div className="col">
              <div className="about-goals-text-container">
                <h1>Our Story</h1>
                <p>
                  Recyclables is a social enterprise with environmental
                  protection rooted in our DNA. First conceived in a simple
                  pitch during an NUSSIC meeting, it is now a full-fledged
                  telegram bot that allows you to schedule a collection. With
                  technology, we seek to bring out the goodness in making an
                  environmental impact within us.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="about-img-wrapper">
                <Fade triggerOnce fraction={0.7}>
                  <img
                    src={aboutimg}
                    alt=""
                    className="about-img"
                  />
                </Fade>
              </div>
            </div>
          </div>
          <div className="about-team-text-container">
            <h1>Meet the team</h1>
            <p>
              Recyclables is driven by a group of National University of
              Singapore students from a variety of majors.
            </p>
          </div>
          <div className="about-profile-container">
            <Profile {...p1} />
            <Profile {...p2} />
            <Profile {...p3} />
            <Profile {...p4} />
            <Profile {...p5} />
            <Profile {...p6} />
            <Profile {...p7} />
            <Profile {...p8} />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
