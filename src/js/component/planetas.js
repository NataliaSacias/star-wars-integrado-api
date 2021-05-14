import React, { useContext } from "react";
import Card from "./card";
import { Context } from "../store/appContext";
import Detalle from "../views/vistaDetallePersonajes";

const planetas = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1 className="my-5 text-warning">Planetas</h1>
			<div className="scroll card-deck">
				{store.planetas.map((planeta, i) => {
					return <Card key={i} name={planeta.name} index={i} tipo={"planeta"} />;
				})}
			</div>
		</div>
	);
};

export default planetas;
