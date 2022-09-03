import React from "react";
import "./ButtonPrimaryMediumDefault.css";

function ButtonPrimaryMediumDefault(props) {
  const { children } = props;

  return (
    <div className="button-primary-medium-default">
      <div className="label-3">{children}</div>
    </div>
  );
}

export default ButtonPrimaryMediumDefault;
