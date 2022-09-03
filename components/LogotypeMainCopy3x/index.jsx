import React from "react";
import "./LogotypeMainCopy3x.css";

function LogotypeMainCopy3x(props) {
  const { rectangle1, rectangle2, path2, shape2, shape3, className } = props;

  return (
    <div className={`logotype_-main ${className || ""}`}>
      <img className="path" src="/img/home-1024-path-B047FB46-F9C7-4DE5-86C0-A13957CE3E25@2x.png" />
      <img className="shape-2" src="/img/home-1024-shape-BB313B6A-A0FC-4C9E-8E3B-A325D1A56F0A@2x.png" />
      <div className="overlap-group-8">
        <img className="rectangle" src={rectangle1} />
        <img className="rectangle-1" src={rectangle2} />
      </div>
      <img className="path-1" src={path2} />
      <img className="shape-3" src={shape2} />
      <img className="shape-4" src={shape3} />
    </div>
  );
}

export default LogotypeMainCopy3x;
