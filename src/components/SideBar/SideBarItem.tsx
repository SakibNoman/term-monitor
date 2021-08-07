import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IProps {
  icon: any;
  title: string;
}

const SideBarItem = ({ icon, title }: IProps) => {
  return (
    <div>
      <div>
        {" "}
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        {" "}
        <p> {title} </p>{" "}
      </div>
    </div>
  );
};

export default SideBarItem;
