import React from "react";
import ReactDOM from "react-dom/client";
import Pokedex from "./App.tsx";
import "./assets/global.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Pokedex />
	</React.StrictMode>
);
