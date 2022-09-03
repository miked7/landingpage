import React from "react";
import CardComponentlarge2 from "../CardComponentlarge2";
import CardComponentlarge from "../CardComponentlarge";
import "./BottomColumn.css";

function BottomColumn(props) {
  const { cardComponentlarge2Props, cardComponentlarge1Props, cardComponentlarge2Props2 } = props;

  return (
    <div className="bottom-column">
      <CardComponentlarge2 className={cardComponentlarge2Props.className} />
      <CardComponentlarge
        cardComponentCustom={cardComponentlarge1Props.cardComponentCustom}
        className={cardComponentlarge1Props.className}
        titlesNOverlayProps={cardComponentlarge1Props.titlesNOverlayProps}
      />
      <CardComponentlarge
        cardComponentCustom={cardComponentlarge2Props2.cardComponentCustom}
        className={cardComponentlarge2Props2.className}
        titlesNOverlayProps={cardComponentlarge2Props2.titlesNOverlayProps}
      />
    </div>
  );
}

export default BottomColumn;
