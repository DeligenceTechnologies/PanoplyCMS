/**
*	No need of this component any more
**/


import React, { Component } from 'react';
import { render } from 'react-dom';

import PropTypes from 'prop-types';

export default class AlertMessageOfError extends Component {
	render(){
		return (
			<div className="successMsg alert alert-danger">
				<button type="button" onClick={this.props.func} className="close" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<strong>Error! </strong>
				{this.props.data}
			</div>
		)
	}
}

/*AlertMessageOfError.propTypes = {
  data: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired
};*/