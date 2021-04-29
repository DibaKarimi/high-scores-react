/* eslint-disable indent, linebreak-style */
import React from "react";
import "./App.css";

const NameOfCountry = (props) => {
  return (
    <h3 className="text-info">
      <span>HIGH SCORES :</span>
      {props.country}
    </h3>
  );
};
export default NameOfCountry;
