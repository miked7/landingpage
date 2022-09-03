import React from "react";
import CardComponentlarge from "../CardComponentlarge";
import BottomColumn from "../BottomColumn";
import "./ContentGrid2.css";

function ContentGrid2(props) {
  const {
    cardComponentlarge1Props,
    cardComponentlarge2Props,
    cardComponentlarge3Props,
    cardComponentlarge3Props2,
  } = props;

  return (
    <div className="content-grid-4">
      <div className="top-column-1">
        <CardComponentlarge
          cardComponentCustom={cardComponentlarge1Props.cardComponentCustom}
          className={cardComponentlarge1Props.className}
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
      <BottomColumn
        cardComponentlarge2Props={cardComponentlarge3Props2.cardComponentlarge2Props}
        cardComponentlarge1Props={cardComponentlarge3Props2.cardComponentlarge1Props}
        cardComponentlarge2Props2={cardComponentlarge3Props2.cardComponentlarge2Props2}
      />
    </div>
  );
}

export default ContentGrid2;
