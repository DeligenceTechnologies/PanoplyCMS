import React, { Component } from 'react';
import { render } from 'react-dom';

var createReactClass = require('create-react-class');

DefaultOffline = createReactClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		return {
			result: PanoplyCMSCollections.Sites.findOne()
		};
	},
	componentDidMount(){
		document.title = this.data.result.name;
		$('body').attr('style', 'background: rgba(0, 0, 0, 0) url("/packages/deligencetechnologies_default-template/public/offline.png") no-repeat fixed center center / cover ;')
	},
	componentWillMount(){
		$('body').attr('style', '')
	},
	render() {
		return (
			<div></div>
		)
	}
});