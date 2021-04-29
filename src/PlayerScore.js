/* eslint-disable indent, linebreak-style */
import React from "react";
import "./App.css";

const PlayerScore = (props) => {
  const sort = props.typeOfSort;
  console.log(sort);
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
              <tr key={index}>
                <td>{player.n}</td>
                <td className="text-danger">{player.s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerScore;
