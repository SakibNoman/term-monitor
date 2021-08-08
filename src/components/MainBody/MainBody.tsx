import React from "react";
import FilterArea from "./FilterArea/FilterArea";
import "./MainBody.css";
import NavBar from "./NavBar/NavBar";
import ResultArea from "./ResultArea/ResultArea";

const MainBody = () => {
  return (
    <div className="Main-Body">
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        <FilterArea></FilterArea>
      </div>
      <div>
        <ResultArea></ResultArea>
      </div>
    </div>
  );
};

export default MainBody;
