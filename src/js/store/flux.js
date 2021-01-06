const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: null
		},
		actions: {
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

			addContact: (fullname, address, email, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
						agenda_slug: "James",
						full_name: fullname,
						email: email,
						phone: phone,
						address: address
					}), // data can be `string` or {object}!
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
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			onDelete: name => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${name}`, {
					method: "DELETE", // or 'POST'
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
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
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			saveContact: (name, address, email, phone, id) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT", // or 'POST'
					body: JSON.stringify({
						agenda_slug: "James",
						full_name: name,
						email: email,
						address: address,
						phone: phone
					}), // data can be `string` or {object}!
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
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
