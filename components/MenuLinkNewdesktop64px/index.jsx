import React from "react";
import "./MenuLinkNewdesktop64px.css";

function MenuLinkNewdesktop64px(props) {
  const { children, className } = props;

  return (
    <div className={`menu-link-new-copy-3 ${className || ""}`}>
      <div className="contact inter-semi-bold-hint-of-red-10px">{children}</div>
    </div>
  );
}

export default MenuLinkNewdesktop64px;
