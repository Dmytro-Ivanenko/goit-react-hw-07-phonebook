import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, postContacts, removeContact } from './operations';

const handlePending = (state) => {
	state.isLoading = true;
};
const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			// get all
			.addCase(fetchContacts.pending, handlePending)
			.addCase(fetchContacts.fulfilled, (store, { payload }) => {
				store.items = payload;
				store.isLoading = false;
			})
			.addCase(fetchContacts.rejected, handleRejected)

			// post
			.addCase(postContacts.pending, handlePending)
			.addCase(postContacts.fulfilled, (store, { payload }) => {
				store.items.push(payload);
				store.isLoading = false;
			})
			.addCase(postContacts.rejected, handleRejected)

			// delete
			.addCase(removeContact.pending, handlePending)
			.addCase(removeContact.fulfilled, (store, { payload }) => {
				store.items = store.items.filter(({ id }) => id !== payload);
				store.isLoading = false;
			})
			.addCase(removeContact.rejected, handleRejected);
	},
});

export const contactsReducer = contactsSlice.reducer;
