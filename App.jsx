import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomeDesktop1024px from "./components/HomeDesktop1024px";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|homedesktop1024px)">
          <HomeDesktop1024px
            footer="© mixmi 2022"
            remixCultureTitle={
              <React.Fragment>
                REMIX CULTURE <br />
                POWERED BY WEB 3
              </React.Fragment>
            }
            exploreLoopsAndSa="explore loops and samples from everywhere"
            buttonPrimary40pxProps={homeDesktop1024pxData.buttonPrimary40pxProps}
            contentGridProps={homeDesktop1024pxData.contentGridProps}
            logotypeMainCopy3xProps={homeDesktop1024pxData.logotypeMainCopy3xProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const buttonPrimary40pxData = {
    children: "ABOUT + CONTACT",
};

const titlesNOverlay1Data = {
    title: "Lunar Drive",
    kenyanBasedSinger: "Native American infused pop",
};

const cardComponentlarge1Data = {
    cardComponentCustom: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f738a2bd749d8c6a9eb2f4/img/home-1024-image-placeholder-232E9ADC-DAFC-4F58-9BF3-742B142FFF1C.jpg",
    titlesNOverlayProps: titlesNOverlay1Data,
};

const titlesNOverlay2Data = {
    title: "Wangechi",
    kenyanBasedSinger: "Kenya based rapper/singer",
};

const cardComponentlarge2Data = {
    cardComponentCustom: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f738a2bd749d8c6a9eb2f4/img/mobile-small-image-placeholder-F9565413-963D-4026-85AB-20640D1D9729.jpg",
    className: "card-component-custom",
    titlesNOverlayProps: titlesNOverlay2Data,
};

const titlesNOverlay3Data = {
    title: "Los de Abajo",
    kenyanBasedSinger: "Eclectic Vibes from Mexico City",
};

const cardComponentlarge3Data = {
    cardComponentCustom: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f738a2bd749d8c6a9eb2f4/img/home-1024-image-placeholder-EB577D8D-A22F-45BB-81E2-DD74642946E0.jpg",
    className: "card-component-custom",
    titlesNOverlayProps: titlesNOverlay3Data,
};

const titlesNOverlay4Data = {
    title: "DJ Zinc",
    kenyanBasedSinger: "Brit Producer/DJ",
};

const cardComponentlarge4Data = {
    cardComponentCustom: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f738a2bd749d8c6a9eb2f4/img/tablet-small-image-placeholder-B5A9F666-3904-4F47-85D8-8D5DE3BE5AB1.jpg",
    className: "card-component-custom",
    titlesNOverlayProps: titlesNOverlay4Data,
};

const titlesNOverlay5Data = {
    title: "Kevin Locke",
    kenyanBasedSinger: "Lakota Traditional",
};

const cardComponentlarge5Data = {
    cardComponentCustom: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f738a2bd749d8c6a9eb2f4/img/mobile-small-image-placeholder-9B673EE9-CF00-4CEC-9FF1-B1E07A9DE395.jpg",
    className: "card-component-custom",
    titlesNOverlayProps: titlesNOverlay5Data,
};

const contentGridData = {
    cardComponentlarge1Props: cardComponentlarge1Data,
    cardComponentlarge2Props: cardComponentlarge2Data,
    cardComponentlarge3Props: cardComponentlarge3Data,
    cardComponentlarge4Props: cardComponentlarge4Data,
    cardComponentlarge5Props: cardComponentlarge5Data,
};

const logotypeMainCopy3xData = {
    rectangle1: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f82b93f3486458d6da2296/img/home-1024-rectangle-6748661D-4DAB-494B-8F37-AF4710860B65@2x.png",
    rectangle2: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f82b93f3486458d6da2296/img/home-1024-rectangle-0FCE00FD-FBAE-4C0B-9368-43F62E42D9A4@2x.png",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f82b93f3486458d6da2296/img/home-1024-path-F9DB845A-C419-4D51-B2D0-58E770EAA4FD@2x.png",
    shape2: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f82b93f3486458d6da2296/img/home-1024-shape-6AC4F073-7226-438B-8336-D9861ACB5FBE@2x.png",
    shape3: "https://anima-uploads.s3.amazonaws.com/projects/62f73889f3486458d6da1f0a/releases/62f82b93f3486458d6da2296/img/home-1024-shape-F71E5CC9-8EB5-45E2-BB50-59C16224E0DA@2x.png",
};

const homeDesktop1024pxData = {
    buttonPrimary40pxProps: buttonPrimary40pxData,
    contentGridProps: contentGridData,
    logotypeMainCopy3xProps: logotypeMainCopy3xData,
};

