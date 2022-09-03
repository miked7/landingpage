import React from "react";
import "./TitlesNOverlay.css";

function TitlesNOverlay(props) {
  const { title, kenyanBasedSinger, className } = props;

  return (
    <div className={`titles-n-overlay-4 ${className || ""}`}>
      <div className="stacked-group">
        <div className="artist-title sfprotext-semi-bold-black-white-32-5px">{title}</div>
        <div className="artist-description sfprotext-medium-black-white-12px">{kenyanBasedSinger}</div>
      </div>
    </div>
  );
}

export default TitlesNOverlay;
