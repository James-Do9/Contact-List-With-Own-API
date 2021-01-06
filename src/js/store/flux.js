const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: null
		},
		actions: {
			loadInitialData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/James") //Fetches data from the api.
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ agenda: jsonifiedResponse })) //Sets the agenda to the array with objects.
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			addContact: (fullname, address, email, phone) => {
				//Takes the information from the addContact.js and creates a new object with information in them.
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST", //The information is then posted onto the API through the post method.
					body: JSON.stringify({
						agenda_slug: "James",
						full_name: fullname,
						email: email,
						phone: phone,
						address: address
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(respose.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/James") //Second fetch goes through in order to update the Contact.js file and display additional cards.
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ agenda: jsonifiedResponse })) //Sets the agenda to the array with objects.
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			onDelete: id => {
				//An ID is sent from the ContactCard.js file as a parameter.
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					//It then fetches the information at said ID.
					method: "DELETE", //The object inside the specific ID is then deleted with the DELETE method.
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/James") //Second fetch goes through in order to update the Contact.js file and display additional cards.
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ agenda: jsonifiedResponse })) //Sets the agenda to the array with objects.
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			saveContact: (name, address, email, phone, id) => {
				//Takes the information from the EditContact.js and allows the user to edit the information.
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					//Fetches the information at the specific ID.
					method: "PUT", //Method specified by the API, changes the information based on what is based through the parameters.
					body: JSON.stringify({
						agenda_slug: "James",
						full_name: name,
						email: email,
						address: address,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(respose.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/James") //Sets the agenda to the array with objects.
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
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
