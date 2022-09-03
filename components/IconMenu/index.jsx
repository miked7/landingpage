import React from "react";
import { Link } from "react-router-dom";
import "./IconMenu.css";

function IconMenu(props) {
  const { src, className } = props;

  return (
    <div className={`icon-menu ${className || ""}`}>
      <img className="fill" src={src} />
    </div>
  );
}

export default IconMenu;
