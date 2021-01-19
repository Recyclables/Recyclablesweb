import React from "react";
import "./Profile.css";
import { FaLinkedin } from "react-icons/fa";

const Profile = ({ name, role, description, img, link }) => {
  return (
    <>
      <div className="profile">
        <div className="profile-img-wrapper">
          <img src={img} alt="" className="profile-img" />
        </div>
        <div className="profile-content">
          <h1>{name}</h1>
          <h3>{role}</h3>
          <div className="profile-icon">
            <FaLinkedin onClick={(event) => window.open(link)} />
          </div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;

// onClick={event =>  window.location.href='pagelink'}
