import React from "react";
import TopRow from "../TopRow";
import BottomRow3 from "../BottomRow3";
import "./ContentGrid3.css";

function ContentGrid3(props) {
  const { cardComponentlarge221Props, cardComponentlarge221Props2 } = props;

  return (
    <div className="content-grid-5">
      <TopRow
        cardComponentlarge221Props={cardComponentlarge221Props.cardComponentlarge221Props}
        cardComponentlarge222Props={cardComponentlarge221Props.cardComponentlarge222Props}
        cardComponentlarge223Props={cardComponentlarge221Props.cardComponentlarge223Props}
      />
      <BottomRow3
        cardComponentlarge221Props={cardComponentlarge221Props2.cardComponentlarge221Props}
        cardComponentlarge222Props={cardComponentlarge221Props2.cardComponentlarge222Props}
        cardComponentlarge223Props={cardComponentlarge221Props2.cardComponentlarge223Props}
      />
    </div>
  );
}

export default ContentGrid3;
