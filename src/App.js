import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleMovie from "./pages/SingleMovie";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/movie/:id"
					element={<SingleMovie />}
				/>
			</Routes>
		</div>
	);
}

export default App;
