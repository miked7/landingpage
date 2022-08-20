import React from "react";
import CardComponentlarge from "../CardComponentlarge";
import CardComponentlarge2 from "../CardComponentlarge2";
import "./ContentGrid.css";

function ContentGrid(props) {
  const {
    cardComponentlarge1Props,
    cardComponentlarge2Props,
    cardComponentlarge3Props,
    cardComponentlarge4Props,
    cardComponentlarge5Props,
  } = props;

  return (
    <div className="content-grid">
      <div className="x-row">
        <CardComponentlarge
          cardComponentCustom={cardComponentlarge1Props.cardComponentCustom}
          titlesNOverlayProps={cardComponentlarge1Props.titlesNOverlayProps}
        />
        <CardComponentlarge
          cardComponentCustom={cardComponentlarge2Props.cardComponentCustom}
          className={cardComponentlarge2Props.className}
          titlesNOverlayProps={cardComponentlarge2Props.titlesNOverlayProps}
        />
        <CardComponentlarge
          cardComponentCustom={cardComponentlarge3Props.cardComponentCustom}
          className={cardComponentlarge3Props.className}
          titlesNOverlayProps={cardComponentlarge3Props.titlesNOverlayProps}
        />
      </div>
      <div className="x-row">
        <CardComponentlarge2 />
        <CardComponentlarge
          cardComponentCustom={cardComponentlarge4Props.cardComponentCustom}
          className={cardComponentlarge4Props.className}
          titlesNOverlayProps={cardComponentlarge4Props.titlesNOverlayProps}
        />
        <CardComponentlarge
          cardComponentCustom={cardComponentlarge5Props.cardComponentCustom}
          className={cardComponentlarge5Props.className}
          titlesNOverlayProps={cardComponentlarge5Props.titlesNOverlayProps}
        />
      </div>
    </div>
  );
}

export default ContentGrid;
