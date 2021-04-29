/* eslint-disable indent, linebreak-style */
import React from "react";
import "./App.css";
import PlayerScore from "./PlayerScore";
import NameOfCountry from "./NameOfCountry";

const ScoreTable = (props) => {
  const myData = []
    .concat(props.result)
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <div className="container w-50 border border-info">
      <h1 className="text-info">High Scores Per Country</h1>
      <div className="d-flex flex-column ">
        {myData.map((score,key) => {
          return (
            <div key={key} className="cell  p-3 my-3  mx-auto">
              <NameOfCountry country={score.name} />
              <PlayerScore
                players={score.scores}
                typeOfSort={props.typeOfSort}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreTable;
