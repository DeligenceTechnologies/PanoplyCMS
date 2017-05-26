import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { connect as connectCollection } from 'meteor-ditto';

// import createStore from './store/createStore'
import AdminLayout from '../admin/adminLayout/adminLayout.jsx'
import reducers from '../admin/reducers/reducers.js';

const store = createStore(reducers, compose(applyMiddleware(thunk, logger)));

Meteor.startup(() => {
	render(
		<Provider store={store}>
			<AdminLayout />
		</Provider>,
		document.getElementById('root')
	)
});