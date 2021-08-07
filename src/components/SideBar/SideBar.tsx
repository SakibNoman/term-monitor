import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SideBarItem from "./SideBarItem";

const sideBarInfo = [
  {
    id: 1,
    icon: faCoffee,
    title: "Add keywords",
  },
  {
    id: 2,
    icon: faCoffee,
    title: "Matches",
  },
  {
    id: 3,
    icon: faCoffee,
    title: "Manage sources",
  },
  {
    id: 4,
    icon: faCoffee,
    title: "Integration",
  },
  {
    id: 5,
    icon: faCoffee,
    title: "Alerts",
  },
];

const SideBar = () => {
  return (
    <div>
      {sideBarInfo.map((each) => (
        <SideBarItem key={each.id} icon={each.icon} title={each.title} />
      ))}
    </div>
  );
};

export default SideBar;
