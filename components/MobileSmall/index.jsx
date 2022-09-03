import React from "react";
import ButtonPrimary40px from "../ButtonPrimary40px";
import ContentGrid2 from "../ContentGrid2";
import LogotypeMainCopy3x from "../LogotypeMainCopy3x";
import IconMenu from "../IconMenu";
import "./MobileSmall.css";

function MobileSmall(props) {
  const {
    footer,
    connectTextCopy,
    exploreLoopsAndSa,
    buttonPrimary40pxProps,
    contentGrid2Props,
    logotypeMainCopy3xProps,
    iconMenuProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobilesmall screen">
        <div className="footer-4 helvetica-normal-white-11px">{footer}</div>
        <div className="all-content-4">
          <div className="title-and-description-1">
            <div className="connect-text-copy-1 inter-black-hint-of-red-32px">{connectTextCopy}</div>
            <p className="explore-loops-and-sa-4">{exploreLoopsAndSa}</p>
          </div>
          <ButtonPrimary40px className={buttonPrimary40pxProps.className}>
            {buttonPrimary40pxProps.children}
          </ButtonPrimary40px>
          <ContentGrid2
            cardComponentlarge1Props={contentGrid2Props.cardComponentlarge1Props}
            cardComponentlarge2Props={contentGrid2Props.cardComponentlarge2Props}
            cardComponentlarge3Props={contentGrid2Props.cardComponentlarge3Props}
            cardComponentlarge3Props2={contentGrid2Props.cardComponentlarge3Props2}
          />
        </div>
        <div className="header-mobile-1">
          <LogotypeMainCopy3x
            rectangle1={logotypeMainCopy3xProps.rectangle1}
            rectangle2={logotypeMainCopy3xProps.rectangle2}
            path2={logotypeMainCopy3xProps.path2}
            shape2={logotypeMainCopy3xProps.shape2}
            shape3={logotypeMainCopy3xProps.shape3}
            className={logotypeMainCopy3xProps.className}
          />
          <IconMenu src={iconMenuProps.src} className={iconMenuProps.className} />
        </div>
      </div>
    </div>
  );
}

export default MobileSmall;
