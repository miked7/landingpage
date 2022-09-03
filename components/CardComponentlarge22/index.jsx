import React from "react";
import "./CardComponentlarge22.css";

function CardComponentlarge22(props) {
  const { imagePlaceholder, wangechi, kenyanBasedSinger, className } = props;

  return (
    <a href="https://lunardrive.mixmi.app/" target="_blank">
      <div className={`card-component-custom-8 ${className || ""}`}>
        <div className="overlap-group-9">
          <img className="image-placeholder" src={imagePlaceholder} />
          <div className="primary-overlay"></div>
          <div className="titles-n-overlay-9">
            <div className="second-overlay"></div>
            <div className="stacked-group-8">
              <div className="artist-title-4 sfprotext-semi-bold-black-white-32-5px">{wangechi}</div>
              <div className="artist-description-4 sfprotext-medium-black-white-12px">{kenyanBasedSinger}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default CardComponentlarge22;
