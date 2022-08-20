import React from "react";
import ButtonPrimary40px from "../ButtonPrimary40px";
import ContentGrid from "../ContentGrid";
import LogotypeMainCopy3x from "../LogotypeMainCopy3x";
import "./HomeDesktop1024px.css";

function HomeDesktop1024px(props) {
  const {
    footer,
    remixCultureTitle,
    exploreLoopsAndSa,
    buttonPrimary40pxProps,
    contentGridProps,
    logotypeMainCopy3xProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homedesktop1024px screen">
        <div className="footer helvetica-normal-white-11px">{footer}</div>
        <div className="all-content">
          <div className="text-and-buttons">
            <h1 className="remix-culture-title inter-black-hint-of-red-60px">{remixCultureTitle}</h1>
            <div className="explore-loops-and-sa inter-semi-bold-white-18px">{exploreLoopsAndSa}</div>
          </div>
          <ButtonPrimary40px>{buttonPrimary40pxProps.children}</ButtonPrimary40px>
          <ContentGrid
            cardComponentlarge1Props={contentGridProps.cardComponentlarge1Props}
            cardComponentlarge2Props={contentGridProps.cardComponentlarge2Props}
            cardComponentlarge3Props={contentGridProps.cardComponentlarge3Props}
            cardComponentlarge4Props={contentGridProps.cardComponentlarge4Props}
            cardComponentlarge5Props={contentGridProps.cardComponentlarge5Props}
          />
        </div>
        <div className="nav-bar-desktop">
          <LogotypeMainCopy3x
            rectangle1={logotypeMainCopy3xProps.rectangle1}
            rectangle2={logotypeMainCopy3xProps.rectangle2}
            path2={logotypeMainCopy3xProps.path2}
            shape2={logotypeMainCopy3xProps.shape2}
            shape3={logotypeMainCopy3xProps.shape3}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeDesktop1024px;
