import React from "react";
import profilePic from "../../images/profile.svg";
import MainBody from "../MainBody/MainBody";
import SideBar from "../SideBar/SideBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="layout">
      <div className="sideBar">
        <div className="profileBadge">
          <img src={profilePic} alt="" />
          <h1>
            Term <span>Monitor</span>{" "}
          </h1>
        </div>
        <SideBar />
      </div>
      <div className="mainBody">
        <MainBody></MainBody>
      </div>
    </div>
  );
};

export default Home;
