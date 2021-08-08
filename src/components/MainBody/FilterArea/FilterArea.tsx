import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FilterArea.css";

const FilterArea = () => {
  return (
    <div className="filterDiv">
      {/* Filter area heading part */}
      <div className="ActionDiv">
        <div>
          <h4> Add Another keyword </h4>
          <p> 1/3 </p>
          <p> UPGRADE </p>
        </div>
        <div>
          <p>Advance search</p>
        </div>
      </div>

      {/* Filter area input box part */}
      <div className="SearchDiv">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        <input type="text" placeholder="Enter your filters here" />
        <button> SAVE Filters </button>
      </div>
    </div>
  );
};

export default FilterArea;
