import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { connect as connectCollection } from 'meteor-ditto';
import reducers from '../reducers/reducers.js';


export default () => {
	const store = createStore(reducers,
		applyMiddleware(thunk, logger)
	)

	return store;
};