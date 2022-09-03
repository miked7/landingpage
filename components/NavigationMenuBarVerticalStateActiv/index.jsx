import React from "react";
import "./NavigationMenuBarVerticalStateActiv.css";

function NavigationMenuBarVerticalStateActiv(props) {
  const { children, className } = props;

  return (
    <a href="https://www.mixmi.app/" target="_blank">
      <div className={`items-1 ${className || ""}`}>
        <div className="label-4 button-2font-family-1leftblack-regular">{children}</div>
      </div>
    </a>
  );
}

export default NavigationMenuBarVerticalStateActiv;
