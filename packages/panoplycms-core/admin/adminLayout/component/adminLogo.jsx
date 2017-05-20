
import React, { Component } from 'react';
import { render } from 'react-dom';

import LoadingSpinner from '../../common/loadingSpinner.jsx'

export default class Logo extends Component {
	render(){
		if (this.props.pageLoading) {
			return <LoadingSpinner />;
		}
		
		return(
			<div>
				<a className="navbar-brand" href={FlowRouter.path('dashboard')} style={{cursor:'pointer'}}>
					{
						this.props.siteData.name.length > 10 ?
							this.props.siteData.name.substring(0,9)+'...'
						:
							this.props.siteData.name
					}
				</a>
			</div>
		)
	}

}