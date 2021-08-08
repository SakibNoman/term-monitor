import React from "react";
import MainBody from "../MainBody/MainBody";
import SideBar from "../SideBar/SideBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="layout">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainBody">
        <MainBody></MainBody>
      </div>
    </div>
  );
};

export default Home;
