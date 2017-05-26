import React, { Component } from 'react';
import { render } from 'react-dom';

// import PropTypes from 'prop-types';

export default class Heading extends Component {
	componentDidMount() {
		document.title = this.props.data;
	}
	render(){
		return (
			<div className="page-header row">
				<h3 className="sub-header pull-left">{this.props.data}</h3>
				{
					this.props.url?
						<ol className="breadcrumb pull-right">
						{
							this.props.url.map((value,index)=>{
								if(value.active){
									return(
										<li key={index} className="active">{value.title}</li>
									)
								}else{
									return(
										<li key={index}><a href={value.url}>{value.title}</a></li>
									)
								}
							})
						}
						</ol>
					:
						''
				}
			</div>
		)
	}
}

/*Heading.propTypes = {
  data: PropTypes.string.isRequired
};*/