import React from "react";
import NavigationMenuBarVerticalStateActiv from "../NavigationMenuBarVerticalStateActiv";
import "./Small.css";

function Small(props) {
  const { navigationMenuBarVerticalStateActiv1Props, navigationMenuBarVerticalStateActiv2Props } = props;

  return (
    <div className="small screen">
      <div className="menu">
        <div className="navigation-menu-bar-vertical-2-items">
          <NavigationMenuBarVerticalStateActiv>
            {navigationMenuBarVerticalStateActiv1Props.children}
          </NavigationMenuBarVerticalStateActiv>
          <NavigationMenuBarVerticalStateActiv className={navigationMenuBarVerticalStateActiv2Props.className}>
            {navigationMenuBarVerticalStateActiv2Props.children}
          </NavigationMenuBarVerticalStateActiv>
        </div>
      </div>
    </div>
  );
}

export default Small;
