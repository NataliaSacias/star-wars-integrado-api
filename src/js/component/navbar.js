import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.jpg";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-5">
			<nav className="navbar navbar-light bg-light mb-3 navbar-default fixed-top">
				{/* <div className="container"> */}
				<Link to="/">
					<img
						// src="https://i.pinimg.com/originals/30/6f/f9/306ff98466757b3a21f34283c4217eeb.jpg"
						src={logo}
						width="120"
						height="80"
					/>
					{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
				</Link>
				{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
				<span className="titulo">Que la Fuerza te acompañe</span>
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						{store.favoritos == 0 ? `No hay favoritos` : `Favoritos ${store.favoritos.length}`}
					</button>
					<div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuButton">
						{store.favoritos.map((favorito, i) => {
							return (
								<li key={i} className="d-flex justify-content-between">
									{favorito}
									<i
										onClick={() => {
											actions.eliminarFavorito(i);
										}}
										className="fas fa-trash-alt"
									/>
								</li>
							);
						})}
					</div>
				</div>
				{/* </div> */}
			</nav>
		</div>
	);
};
