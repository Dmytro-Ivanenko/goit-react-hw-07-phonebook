import axios from 'axios';

const contactsInstance = axios.create({
	baseURL: 'https://64031879302b5d671c46cd96.mockapi.io/contacts',
});

export const getAllContacts = async () => {
	const { data } = await contactsInstance.get('/');
	return data;
};

export const addContact = async (contact) => {
	const { data: result } = await contactsInstance.post('/', contact);
	return result;
};

export const deleteContact = async (id) => {
	const { data } = await contactsInstance.post(`/${id}`);
	return data;
};
