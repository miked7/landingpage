import React from "react";
import CardComponentlarge2 from "../CardComponentlarge2";
import CardComponentlarge from "../CardComponentlarge";
import "./BottomRow.css";

function BottomRow(props) {
  const { cardComponentlarge1Props, cardComponentlarge2Props } = props;

  return (
    <div className="bottom-row">
      <CardComponentlarge2 />
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
    </div>
  );
}

export default BottomRow;
