import "./App.css";
import Score from "./Score.js";
import Scoretable from "./Scoretable";

function App() {
	return (
		<div className="App">
			<Scoretable result={ Score}/>
		</div>
	);
}

export default App;
