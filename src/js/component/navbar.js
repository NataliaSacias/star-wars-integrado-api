import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					src="https://i.pinimg.com/originals/30/6f/f9/306ff98466757b3a21f34283c4217eeb.jpg"
					width="80"
					height="60"
				/>
				{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
