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

// Various types of information on navigation
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
  //useState hook to detect active nav item
  const [activeNav, setActiveNav] = useState(0);

  //function to change active class of nav bar
  const handleClick = (id: number) => {
    setActiveNav(id);
  };

  return (
    <div className="SideBarDiv">
      {/* array mapping and nav building of similar look item */}
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

      {/* some independent nav item */}
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
