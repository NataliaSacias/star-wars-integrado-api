import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = props => {
	const { store, actions } = useContext(Context);
	let uid = parseInt(store.personajes[props.index].uid);
	// let uid2 = store.personajes[props.index + 1].uid;
	return (
		<div className="card cardPersonaje">
			<img
				src={
					props.tipo == "personaje"
						? `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`
						: `https://starwars-visualguide.com/assets/img/planets/${uid + 1}.jpg`
				}
				className="card-img-top"
				alt="imagen no disponible"
				width="20px"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text" />
				<div className="d-flex justify-content-between">
					<Link to={props.tipo == "personaje" ? "/detallePersonajes/" + uid : "/detallePlanetas/" + uid}>
						<button type="button" className="btn btn-outline-secondary">
							Características
						</button>
					</Link>
					<button
						disabled={store.favoritos.includes(props.name)}
						type="button"
						className="btn btn-outline-danger"
						onClick={() => {
							actions.agregarFavorito(props.name);
						}}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	index: PropTypes.number,
	tipo: PropTypes.string
};
export default Card;
