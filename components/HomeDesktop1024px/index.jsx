import React from "react";
import ButtonPrimary40px from "../ButtonPrimary40px";
import CardComponentlarge from "../CardComponentlarge";
import BottomRow from "../BottomRow";
import LogotypeMainCopy3x from "../LogotypeMainCopy3x";
import "./HomeDesktop1024px.css";

function HomeDesktop1024px(props) {
  const {
    footer,
    remixCultureTitle,
    exploreLoopsAndSa,
    buttonPrimary40pxProps,
    cardComponentlarge1Props,
    cardComponentlarge2Props,
    cardComponentlarge3Props,
    bottomRowProps,
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
          <div className="content-grid">
            <div className="top-row">
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
            <BottomRow
              cardComponentlarge1Props={bottomRowProps.cardComponentlarge1Props}
              cardComponentlarge2Props={bottomRowProps.cardComponentlarge2Props}
            />
          </div>
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
