import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBarDiv">
      <div>
        <h2>KEYWORDS</h2>
      </div>
      <div className="SearchArea">
        <div className="SearchBox">
          <input type="text"></input>
          <button>
            {" "}
            Submit <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>{" "}
          </button>
        </div>
        <div>
          <button>A</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
