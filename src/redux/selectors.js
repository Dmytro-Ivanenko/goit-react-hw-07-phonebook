import { createSelector } from '@reduxjs/toolkit';

export const getFilter = (state) => state.filter;
export const getContacts = (state) => state.contacts.items;

export const filteredList = createSelector(
	[getContacts, getFilter],
	(contacts, filter) => {
		return contacts.filter(({ name }) => {
			return name.toLowerCase().includes(filter.toLowerCase());
		});
	}
);

export const getIsLoading = (state) => state.contacts.isLoading;
export const getError = (state) => state.contacts.error;
