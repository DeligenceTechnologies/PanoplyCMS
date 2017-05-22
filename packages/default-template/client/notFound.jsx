import React, { Component } from 'react';
import { render } from 'react-dom';

var createReactClass = require('create-react-class');

DefaultNotFound = createReactClass({
	render() {
		return (
			<div>
				<img src="/packages/deligencetechnologies_default-template/public/notFound.png" />
			</div>
		)
	}
});