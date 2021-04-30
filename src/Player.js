/* eslint-disable indent, linebreak-style */
import React from "react";

const Player = (props) => {
    return (
      <tr key={props.index}>
        <td>{props.player1.n}</td>
        <td className="text-danger">{props.player1.s}</td>
      </tr>
    );
};

export default Player;