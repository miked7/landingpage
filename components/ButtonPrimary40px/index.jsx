import React from "react";
import "./ButtonPrimary40px.css";

function ButtonPrimary40px(props) {
  const { children, className } = props;

  return (
    <a href="https://mixmi.io" target="_blank">
      <div className={`button-primary-40px ${className || ""}`}>
        <div className="label inter-bold-log-cabin-18px">{children}</div>
      </div>
    </a>
  );
}

export default ButtonPrimary40px;
