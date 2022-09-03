import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomeDesktop1024px from "./components/HomeDesktop1024px";
import Homephone360px from "./components/Homephone360px";
import HomeTablet768px from "./components/HomeTablet768px";
import Home1024 from "./components/Home1024";
import MobileSmall from "./components/MobileSmall";
import TabletSmall from "./components/TabletSmall";
import Small from "./components/Small";

function App() {
  return (
    <>
        <div className="content-1024">
            <HomeDesktop1024px {...homeDesktop1024pxData} />
        </div>
        <div className="content-768">
            <HomeTablet768px {...homeTablet768pxData} />
        </div>
        <div className="content-360">
            <Homephone360px {...homephone360pxData} />
        </div>
    </>
  );
}

export default App;
const buttonPrimary40px1Data = {
    children: "ABOUT + CONTACT",
};

const titlesNOverlay1Data = {
    title: "Lunar Drive",
    kenyanBasedSinger: "Native American infused pop",
    className: "",
};

const cardComponentlarge1Data = {
    cardComponentCustom: "/img/home-1024-image-placeholder-232E9ADC-DAFC-4F58-9BF3-742B142FFF1C.jpg",
    titlesNOverlayProps: titlesNOverlay1Data,
};

const titlesNOverlay2Data = {
    title: "Wangechi",
    kenyanBasedSinger: "Kenya based rapper/singer",
    className: "",
};

const cardComponentlarge2Data = {
    cardComponentCustom: "/img/mobile-small-image-placeholder-F9565413-963D-4026-85AB-20640D1D9729.jpg",
    className: "card-component-custom",
    titlesNOverlayProps: titlesNOverlay2Data,
};

const titlesNOverlay3Data = {
    title: "Los de Abajo",
    kenyanBasedSinger: "Eclectic Vibes from Mexico City",
    className: "",
};

const cardComponentlarge3Data = {
    cardComponentCustom: "/img/home-1024-image-placeholder-EB577D8D-A22F-45BB-81E2-DD74642946E0.jpg",
    className: "card-component-custom",
    titlesNOverlayProps: titlesNOverlay3Data,
};

const titlesNOverlay4Data = {
    title: "DJ Zinc",
    kenyanBasedSinger: "Brit Producer/DJ",
    className: "",
};

const cardComponentlarge4Data = {
    cardComponentCustom: "/img/tablet-small-image-placeholder-B5A9F666-3904-4F47-85D8-8D5DE3BE5AB1.jpg",
    className: "card-component-custom",
    titlesNOverlayProps: titlesNOverlay4Data,
};

const titlesNOverlay5Data = {
    title: "Kevin Locke",
    kenyanBasedSinger: "Lakota Traditional",
    className: "",
};

const cardComponentlarge5Data = {
    cardComponentCustom: "/img/mobile-small-image-placeholder-9B673EE9-CF00-4CEC-9FF1-B1E07A9DE395.jpg",
    className: "card-component-custom",
    titlesNOverlayProps: titlesNOverlay5Data,
};

const bottomRow1Data = {
    cardComponentlarge1Props: cardComponentlarge4Data,
    cardComponentlarge2Props: cardComponentlarge5Data,
};

const logotypeMainCopy3x1Data = {
    rectangle1: "/img/home-1024-rectangle-6748661D-4DAB-494B-8F37-AF4710860B65@2x.png",
    rectangle2: "/img/home-1024-rectangle-0FCE00FD-FBAE-4C0B-9368-43F62E42D9A4@2x.png",
    path2: "/img/home-1024-path-F9DB845A-C419-4D51-B2D0-58E770EAA4FD@2x.png",
    shape2: "/img/home-1024-shape-6AC4F073-7226-438B-8336-D9861ACB5FBE@2x.png",
    shape3: "/img/home-1024-shape-F71E5CC9-8EB5-45E2-BB50-59C16224E0DA@2x.png",
};

const homeDesktop1024pxData = {
    footer: "© mixmi 2022",
    remixCultureTitle: <React.Fragment>REMIX CULTURE <br />POWERED BY WEB 3</React.Fragment>,
    exploreLoopsAndSa: "explore loops and samples from everywhere",
    buttonPrimary40pxProps: buttonPrimary40px1Data,
    cardComponentlarge1Props: cardComponentlarge1Data,
    cardComponentlarge2Props: cardComponentlarge2Data,
    cardComponentlarge3Props: cardComponentlarge3Data,
    bottomRowProps: bottomRow1Data,
    logotypeMainCopy3xProps: logotypeMainCopy3x1Data,
};

