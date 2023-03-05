import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { RotatingLines } from 'react-loader-spinner';
import { filteredList, getIsLoading } from '../../redux/selectors';
import { removeContact } from '../../redux/operations';
import styles from './contactList.module.scss';

const ContactList = () => {
	const dispatch = useDispatch();

	const contactsArr = useSelector(filteredList);
	const isLoading = useSelector(getIsLoading);
	return isLoading ? (
		<RotatingLines
			strokeColor="grey"
			strokeWidth="5"
			animationDuration="0.75"
			width="96"
			visible={true}
		/>
	) : (
		<ul>
			{contactsArr.map(({ id, name, phone }) => {
				return (
					<li key={id} className={styles.li}>
						<p className={styles.name}>{name}:</p>
						<p className={styles.number}>{phone}</p>
						<Button
							type="button"
							onClickBtn={() => dispatch(removeContact(id))}
						>
							Delete
						</Button>
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
