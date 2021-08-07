import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="layout">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainBody"></div>
    </div>
  );
};

export default Home;
