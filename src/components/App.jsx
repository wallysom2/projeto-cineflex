import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./MovieList";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Success from "./Success";


import "./../assets/css/reset.css";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MovieList />} />
				<Route path="/sessoes/:idFilme" element={<Sessions />} />
				<Route path="/session/:idSession" element={<Seats />} />
				<Route path="/success" element={<Success />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

