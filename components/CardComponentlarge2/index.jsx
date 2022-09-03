import React from "react";
import "./CardComponentlarge2.css";

function CardComponentlarge2(props) {
  const { className } = props;

  return (
    <div className={`card-component-custom-copy ${className || ""}`}>
      <div className="overlap-group-4">
        <div className="titles-n-overlay-5">
          <div className="stacked-group-4">
            <div className="artist-title-2 sfprotext-semi-bold-black-white-32-5px">Charles Pierre</div>
            <div className="artist-description-2 sfprotext-medium-black-white-12px">Producer/Remixer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponentlarge2;
