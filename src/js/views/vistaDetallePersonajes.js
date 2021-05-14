import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import { VistaDetallePersonajes } from "./vistaDetallePlanetas";

export const VistaDetallePersonajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const id = parseInt(params.uid) - 1; //id es uid -1
	useEffect(() => {
		actions.getDetallePersonajes(params.uid);
	}, []);
	return (
		<div className="container">
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-5 d-flex justify-content-center">
						<img
							src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}
							.jpg`}
							alt="..."
						/>
					</div>
					<div className="col-md-7">
						<div className="card-body">
							<h2 className="card-title">{store.detallePersonajes.name}</h2>
							<hr className="my-4" />
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<hr className="my-4" />
							<p>{`Height: ${store.detallePersonajes.height} cm`}</p>
							<p>{`Mass: ${store.detallePersonajes.mass} grs`}</p>
							<p>{`Hair color: ${store.detallePersonajes.hair_color}`}</p>
							<p>{`Skin color: ${store.detallePersonajes.skin_color}`}</p>
							<p>{`Eye color: ${store.detallePersonajes.eye_color}`}</p>
							<p>{`Birth year: ${store.detallePersonajes.birth_year}`}</p>
							<p>{`Gender: ${store.detallePersonajes.gender}`}</p>
						</div>
					</div>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

VistaDetallePersonajes.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string,
	index: PropTypes.string
};
