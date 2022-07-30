import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./MovieList";
import Sessions from "./Sessions";


import "./../assets/css/reset.css";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MovieList />} />
				<Route path="/sessoes/:idFilme" element={<Sessions />} /> 
			</Routes>
		</BrowserRouter>
	);
}

export default App;

