//Add a state hook to keep track of inputs
import React, { useState, useEffect, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";

export const EditContact = () => {
	const { store, actions } = useContext(GlobalState);
	const [contact, setContact] = useState({});
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Current contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							onChange={e => setContact(e.target.value)}
							value={contact.full_name}
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							onChange={e => setContact(e.target.value)}
							value={contact.email}
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							onChange={e => setContact(e.target.value)}
							value={contact.phone}
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							onChange={e => setContact(e.target.value)}
							value={contact.address}
							placeholder="Enter address"
						/>
					</div>
					<button type="button" className="btn btn-primary form-control">
						Save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

/*{
	store.agenda
		? store.agenda.map((contact, index) => {
				return contact.full_name;
		  })
		: null;
}*/
