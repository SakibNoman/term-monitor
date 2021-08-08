import {
  faHome,
  faNewspaper,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div className="SideBarDiv">
      <div>
        <p>
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
        </p>
        <p>Add Keywords</p>
      </div>

      <div>
        <p>
          <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
        </p>
        <p>Matches</p>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
        </p>
        <p>Manage sources</p>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
        </p>
        <p>Integration</p>
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
        </p>
        <p>Alerts</p>
      </div>
    </div>
  );
};

export default SideBar;
