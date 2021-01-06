import React, { useState, useEffect, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { GlobalState } from "../store/appContext";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";

export const ContactCard = props => {
	const { store, actions } = useContext(GlobalState);
	const [state, setState] = useState({});

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link className="btn" to={"/edit/" + props.propContact.id}>
							<i className="fas fa-pencil-alt mr-3" />
						</Link>
						<button className="btn" onClick={() => actions.onDelete(props.propContact.id)}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.propContact.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.propContact.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.propContact.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.propContact.email}</span>
				</div>
			</div>
		</li>
	);
};
//Passed props in order to display information given from Contacts.js such as name, address, phone, email, and ID. ID was very important in order to pass it as a parameter in
//the onDelete function. Refer to flux.js on how onDelete() works.
ContactCard.propTypes = {
	history: PropTypes.object,
	propContact: PropTypes.object,
	id: PropTypes.string,
	onDelete: PropTypes.func
};

ContactCard.defaultProps = {
	onDelete: null
};

/*<button className="btn" onClick={() => props.history.push(`/edit/${props.propContact.id}`)}>
		<i className="fas fa-pencil-alt mr-3" />
</button>*/
