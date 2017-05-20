import React, { Component } from 'react';
import { render } from 'react-dom';

import PropTypes from 'prop-types';

export default class Positionn extends Component {
	render(){
		let c = 0;
		return(
			<div className="form-group">
				<label htmlFor="position" className="col-sm-2 control-label">Position</label>
				<div className = "col-sm-10">
					<select defaultValue={this.props.value ? this.props.value :''} name="position" ref="position" id="position" className="selectpicker form-control" data-style="btn-primary" >
						<option value="">--select--</option>
						{
							this.props.data.templates.map((result) => {
								c++;
								return <optgroup key={c} value={result._id} label={result.name}>  
									{
										result.positions.map( p => {
											return <option key={p} value={p}>{p}</option>
										})
									}
								</optgroup>
							})
						}
					</select>
				</div>
			</div>
		);
	}
}

Positionn.propTypes = {
  data: PropTypes.object.isRequired
};