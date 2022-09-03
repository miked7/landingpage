import React from "react";
import TitlesNOverlay from "../TitlesNOverlay";
import "./CardComponentlarge.css";

function CardComponentlarge(props) {
  const { cardComponentCustom, className, titlesNOverlayProps } = props;

  return (
    <a href="https://lunardrive.mixmi.app/" target="_blank">
      <div
        className={`card-component-custom-4 ${className || ""}`}
        style={{ backgroundImage: `url(${cardComponentCustom})` }}
      >
        <div className="overlap-group">
          <TitlesNOverlay
            title={titlesNOverlayProps.title}
            kenyanBasedSinger={titlesNOverlayProps.kenyanBasedSinger}
            className={titlesNOverlayProps.className}
          />
        </div>
      </div>
    </a>
  );
}

export default CardComponentlarge;
