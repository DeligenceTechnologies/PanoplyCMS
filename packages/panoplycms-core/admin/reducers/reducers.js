import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { mongo } from 'meteor-ditto';

const errorsReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ERROR':
			return [...state, action.error];
		default:
			return state;
	}
};

export default combineReducers({
	errors: errorsReducer,
	form: formReducer,
	mongo,
});