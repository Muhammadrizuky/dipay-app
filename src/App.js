import "./App.css";
import "./assets/css/content.css"
import Route from "./routes"
import { BrowserRouter as Router } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import background from "./assets/img/background.png"

function App() {
  return (
		<div className="App">
			<div className="backgroung-image" style={{backgroundImage: `url(${background})`}}>
				<Router>
					<Route />
				</Router>
			</div>
		</div>
	)
}

export default App;