const logotypeMainCopy3x2Data = {
    rectangle1: "/img/tablet-small-rectangle-04BBF9BE-DA4A-4CE8-BB03-65EE356471B1@2x.png",
    rectangle2: "/img/mobile-small-rectangle-76E58978-6E4B-4A1E-878D-0F9FDB3FB971@2x.png",
    path2: "/img/tablet-small-path-948A0254-70EC-45B2-98EB-D67F66CEC096@2x.png",
    shape2: "/img/mobile-small-shape-FFA96AFF-8AF2-47AA-825D-B04F259353B4@2x.png",
    shape3: "/img/tablet-small-shape-6254F922-DB55-4588-BFA0-02FB557DEFE2@2x.png",
    className: "logotype_-main-copy3x-copy",
};

const buttonPrimary40px2Data = {
    children: "ABOUT + CONTACT",
    className: "button-primary-large-default",
};

const titlesNOverlay6Data = {
    title: "Artist Title",
    kenyanBasedSinger: "Artist description",
    className: "",
};

const cardComponentlarge6Data = {
    cardComponentCustom: "/img/mobile-small-image-placeholder-F9565413-963D-4026-85AB-20640D1D9729.jpg",
    className: "card-component-custom-1",
    titlesNOverlayProps: titlesNOverlay6Data,
};

const titlesNOverlay7Data = {
    title: "Lunar Drive",
    kenyanBasedSinger: "Native American infused pop",
    className: "",
};

const cardComponentlarge7Data = {
    cardComponentCustom: "/img/home-1024-image-placeholder-232E9ADC-DAFC-4F58-9BF3-742B142FFF1C.jpg",
    className: "card-component-custom-5",
    titlesNOverlayProps: titlesNOverlay7Data,
};

const titlesNOverlay8Data = {
    title: "Los de Abajo",
    kenyanBasedSinger: "Eclectic Vibes from Mexico City",
    className: "",
};

const cardComponentlarge8Data = {
    cardComponentCustom: "/img/home-1024-image-placeholder-EB577D8D-A22F-45BB-81E2-DD74642946E0.jpg",
    className: "card-component-custom-1",
    titlesNOverlayProps: titlesNOverlay8Data,
};

const cardComponentlarge23Data = {
    className: "card-component-custom-copy-1",
};

const titlesNOverlay9Data = {
    title: "DJ Zinc",
    kenyanBasedSinger: "Brit Producer/DJ",
    className: "",
};

const cardComponentlarge9Data = {
    cardComponentCustom: "/img/tablet-small-image-placeholder-B5A9F666-3904-4F47-85D8-8D5DE3BE5AB1.jpg",
    className: "card-component-custom-1",
    titlesNOverlayProps: titlesNOverlay9Data,
};

const titlesNOverlay10Data = {
    title: "Kevin Locke",
    kenyanBasedSinger: "Lakota Traditional",
    className: "",
};

const cardComponentlarge10Data = {
    cardComponentCustom: "/img/mobile-small-image-placeholder-9B673EE9-CF00-4CEC-9FF1-B1E07A9DE395.jpg",
    className: "card-component-custom-1",
    titlesNOverlayProps: titlesNOverlay10Data,
};

const bottomColumn1Data = {
    cardComponentlarge2Props: cardComponentlarge23Data,
    cardComponentlarge1Props: cardComponentlarge9Data,
    cardComponentlarge2Props2: cardComponentlarge10Data,
};

const homephone360pxData = {
    footer: "© mixmi 2022",
    connectTextCopy: <React.Fragment>REMIX CULTURE <br />POWERED BY WEB 3</React.Fragment>,
    exploreLoopsAndSa: "explore loops and samples from everywhere",
    logotypeMainCopy3xProps: logotypeMainCopy3x2Data,
    buttonPrimary40pxProps: buttonPrimary40px2Data,
    cardComponentlarge1Props: cardComponentlarge6Data,
    cardComponentlarge2Props: cardComponentlarge7Data,
    cardComponentlarge3Props: cardComponentlarge8Data,
    bottomColumnProps: bottomColumn1Data,
};

const buttonPrimary40px3Data = {
    children: "ABOUT + CONTACT",
    className: "button-primary-large-default-1",
};

