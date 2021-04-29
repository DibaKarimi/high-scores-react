/* eslint-disable indent, linebreak-style */
import React, { useState } from "react";
import "./App.css";
import Score from "./Score.js";
import HighScoreTable from "./HighScoreTable";

function App() {
  const [sort, setSort] = useState("ascending");
  const changeSortType = () => {
    setSort(sort === "ascending" ? "descending" : "ascending");
  };
  return (
    <div className="App">
      <button className="btn btn-primary m-5" onClick={changeSortType}>{sort}</button>
		  <HighScoreTable result={Score} typeOfSort={sort}/>
    </div>
  );
}

export default App;
