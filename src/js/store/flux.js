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

			item: '',
			description: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			fetchDescription: (e) => {
				fetch(e)
				.then((result) => {
					result.json()
				})
				.then((data) => {
					setStore({
						favorites: getStore().favorites,
						item: getStore().item,
						description: data.result.properties
					})
				})
			},

			setItem: (e) => {
				setStore({
					favorites:getStore().favorites,
					item: e,
					description: getStore().description
				})	
			},

			addFavorite: (e) => {
				setStore({
					favorites:[...getStore().favorites, e],
					item: getStore().item,
					description: getStore().description
				})	
			},

			removeFavorites: (e) => {
				setStore({
					favorites:getStore().favorites.filter((x) =>{
						return x != e
					}),
					item: getStore().item,
					description: getStore().description
				})
			},
        /////////////////////
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
