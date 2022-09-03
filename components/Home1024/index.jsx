import React from "react";
import TextAndButtons from "../TextAndButtons";
import ButtonPrimary40px from "../ButtonPrimary40px";
import ContentGrid from "../ContentGrid";
import LogoAndSearch from "../LogoAndSearch";
import MenuLinkNewdesktop64px from "../MenuLinkNewdesktop64px";
import ButtonPrimaryMediumDefault from "../ButtonPrimaryMediumDefault";
import IconMenu from "../IconMenu";
import "./Home1024.css";

function Home1024(props) {
  const {
    footer,
    buttonPrimary40pxProps,
    contentGridProps,
    logoAndSearchProps,
    menuLinkNewdesktop64px1Props,
    menuLinkNewdesktop64px2Props,
    buttonPrimaryMediumDefaultProps,
    iconMenuProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home1024 screen">
        <div className="footer-3 helvetica-normal-white-11px">{footer}</div>
        <div className="all-content-3">
          <TextAndButtons />
          <ButtonPrimary40px className={buttonPrimary40pxProps.className}>
            {buttonPrimary40pxProps.children}
          </ButtonPrimary40px>
          <ContentGrid
            cardComponentlarge1Props={contentGridProps.cardComponentlarge1Props}
            cardComponentlarge2Props={contentGridProps.cardComponentlarge2Props}
            cardComponentlarge3Props={contentGridProps.cardComponentlarge3Props}
            cardComponentlarge1Props2={contentGridProps.cardComponentlarge1Props2}
          />
        </div>
        <div className="nav-bar-desktop-1">
          <LogoAndSearch logotypeMainCopy3xProps={logoAndSearchProps.logotypeMainCopy3xProps} />
          <div className="login-and-hamburger-menu">
            <div className="menu-items">
              <MenuLinkNewdesktop64px>{menuLinkNewdesktop64px1Props.children}</MenuLinkNewdesktop64px>
              <MenuLinkNewdesktop64px className={menuLinkNewdesktop64px2Props.className}>
                {menuLinkNewdesktop64px2Props.children}
              </MenuLinkNewdesktop64px>
            </div>
            <div className="button-and-hamburger">
              <ButtonPrimaryMediumDefault>{buttonPrimaryMediumDefaultProps.children}</ButtonPrimaryMediumDefault>
              <IconMenu src={iconMenuProps.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1024;
