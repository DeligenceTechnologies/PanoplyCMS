import { combineReducers } from 'redux';

const reducers = (state = [], action) => {
	switch (action.type) {
		case 'ERROR':
			return [...state, action.error];
		case 'SUCCESS' :
			return [...state, action.data];
		default:
			return state;
	}
};

export default reducers;