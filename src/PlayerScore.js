/* eslint-disable indent, linebreak-style */
import React from "react";
import "./App.css";
import Player from "./Player";

const PlayerScore = (props) => {
  const sort = props.typeOfSort;
  let myData;
  if (sort === "ascending") {
    myData = [].concat(props.players).sort((a, b) => (a.s < b.s ? 1 : -1));
  } else {
    myData = [].concat(props.players).sort((a, b) => (a.s > b.s ? 1 : -1));
  }
  return (
    <div className="table-responsive w-100 border border-dark mx-auto">
      <table className="table p-2 mx-auto">
        <tbody>
          {myData.map((player, index) => {
            return (
              < Player index={index} player1={player} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerScore;
