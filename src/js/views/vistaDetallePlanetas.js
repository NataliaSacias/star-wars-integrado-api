import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaDetallePlanetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const id = parseInt(params.uid) + 1; //id es uid -1
	useEffect(() => {
		actions.getDetallePersonajes(params.uid);
	}, []);
	return (
		<div className="container">
			<div className="card my-3 text-white bg-light">
				<div className="row no-gutters">
					<div className="col-md-5 d-flex justify-content-center">
						<img
							src={`https://starwars-visualguide.com/assets/img/planets/${id}
							.jpg`}
							alt="..."
						/>
					</div>
					<div className="col-md-7">
						<div className="card-body">
							<h2 className="card-title">{store.detallePlanetas.name}</h2>
							{/* <hr className="my-4" />
							<p className="card-text">This is a wider card with supporting text below</p>
							<hr className="my-4" /> */}
							<p>{`Diameter: ${store.detallePlanetas.diameter} cm`}</p>
							<p>{`Rotation period: ${store.detallePlanetas.rotation_period} grs`}</p>
							<p>{`Orbital period: ${store.detallePlanetas.orbital_period}`}</p>
							<p>{`Gravity: ${store.detallePlanetas.gravity}`}</p>
							<p>{`Population: ${store.detallePlanetas.population}`}</p>
							<p>{`Climate: ${store.detallePlanetas.climate}`}</p>
							<p>{`Terrain: ${store.detallePlanetas.terrain}`}</p>
							<p>{`Surface water: ${store.detallePlanetas.surface_water}`}</p>
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

VistaDetallePlanetas.propTypes = {
	match: PropTypes.object
	// name: PropTypes.string,
	// index: PropTypes.string
};
