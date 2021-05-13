import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					src="https://i.pinimg.com/originals/30/6f/f9/306ff98466757b3a21f34283c4217eeb.jpg"
					width="100"
					height="80"
				/>
				{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
			</Link>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
			<span>Que la Fuerza te acompañe</span>
			<div className="dropdown pull-left">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favoritos
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favoritos.map((favorito, i) => {
						return (
							<li key={i}>
								{favorito}
								<button
									onClick={() => {
										actions.eliminarFavorito(i);
									}}
									type="button"
									className="btn btn-outline-danger">
									<i className="fas fa-trash-alt" />
								</button>
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
