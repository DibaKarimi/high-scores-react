/* eslint-disable indent, linebreak-style */
import React from "react";
import "./App.css";
const Scoretable = (probs) => {
  const myData = []
    .concat(probs.result)
    .sort((a, b) => (a.name > b.name ? 1 : -1));
  console.log(myData);
  return (
    <div className="container w-50 border border-info">
      <h1 className="text-info">High Scores Per Country</h1>
      <div className="d-flex flex-column ">
        {myData.map((Score,key) => {
          return (
            <div key={key} className="cell  p-3 my-3  mx-auto">
              <h3 className="text-info">
                <span>HIGH SCORES :</span>
                {Score.name}
              </h3>
              <div className="table-responsive w-100 border border-dark mx-auto">
                <table className="table p-2 mx-auto">
                  <tbody>
                    {Score.scores.map((info, index) => {
                      return (
                        <tr key={index}>
                          <td>{info.n}</td>
                          <td className="text-danger">{info.s}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scoretable;
