import React from "react";
import "./Footer.css";
import logo from "../assets/recyclables-signature.webp";
import { Link } from "react-router-dom";
import Pdf from '../guidelines.pdf';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div
            className="row footer-row"
            style={{
              flexDirection: "row"
            }}
          >
            <div className="col">
              <div className="footer-info-wrapper">
                <img src={logo} alt="" className="footer-logo" />
                <ul>
                  <li>
                    National University of Singapore​
                    <br />
                    21 Lower Kent Ridge Rd
                    <br />
                    Singapore 119077
                  </li>
                  <li>hello@recyclables.sg</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-link-wrapper">
                <div className="footer-link-container">
                  <h3>Social</h3>
                  <ul>
                    <li>
                      <a href="https://facebook.com/recyclables.sg">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/recyclables.sg/">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-container">
                  <h3>Resources</h3>
                  <ul>
                    <li>
                      <a href={Pdf} target="_blank">
                        Recycling guidelines
                      </a>
                    </li>
                    <li>
                      <Link to="/contact-us" className="footer-links">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/help" className="footer-links">
                        Help
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-link-container">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <Link to="/privacy" className="footer-links">
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms" className="footer-links">
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