const cardComponentlarge222Data = {
    imagePlaceholder: "/img/home-1024-image-placeholder-232E9ADC-DAFC-4F58-9BF3-742B142FFF1C.jpg",
    wangechi: "Lunar Drive",
    kenyanBasedSinger: "Native American infused pop",
};

const cardComponentlarge223Data = {
    imagePlaceholder: "/img/mobile-small-image-placeholder-F9565413-963D-4026-85AB-20640D1D9729.jpg",
    wangechi: "Wangechi",
    kenyanBasedSinger: "Kenya based rapper/singer",
    className: "card-component-custom-6",
};

const cardComponentlarge224Data = {
    imagePlaceholder: "/img/home-1024-image-placeholder-EB577D8D-A22F-45BB-81E2-DD74642946E0.jpg",
    wangechi: "Los de Abajo",
    kenyanBasedSinger: "Eclectic Vibes from Mexico City",
    className: "card-component-custom-6",
};

const cardComponentlarge225Data = {
    imagePlaceholder: "/img/home-1024-image-placeholder-5BFB9654-0064-4C09-BE36-F1192AD2CCE4.jpg",
    wangechi: "Charles Pierre",
    kenyanBasedSinger: "Producer/Remixer",
    className: "card-component-custom-6",
};

const cardComponentlarge226Data = {
    imagePlaceholder: "/img/tablet-small-image-placeholder-B5A9F666-3904-4F47-85D8-8D5DE3BE5AB1.jpg",
    wangechi: "DJ Zinc",
    kenyanBasedSinger: "Brit Producer/DJ",
    className: "card-component-custom-6",
};

const cardComponentlarge227Data = {
    imagePlaceholder: "/img/mobile-small-image-placeholder-9B673EE9-CF00-4CEC-9FF1-B1E07A9DE395.jpg",
    wangechi: "Kevin Locke",
    kenyanBasedSinger: "Lakota Traditional",
    className: "card-component-custom-6",
};

const bottomRow31Data = {
    cardComponentlarge221Props: cardComponentlarge225Data,
    cardComponentlarge222Props: cardComponentlarge226Data,
    cardComponentlarge223Props: cardComponentlarge227Data,
};

const logotypeMainCopy3x3Data = {
    rectangle1: "/img/tablet-small-rectangle-04BBF9BE-DA4A-4CE8-BB03-65EE356471B1@2x.png",
    rectangle2: "/img/mobile-small-rectangle-76E58978-6E4B-4A1E-878D-0F9FDB3FB971@2x.png",
    path2: "/img/tablet-small-path-948A0254-70EC-45B2-98EB-D67F66CEC096@2x.png",
    shape2: "/img/mobile-small-shape-FFA96AFF-8AF2-47AA-825D-B04F259353B4@2x.png",
    shape3: "/img/tablet-small-shape-6254F922-DB55-4588-BFA0-02FB557DEFE2@2x.png",
    className: "logotype_-main-1",
};

const homeTablet768pxData = {
    footer: "© mixmi 2022",
    remixCultureTitle: <React.Fragment>REMIX CULTURE <br />POWERED BY WEB 3</React.Fragment>,
    exploreLoopsAndSa: "explore loops and samples from everywhere",
    buttonPrimary40pxProps: buttonPrimary40px3Data,
    cardComponentlarge221Props: cardComponentlarge222Data,
    cardComponentlarge222Props: cardComponentlarge223Data,
    cardComponentlarge223Props: cardComponentlarge224Data,
    bottomRow3Props: bottomRow31Data,
    logotypeMainCopy3xProps: logotypeMainCopy3x3Data,
};

const buttonPrimary40px4Data = {
    children: "GET MIXED",
    className: "button-primary-40px-1",
};

const titlesNOverlay11Data = {
    title: "Lunar Drive",
    kenyanBasedSinger: "Native American infused pop",
    className: "",
};

const cardComponentlarge11Data = {
    cardComponentCustom: "/img/home-1024-image-placeholder-232E9ADC-DAFC-4F58-9BF3-742B142FFF1C.jpg",
    className: "card-component-custom-2",
    titlesNOverlayProps: titlesNOverlay11Data,
};

const titlesNOverlay12Data = {
    title: "Wangechi",
    kenyanBasedSinger: "Kenyan based singer/songwriter/rapper",
    className: "titles-n-overlay-2",
};

