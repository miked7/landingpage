import React from "react";
import LogotypeMainCopy3x from "../LogotypeMainCopy3x";
import FieldsAndInputsSearch from "../FieldsAndInputsSearch";
import "./LogoAndSearch.css";

function LogoAndSearch(props) {
  const { logotypeMainCopy3xProps } = props;

  return (
    <div className="logo-and-search">
      <LogotypeMainCopy3x
        rectangle1={logotypeMainCopy3xProps.rectangle1}
        rectangle2={logotypeMainCopy3xProps.rectangle2}
        path2={logotypeMainCopy3xProps.path2}
        shape2={logotypeMainCopy3xProps.shape2}
        shape3={logotypeMainCopy3xProps.shape3}
        className={logotypeMainCopy3xProps.className}
      />
      <FieldsAndInputsSearch />
    </div>
  );
}

export default LogoAndSearch;
