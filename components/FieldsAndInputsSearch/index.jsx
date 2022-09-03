import React from "react";
import "./FieldsAndInputsSearch.css";

function FieldsAndInputsSearch(props) {
  const { className } = props;

  return (
    <div className={`fields-and-inputs-search ${className || ""}`}>
      <div className="search-container border-0-5px-granite-gray">
        <img className="icon-search" src="/img/tablet-small-fill-5FAE4CE9-9E62-48B8-8090-8585BCB04713@2x.png" />
        <p className="search-for-samples inter-normal-white-14px">Search for samples, NFTs or profiles</p>
      </div>
    </div>
  );
}

export default FieldsAndInputsSearch;
