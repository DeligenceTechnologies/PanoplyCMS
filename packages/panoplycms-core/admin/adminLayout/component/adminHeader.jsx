import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Logo from './adminLogo.jsx';
import UserSettings from './userSettings.jsx'

export default class AdminHeader extends Component {
	render(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top admin-navbar">
				<div className="container-fluid">
					<div className="navbar-header col-md-2">
						<Logo siteData = {this.props.siteData} pageLoading={this.props.pageLoading} />
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<div className="btn-group pull-right admin-login">
							<UserSettings pageLoading={this.props.pageLoading} />
						</div>
					</div>
				</div>
			</nav>
		)
	}
}


// export default createContainer(() => {
// 	let handle1 = Meteor.subscribe('siteName')
// 	let handle2 = Meteor.subscribe('usersProfile')
// 	return {
// 		pageLoading: ! handle1.ready() && ! handle2.ready(),
// 		siteData: PanoplyCMSCollections.Sites.findOne()
// 	};
// }, AdminHeader);
