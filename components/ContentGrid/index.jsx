import React from "react";
import CardComponentlarge from "../CardComponentlarge";
import BottomRow from "../BottomRow";
import "./ContentGrid.css";

function ContentGrid(props) {
  const {
    cardComponentlarge1Props,
    cardComponentlarge2Props,
    cardComponentlarge3Props,
    cardComponentlarge1Props2,
  } = props;

  return (
    <div className="content-grid-3">
      <div className="top-row-2">
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
      <BottomRow
        cardComponentlarge1Props={cardComponentlarge1Props2.cardComponentlarge1Props}
        cardComponentlarge2Props={cardComponentlarge1Props2.cardComponentlarge2Props}
      />
    </div>
  );
}

export default ContentGrid;