const cardComponentlarge12Data = {
    cardComponentCustom: "/img/mobile-small-image-placeholder-F9565413-963D-4026-85AB-20640D1D9729.jpg",
    className: "card-component-custom-2",
    titlesNOverlayProps: titlesNOverlay12Data,
};

const titlesNOverlay13Data = {
    title: "Los de Abajo",
    kenyanBasedSinger: "Eclectic Vibes from Mexico City",
    className: "",
};

const cardComponentlarge13Data = {
    cardComponentCustom: "/img/home-1024-image-placeholder-EB577D8D-A22F-45BB-81E2-DD74642946E0.jpg",
    className: "card-component-custom-2",
    titlesNOverlayProps: titlesNOverlay13Data,
};

const titlesNOverlay14Data = {
    title: "DJ Zinc",
    kenyanBasedSinger: "Brit Producer/DJ",
    className: "",
};

const cardComponentlarge14Data = {
    cardComponentCustom: "/img/tablet-small-image-placeholder-B5A9F666-3904-4F47-85D8-8D5DE3BE5AB1.jpg",
    className: "card-component-custom-2",
    titlesNOverlayProps: titlesNOverlay14Data,
};

const titlesNOverlay15Data = {
    title: "Kevin Locke",
    kenyanBasedSinger: "Lakota Traditional",
    className: "",
};

const cardComponentlarge15Data = {
    cardComponentCustom: "/img/mobile-small-image-placeholder-9B673EE9-CF00-4CEC-9FF1-B1E07A9DE395.jpg",
    className: "card-component-custom-2",
    titlesNOverlayProps: titlesNOverlay15Data,
};

const bottomRow2Data = {
    cardComponentlarge1Props: cardComponentlarge14Data,
    cardComponentlarge2Props: cardComponentlarge15Data,
};

const contentGridData = {
    cardComponentlarge1Props: cardComponentlarge11Data,
    cardComponentlarge2Props: cardComponentlarge12Data,
    cardComponentlarge3Props: cardComponentlarge13Data,
    cardComponentlarge1Props2: bottomRow2Data,
};

const logotypeMainCopy3x4Data = {
    rectangle1: "/img/home-1024-rectangle-6748661D-4DAB-494B-8F37-AF4710860B65@2x.png",
    rectangle2: "/img/home-1024-rectangle-0FCE00FD-FBAE-4C0B-9368-43F62E42D9A4@2x.png",
    path2: "/img/home-1024-path-F9DB845A-C419-4D51-B2D0-58E770EAA4FD@2x.png",
    shape2: "/img/home-1024-shape-6AC4F073-7226-438B-8336-D9861ACB5FBE@2x.png",
    shape3: "/img/home-1024-shape-F71E5CC9-8EB5-45E2-BB50-59C16224E0DA@2x.png",
    className: "logotype_-main-2",
};

const logoAndSearchData = {
    logotypeMainCopy3xProps: logotypeMainCopy3x4Data,
};

const menuLinkNewdesktop64px1Data = {
    children: "ABOUT",
};

const menuLinkNewdesktop64px2Data = {
    children: "CONTACT",
    className: "menu-link-new-copy-3-1",
};

const buttonPrimaryMediumDefaultData = {
    children: "Connect Stacks Wallet",
};

const iconMenu1Data = {
    src: "/img/home-1024-fill-3F01F543-EFB9-4AFA-BB2D-F305119FE2B7@2x.png",
};

const home1024Data = {
    footer: "© mixmi 2022",
    buttonPrimary40pxProps: buttonPrimary40px4Data,
    contentGridProps: contentGridData,
    logoAndSearchProps: logoAndSearchData,
    menuLinkNewdesktop64px1Props: menuLinkNewdesktop64px1Data,
    menuLinkNewdesktop64px2Props: menuLinkNewdesktop64px2Data,
    buttonPrimaryMediumDefaultProps: buttonPrimaryMediumDefaultData,
    iconMenuProps: iconMenu1Data,
};

const buttonPrimary40px5Data = {
    children: "GET MIXED",
    className: "button-primary-large-default-2",
};

const titlesNOverlay16Data = {
    title: "Wangechi",
    kenyanBasedSinger: "Kenyan based singer/songwriter/rapper",
    className: "titles-n-overlay-3",
};

