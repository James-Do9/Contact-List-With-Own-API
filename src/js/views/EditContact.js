//Add a state hook to keep track of inputs
import React, { useState, useEffect, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(GlobalState);
	const info = store.agenda.find(element => element.id == props.match.params.id); //VERY IMPORTANT, it gathers the information from the object at store.agenda if the element.id
	//is the same as the props.match.params.id, ask George about this tomorrow.
	console.log(info);
	const [contact, setContact] = useState({
		name: info.full_name,
		email: info.email,
		phone: info.phone,
		address: info.address,
		id: info.id
	});

	const handleChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							onChange={handleChange}
							value={contact.name}
							placeholder="Full Name"
							name="name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							onChange={handleChange}
							value={contact.email}
							placeholder="Enter email"
							name="email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							onChange={handleChange}
							value={contact.phone}
							placeholder="Enter phone"
							name="phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							onChange={handleChange}
							value={contact.address}
							placeholder="Enter address"
							name="address"
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() =>
								actions.saveContact(
									contact.name,
									contact.address,
									contact.email,
									contact.phone,
									contact.id
								)
							}>
							Save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
EditContact.propTypes = {
	match: PropTypes.object
};

//Look up spreading later on
