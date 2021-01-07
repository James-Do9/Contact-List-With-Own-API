import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(GlobalState);

	const [state, setState] = useState({
		showModal: false,
		id: null
	});
	const [search, setSearch] = useState("");
	const [finalResults, setFinalResults] = useState([]);

	const handleChange = e => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const data = store.agenda
			? store.agenda.map((content, index) => {
					return content.full_name;
			  })
			: null;
		const userResults = data ? data.filter(data => data.toLowerCase().includes(search.toLowerCase())) : null;
		setFinalResults(userResults);
	}, [search]);
	console.log(search);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div>
					<input
						type="text"
						value={search.toLowerCase()}
						onChange={handleChange}
						placeholder="Search for a contact..."></input>
				</div>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
					{store.agenda
						? store.agenda.map((contact, index) => {
								if (finalResults == contact.full_name) {
									return (
										<ContactCard
											key={index}
											propContact={contact}
											onDelete={() => setState({ showModal: true, id: contact.id })}
										/>
									);
								}
						  })
						: null}
                        </ul>
				</div>
				{/*<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda
							? store.agenda.map((contact, index) => {
									//Maps through the agenda in store at flux.js, looks at each content at every index, and displays a ContactCard
									//with information at that specific key.
									return (
										<ContactCard
											key={index}
											propContact={contact}
											onDelete={() => setState({ showModal: true, id: contact.id })}
										/>
									);
							  })
							: null}
					</ul>
                            </div>*/}
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};

/*{store.agenda
						? store.agenda.map((contact, index) => {
								if (finalResults == contact.full_name) {
									return (
										<ContactCard
											key={index}
											propContact={contact}
											onDelete={() => setState({ showModal: true, id: contact.id })}
										/>
									);
								}
						  })
						: null}*/
