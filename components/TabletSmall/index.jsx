import React from "react";
import AllContent2 from "../AllContent2";
import LogotypeMainCopy3x from "../LogotypeMainCopy3x";
import FieldsAndInputsSearch from "../FieldsAndInputsSearch";
import IconMenu from "../IconMenu";
import "./TabletSmall.css";

function TabletSmall(props) {
  const { footer, allContent2Props, logotypeMainCopy3xProps, fieldsAndInputsSearchProps, iconMenuProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tabletsmall screen">
        <div className="footer-5 helvetica-normal-white-11px">{footer}</div>
        <AllContent2
          buttonPrimary40pxProps={allContent2Props.buttonPrimary40pxProps}
          cardComponentlarge221Props={allContent2Props.cardComponentlarge221Props}
        />
        <div className="nav-bar-tablet-1">
          <div className="logo-and-search-1">
            <LogotypeMainCopy3x
              rectangle1={logotypeMainCopy3xProps.rectangle1}
              rectangle2={logotypeMainCopy3xProps.rectangle2}
              path2={logotypeMainCopy3xProps.path2}
              shape2={logotypeMainCopy3xProps.shape2}
              shape3={logotypeMainCopy3xProps.shape3}
              className={logotypeMainCopy3xProps.className}
            />
            <FieldsAndInputsSearch className={fieldsAndInputsSearchProps.className} />
          </div>
        </div>
        <IconMenu src={iconMenuProps.src} className={iconMenuProps.className} />
      </div>
    </div>
  );
}

export default TabletSmall;
