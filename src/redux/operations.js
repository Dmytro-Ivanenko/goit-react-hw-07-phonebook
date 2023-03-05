import { getAllContacts, addContact, deleteContact } from '../srevices/bookAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
	'contacts/getAll',
	async (_, { rejectWithValue }) => {
		try {
			const response = await getAllContacts();
			return response;
		} catch ({ response }) {
			return rejectWithValue(response.data);
		}
	}
);

export const postContacts = createAsyncThunk(
	'contacts/add',
	async (contact, { rejectWithValue }) => {
		try {
			const response = await addContact(contact);
			return response;
		} catch ({ response }) {
			return rejectWithValue(response.data);
		}
	}
);

export const removeContact = createAsyncThunk(
	'contacts/delete',
	async (id, { rejectWithValue }) => {
		try {
			await deleteContact(id);
			return id;
		} catch ({ response }) {
			return rejectWithValue(response.data);
		}
	}
);
