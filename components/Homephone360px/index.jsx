import React from "react";
import LogotypeMainCopy3x from "../LogotypeMainCopy3x";
import ButtonPrimary40px from "../ButtonPrimary40px";
import CardComponentlarge from "../CardComponentlarge";
import BottomColumn from "../BottomColumn";
import "./Homephone360px.css";

function Homephone360px(props) {
  const {
    footer,
    connectTextCopy,
    exploreLoopsAndSa,
    logotypeMainCopy3xProps,
    buttonPrimary40pxProps,
    cardComponentlarge1Props,
    cardComponentlarge2Props,
    cardComponentlarge3Props,
    bottomColumnProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homephone360px screen">
        <div className="header-mobile">
          <LogotypeMainCopy3x
            rectangle1={logotypeMainCopy3xProps.rectangle1}
            rectangle2={logotypeMainCopy3xProps.rectangle2}
            path2={logotypeMainCopy3xProps.path2}
            shape2={logotypeMainCopy3xProps.shape2}
            shape3={logotypeMainCopy3xProps.shape3}
            className={logotypeMainCopy3xProps.className}
          />
        </div>
        <div className="overlap-group3">
          <div className="footer-1 helvetica-normal-white-11px">{footer}</div>
          <div className="all-content-1">
            <div className="title-and-description">
              <div className="connect-text-copy inter-black-hint-of-red-32px">{connectTextCopy}</div>
              <p className="explore-loops-and-sa-1">{exploreLoopsAndSa}</p>
            </div>
            <ButtonPrimary40px className={buttonPrimary40pxProps.className}>
              {buttonPrimary40pxProps.children}
            </ButtonPrimary40px>
            <div className="content-grid-1">
              <div className="top-column">
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
                cardComponentlarge2Props={bottomColumnProps.cardComponentlarge2Props}
                cardComponentlarge1Props={bottomColumnProps.cardComponentlarge1Props}
                cardComponentlarge2Props2={bottomColumnProps.cardComponentlarge2Props2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homephone360px;
