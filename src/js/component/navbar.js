import React,{useContext} from "react";
import { Link } from "react-router-dom";
import Favorites from "./favelist";
import InputBar from "./inputbar";
import { Context } from "../store/appContext";



export const Navbar = () => {
	    const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" className="ms-4">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>

			<div className="border-primary">
				<InputBar/>
			</div>

			<div className="ml-auto">
				<button class="nav-link dropdown-toggle btn btn-primary text-light rounded me-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul class="dropdown-menu dropdown-menu-end">
					{store.favorites.map((item) => {
						return <li><a class="dropdown-item d-flex justify-content-between align-items-center" href="#">{item} <span className="ms-2" onClick={() => actions.removeFavorites(item) } class="fa fa-trash-alt"></span></a></li>
									
					})}

				</ul>
				
			</div>
		</nav>
	);
};
