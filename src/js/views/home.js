import React from "react";
import "../../styles/home.css";
import Characters from "../component/characters";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";

export const Home = () => (
	<div className="mt-4 ms-4">
		<Characters/>
		<Planets/>
		<Vehicles/>
	</div>
);
