import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filtersReducer,
});

export default rootReducer;
