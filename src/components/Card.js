import React from "react";


const Card = ({ name, email, id }) => {
	return (
		<div className='cards'>
			<img alt='robots' src={`https://robohash.org/${id}jhcffdjy?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;