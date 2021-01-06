const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: null
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			loadInitialData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/James")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ agenda: jsonifiedResponse }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			addContact: (fullname, address, email, phone, id) => {
				let store = getStore();
				if (agenda) {
					var updatedAgenda = store.agenda.concat({
						id: id,
						full_name: fullname,
						email: email,
						phone: phone,
						address: address
					});
					setStore({ agenda: updatedAgenda });
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/James", {
						method: "PUT", // or 'POST'
						body: JSON.stringify(updatedAgenda), // data can be `string` or {object}!
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(res => res.json())
						.then(response => console.log("Success:", JSON.stringify(response)))
						.catch(error => console.error("Error:", error));
				}
			},

			onDelete: index => {
				let store = getStore();
				let updatedAgenda = store.agenda;
				updatedAgenda.splice(index, 1);
				setStore({ agenda: updatedAgenda });
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/James", {
					method: "PUT", // or 'POST'
					body: JSON.stringify(updatedAgenda), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("Success:", JSON.stringify(response)))
					.catch(error => console.error("Error:", error));
			}

			/*saveContact: ind => {
				let store = getStore();
				const updatedAgenda = store.agenda.map((contact, index) => {
					if (index == ind) {
						return contact;
					}
				});
				setStore({ agenda: updatedAgenda });
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/James", {
					method: "PUT", // or 'POST'
					body: JSON.stringify(updatedAgenda), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("Success:", JSON.stringify(response)))
					.catch(error => console.error("Error:", error));
			}*/
		}
	};
};

export default getState;
