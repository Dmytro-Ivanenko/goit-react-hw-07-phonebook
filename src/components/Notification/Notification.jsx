import React from 'react';
import { useSelector } from 'react-redux';
import { getError } from '../../redux/selectors';

const Notification = () => {
	const error = useSelector(getError);

	let message = 'There is no contacts';

	if (error) {
		message = error;
	}

	return <p>{message}</p>;
};

export default Notification;
