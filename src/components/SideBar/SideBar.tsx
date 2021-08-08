import {
  faHome,
  faNewspaper,
  faSortDown,
  faStar,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./sideBar.css";

const navInfo = [
  {
    id: 0,
    title: "Add keywords",
    icon: faHome,
  },
  {
    id: 1,
    title: "Matches",
    icon: faUserFriends,
  },
  {
    id: 2,
    title: "Manage sources",
    icon: faNewspaper,
  },
  {
    id: 3,
    title: "Integration",
    icon: faNewspaper,
  },
  {
    id: 4,
    title: "Alerts",
    icon: faNewspaper,
  },
];

const SideBar = () => {
  const [activeNav, setActiveNav] = useState(0);

  const handleClick = (id: number) => {
    setActiveNav(id);
  };

  return (
    <div className="SideBarDiv">
      {navInfo.map((each) => (
        <div
          onClick={() => handleClick(each.id)}
          className={activeNav === each.id ? "active" : ""}
        >
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
