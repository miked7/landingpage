import React from "react";
import ButtonPrimary40px from "../ButtonPrimary40px";
import CardComponentlarge22 from "../CardComponentlarge22";
import BottomRow3 from "../BottomRow3";
import LogotypeMainCopy3x from "../LogotypeMainCopy3x";
import "./HomeTablet768px.css";

function HomeTablet768px(props) {
  const {
    footer,
    remixCultureTitle,
    exploreLoopsAndSa,
    buttonPrimary40pxProps,
    cardComponentlarge221Props,
    cardComponentlarge222Props,
    cardComponentlarge223Props,
    bottomRow3Props,
    logotypeMainCopy3xProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hometablet768px-all-breakpoints screen">
        <div className="footer-2 helvetica-normal-white-11px">{footer}</div>
        <div className="all-content-2">
          <div className="text-and-buttons-1">
            <div className="remix-culture-title-1 inter-black-hint-of-red-50px">{remixCultureTitle}</div>
            <div className="explore-loops-and-sa-2 inter-semi-bold-white-18px">{exploreLoopsAndSa}</div>
          </div>
          <ButtonPrimary40px className={buttonPrimary40pxProps.className}>
            {buttonPrimary40pxProps.children}
          </ButtonPrimary40px>
          <div className="content-grid-2">
            <div className="top-row-1">
              <CardComponentlarge22
                imagePlaceholder={cardComponentlarge221Props.imagePlaceholder}
                wangechi={cardComponentlarge221Props.wangechi}
                kenyanBasedSinger={cardComponentlarge221Props.kenyanBasedSinger}
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
            <BottomRow3
              cardComponentlarge221Props={bottomRow3Props.cardComponentlarge221Props}
              cardComponentlarge222Props={bottomRow3Props.cardComponentlarge222Props}
              cardComponentlarge223Props={bottomRow3Props.cardComponentlarge223Props}
            />
          </div>
        </div>
        <div className="nav-bar-tablet">
          <LogotypeMainCopy3x
            rectangle1={logotypeMainCopy3xProps.rectangle1}
            rectangle2={logotypeMainCopy3xProps.rectangle2}
            path2={logotypeMainCopy3xProps.path2}
            shape2={logotypeMainCopy3xProps.shape2}
            shape3={logotypeMainCopy3xProps.shape3}
            className={logotypeMainCopy3xProps.className}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeTablet768px;
