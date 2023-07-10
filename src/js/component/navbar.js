import React from "react";
import { Link } from "react-router-dom";
import Favorites from "./favelist";
import InputBar from "./inputbar";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" className="ms-4">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>

			<div className="border-primary">
				<InputBar/>
			</div>

			<div className="ml-auto">
				<a class="nav-link dropdown-toggle btn-primary text-light rounded me-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</a>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
				
			</div>
		</nav>
	);
};
