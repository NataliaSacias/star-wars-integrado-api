import React, { useContext } from "react";
import Card from "./card";
import { Context } from "../store/appContext";
import Detalle from "../views/vistaDetallePersonajes";

const personajes = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1 className="mb-5 text-warning">Personajes</h1>
			<div className="scroll card-deck">
				{store.personajes.map((personaje, i) => {
					return <Card key={i} name={personaje.name} index={i} tipo={"personaje"} />;
				})}
			</div>
		</div>
	);
};

export default personajes;
