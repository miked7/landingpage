import React from "react";
import TextAndButtons2 from "../TextAndButtons2";
import ButtonPrimary40px from "../ButtonPrimary40px";
import ContentGrid3 from "../ContentGrid3";
import "./AllContent2.css";

function AllContent2(props) {
  const { buttonPrimary40pxProps, cardComponentlarge221Props } = props;

  return (
    <div className="all-content-5">
      <TextAndButtons2 />
      <ButtonPrimary40px className={buttonPrimary40pxProps.className}>
        {buttonPrimary40pxProps.children}
      </ButtonPrimary40px>
      <ContentGrid3
        cardComponentlarge221Props={cardComponentlarge221Props.cardComponentlarge221Props}
        cardComponentlarge221Props2={cardComponentlarge221Props.cardComponentlarge221Props2}
      />
    </div>
  );
}

export default AllContent2;
