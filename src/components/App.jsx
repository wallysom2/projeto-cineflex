import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./MovieList";

import "./../assets/css/reset.css";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MovieList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