const cardComponentlarge16Data = {
    cardComponentCustom: "/img/mobile-small-image-placeholder-F9565413-963D-4026-85AB-20640D1D9729.jpg",
    className: "card-component-custom-3",
    titlesNOverlayProps: titlesNOverlay16Data,
};

const titlesNOverlay17Data = {
    title: "Lunar Drive",
    kenyanBasedSinger: "Native American infused pop",
    className: "",
};

const cardComponentlarge17Data = {
    cardComponentCustom: "/img/home-1024-image-placeholder-232E9ADC-DAFC-4F58-9BF3-742B142FFF1C.jpg",
    className: "card-component-custom-3",
    titlesNOverlayProps: titlesNOverlay17Data,
};

const titlesNOverlay18Data = {
    title: "Los de Abajo",
    kenyanBasedSinger: "Eclectic Vibes from Mexico City",
    className: "",
};

const cardComponentlarge18Data = {
    cardComponentCustom: "/img/home-1024-image-placeholder-EB577D8D-A22F-45BB-81E2-DD74642946E0.jpg",
    className: "card-component-custom-3",
    titlesNOverlayProps: titlesNOverlay18Data,
};

const cardComponentlarge25Data = {
    className: "card-component-custom-copy-3",
};

const titlesNOverlay19Data = {
    title: "DJ Zinc",
    kenyanBasedSinger: "Brit Producer/DJ",
    className: "",
};

const cardComponentlarge19Data = {
    cardComponentCustom: "/img/tablet-small-image-placeholder-B5A9F666-3904-4F47-85D8-8D5DE3BE5AB1.jpg",
    className: "card-component-custom-3",
    titlesNOverlayProps: titlesNOverlay19Data,
};

const titlesNOverlay20Data = {
    title: "Kevin Locke",
    kenyanBasedSinger: "Lakota Traditional",
    className: "",
};

const cardComponentlarge20Data = {
    cardComponentCustom: "/img/mobile-small-image-placeholder-9B673EE9-CF00-4CEC-9FF1-B1E07A9DE395.jpg",
    className: "card-component-custom-3",
    titlesNOverlayProps: titlesNOverlay20Data,
};

const bottomColumn2Data = {
    cardComponentlarge2Props: cardComponentlarge25Data,
    cardComponentlarge1Props: cardComponentlarge19Data,
    cardComponentlarge2Props2: cardComponentlarge20Data,
};

const contentGrid2Data = {
    cardComponentlarge1Props: cardComponentlarge16Data,
    cardComponentlarge2Props: cardComponentlarge17Data,
    cardComponentlarge3Props: cardComponentlarge18Data,
    cardComponentlarge3Props2: bottomColumn2Data,
};

const logotypeMainCopy3x5Data = {
    rectangle1: "/img/tablet-small-rectangle-04BBF9BE-DA4A-4CE8-BB03-65EE356471B1@2x.png",
    rectangle2: "/img/mobile-small-rectangle-76E58978-6E4B-4A1E-878D-0F9FDB3FB971@2x.png",
    path2: "/img/tablet-small-path-948A0254-70EC-45B2-98EB-D67F66CEC096@2x.png",
    shape2: "/img/mobile-small-shape-FFA96AFF-8AF2-47AA-825D-B04F259353B4@2x.png",
    shape3: "/img/tablet-small-shape-6254F922-DB55-4588-BFA0-02FB557DEFE2@2x.png",
    className: "logotype_-main-copy3x-copy-1",
};

const iconMenu2Data = {
    src: "/img/tablet-small-fill-9BCD749D-1A5C-463C-8560-A0A76F9ABEE7@2x.png",
    className: "icon-menu-1",
};

const mobileSmallData = {
    footer: "© mixmi 2022",
    connectTextCopy: <React.Fragment>REMIX CULTURE <br />POWERED BY WEB 3</React.Fragment>,
    exploreLoopsAndSa: "explore loops and samples from everywhere",
    buttonPrimary40pxProps: buttonPrimary40px5Data,
    contentGrid2Props: contentGrid2Data,
    logotypeMainCopy3xProps: logotypeMainCopy3x5Data,
    iconMenuProps: iconMenu2Data,
};

const buttonPrimary40px6Data = {
    children: "GET MIXED",
    className: "button-primary-large-default-3",
};

const cardComponentlarge228Data = {
    imagePlaceholder: "/img/home-1024-image-placeholder-232E9ADC-DAFC-4F58-9BF3-742B142FFF1C.jpg",
    wangechi: "Lunar Drive",
    kenyanBasedSinger: "Native American infused pop",
    className: "card-component-custom-7-1",
};

