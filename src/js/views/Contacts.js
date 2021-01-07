import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import "../../styles/home.scss";

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

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-primary" to="/add">
						Add New Contact
					</Link>
				</p>
				<div>
					<input
						className="list-group-item"
						type="text"
						value={search}
						onChange={handleChange}
						placeholder="Search for a contact..."></input>
				</div>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda
							? store.agenda.map((contact, index) => {
									//Maps through the agenda in store at flux.js, looks at each content at every index, and displays a ContactCard
									//with information at that specific key.
									if (
										contact.full_name.toLowerCase().includes(search.toLowerCase()) ||
										contact.address.includes(search) ||
										contact.phone.includes(search) ||
										contact.email.includes(search)
									) {
										//Displays the contact names if the typed letters in the input matches the contact.full_name
										return (
											<ContactCard
												key={index}
												propContact={contact}
												onDelete={() => setState({ showModal: true, id: contact.id })}
											/>
										);
									} else if (search == "") {
										//If the user clears the search bar, it will then again display all of the contact cards.
										return (
											<ContactCard
												key={index}
												propContact={contact}
												onDelete={() => setState({ showModal: true, id: contact.id })} //Changes the state of the id to the contact.id and assigns it to the modal at line 97
											/>
										);
									}
							  })
							: null}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
