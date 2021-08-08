import {
  faHome,
  faNewspaper,
  faSortDown,
  faStar,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./sideBar.css";

const navInfo = [
  {
    title: "Add keywords",
    icon: faHome,
  },
  {
    title: "Matches",
    icon: faUserFriends,
  },
  {
    title: "Manage sources",
    icon: faNewspaper,
  },
  {
    title: "Integration",
    icon: faNewspaper,
  },
  {
    title: "Alerts",
    icon: faNewspaper,
  },
];

const SideBar = () => {
  return (
    <div className="SideBarDiv">
      {navInfo.map((each) => (
        <div>
          <p>
            <FontAwesomeIcon icon={each.icon} />
          </p>
          <p>{each.title}</p>
        </div>
      ))}
      <div className="SettingDiv">
        <p>
          <FontAwesomeIcon icon={faStar} />
        </p>
        <p className="SettingHeader"> Settings </p>
        <p>
          <FontAwesomeIcon icon={faSortDown} />
        </p>
      </div>
      <p className="billing">Billings</p>
    </div>
  );
};

export default SideBar;
