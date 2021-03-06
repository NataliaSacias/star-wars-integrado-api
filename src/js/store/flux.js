const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
			favoritos: [],
			detallePersonajes: [],
			detallePlanetas: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/people");
					const data = await res.json();
					//console.log("async", data);

					setStore({ personajes: data.results });
				} catch (error) {
					//console.log(error);
				}

				try {
					const res = await fetch("https://www.swapi.tech/api/planets");
					const data = await res.json();
					//console.log("async", data);
					setStore({ planetas: data.results });
				} catch (error) {
					//console.log(error);
				}
			},

			getDetallePersonajes: async uid => {
				try {
					const store = getStore();
					const res = await fetch("https://www.swapi.tech/api/people/" + uid);
					const data = await res.json();
					setStore({
						detallePersonajes: data.result.properties
					});
					console.log(data.result.properties);
				} catch (error) {}

				try {
					const res = await fetch("https://www.swapi.tech/api/planets/" + uid);
					const data = await res.json();
					setStore({ detallePlanetas: data.result.properties });
				} catch (error) {}
			},

			agregarFavorito: nuevoFavorito => {
				const store = getStore();
				let newArryFavorite = [...store.favoritos, nuevoFavorito];
				setStore({ favoritos: newArryFavorite });
			},

			eliminarFavorito: indice => {
				const store = getStore();
				let noEliminados = store.favoritos.filter((fav, index) => {
					if (indice != index) return fav;
				});
				setStore({ favoritos: noEliminados });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
