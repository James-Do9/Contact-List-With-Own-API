import React, { useState, useEffect, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const { store, actions } = useContext(GlobalState);
	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		address: ""
	});
	const handleChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							value={contact.name}
							onChange={handleChange}
							placeholder="Full Name"
							name="name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							value={contact.email}
							onChange={handleChange}
							placeholder="Enter email"
							name="email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							value={contact.phone}
							onChange={handleChange}
							placeholder="Enter phone"
							name="phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							value={contact.address}
							onChange={handleChange}
							placeholder="Enter address"
							name="address"
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.addContact(contact.name, contact.address, contact.email, contact.phone)}>
						Add
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
