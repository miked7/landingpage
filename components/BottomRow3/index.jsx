import React from "react";
import CardComponentlarge22 from "../CardComponentlarge22";
import "./BottomRow3.css";

function BottomRow3(props) {
  const { cardComponentlarge221Props, cardComponentlarge222Props, cardComponentlarge223Props } = props;

  return (
    <div className="bottom-row-2">
      <CardComponentlarge22
        imagePlaceholder={cardComponentlarge221Props.imagePlaceholder}
        wangechi={cardComponentlarge221Props.wangechi}
        kenyanBasedSinger={cardComponentlarge221Props.kenyanBasedSinger}
        className={cardComponentlarge221Props.className}
      />
      <CardComponentlarge22
        imagePlaceholder={cardComponentlarge222Props.imagePlaceholder}
        wangechi={cardComponentlarge222Props.wangechi}
        kenyanBasedSinger={cardComponentlarge222Props.kenyanBasedSinger}
        className={cardComponentlarge222Props.className}
      />
      <CardComponentlarge22
        imagePlaceholder={cardComponentlarge223Props.imagePlaceholder}
        wangechi={cardComponentlarge223Props.wangechi}
        kenyanBasedSinger={cardComponentlarge223Props.kenyanBasedSinger}
        className={cardComponentlarge223Props.className}
      />
    </div>
  );
}

export default BottomRow3;