const cardComponentlarge229Data = {
    imagePlaceholder: "/img/mobile-small-image-placeholder-F9565413-963D-4026-85AB-20640D1D9729.jpg",
    wangechi: "Wangechi",
    kenyanBasedSinger: "Kenyan based singer/songwriter/rapper",
    className: "card-component-custom-7",
};

const cardComponentlarge2210Data = {
    imagePlaceholder: "/img/home-1024-image-placeholder-EB577D8D-A22F-45BB-81E2-DD74642946E0.jpg",
    wangechi: "Los de Abajo",
    kenyanBasedSinger: "Eclectic Vibes from Mexico City",
    className: "card-component-custom-7-1",
};

const topRowData = {
    cardComponentlarge221Props: cardComponentlarge228Data,
    cardComponentlarge222Props: cardComponentlarge229Data,
    cardComponentlarge223Props: cardComponentlarge2210Data,
};

const cardComponentlarge2211Data = {
    imagePlaceholder: "/img/home-1024-image-placeholder-5BFB9654-0064-4C09-BE36-F1192AD2CCE4.jpg",
    wangechi: "Charles Pierre",
    kenyanBasedSinger: "Producer/Remixer",
    className: "card-component-custom-7-1",
};

const cardComponentlarge2212Data = {
    imagePlaceholder: "/img/tablet-small-image-placeholder-B5A9F666-3904-4F47-85D8-8D5DE3BE5AB1.jpg",
    wangechi: "DJ Zinc",
    kenyanBasedSinger: "Brit Producer/DJ",
    className: "card-component-custom-7-1",
};

const cardComponentlarge2213Data = {
    imagePlaceholder: "/img/mobile-small-image-placeholder-9B673EE9-CF00-4CEC-9FF1-B1E07A9DE395.jpg",
    wangechi: "Kevin Locke",
    kenyanBasedSinger: "Lakota Traditional",
    className: "card-component-custom-7-1",
};

const bottomRow32Data = {
    cardComponentlarge221Props: cardComponentlarge2211Data,
    cardComponentlarge222Props: cardComponentlarge2212Data,
    cardComponentlarge223Props: cardComponentlarge2213Data,
};

const contentGrid3Data = {
    cardComponentlarge221Props: topRowData,
    cardComponentlarge221Props2: bottomRow32Data,
};

const allContent2Data = {
    buttonPrimary40pxProps: buttonPrimary40px6Data,
    cardComponentlarge221Props: contentGrid3Data,
};

const logotypeMainCopy3x6Data = {
    rectangle1: "/img/tablet-small-rectangle-04BBF9BE-DA4A-4CE8-BB03-65EE356471B1@2x.png",
    rectangle2: "/img/mobile-small-rectangle-76E58978-6E4B-4A1E-878D-0F9FDB3FB971@2x.png",
    path2: "/img/tablet-small-path-948A0254-70EC-45B2-98EB-D67F66CEC096@2x.png",
    shape2: "/img/mobile-small-shape-FFA96AFF-8AF2-47AA-825D-B04F259353B4@2x.png",
    shape3: "/img/tablet-small-shape-6254F922-DB55-4588-BFA0-02FB557DEFE2@2x.png",
    className: "logotype_-main-3",
};

const fieldsAndInputsSearch2Data = {
    className: "fields-and-inputs-search-1",
};

const iconMenu3Data = {
    src: "/img/home-1024-fill-3F01F543-EFB9-4AFA-BB2D-F305119FE2B7@2x.png",
    className: "icon-menu-2",
};

const tabletSmallData = {
    allContent2Props: allContent2Data,
    logotypeMainCopy3xProps: logotypeMainCopy3x6Data,
    fieldsAndInputsSearchProps: fieldsAndInputsSearch2Data,
    iconMenuProps: iconMenu3Data,
};

const navigationMenuBarVerticalStateActiv1Data = {
    children: "About",
};

const navigationMenuBarVerticalStateActiv2Data = {
    children: "Contact",
    className: "items-1-copy",
};

const smallData = {
    navigationMenuBarVerticalStateActiv1Props: navigationMenuBarVerticalStateActiv1Data,
    navigationMenuBarVerticalStateActiv2Props: navigationMenuBarVerticalStateActiv2Data,
};

