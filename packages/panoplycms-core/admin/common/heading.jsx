import React, { Component } from 'react';
import { render } from 'react-dom';

// import PropTypes from 'prop-types';

export default class Heading extends Component {
	componentDidMount() {
		document.title = this.props.data;
	}
	render(){
		return (
			<div className="page-header">
				<h3 className="sub-header">{this.props.data}</h3>
			</div>
		)
	}
}

/*Heading.propTypes = {
  data: PropTypes.string.isRequired
};*/