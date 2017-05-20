
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import LoadingSpinner from '../../common/loadingSpinner.jsx'

export default class UserSettings extends Component {
	logout(event){
		event.preventDefault();
		console.log("logout button clicked >>>>>")
		Meteor.logout();
		FlowRouter.go('login');
	}
	render(){
		if (this.props.pageLoading) {
			return <LoadingSpinner />;
		}
		let img = Images.findOne({ _id: Meteor.user().profile.imageId })
		return(
			<div>
				<button type="button" className="btn btn-logged" data-toggle="dropdown">
					<span className="custom-span">
						{
							Meteor.user() && Meteor.user().profile && Meteor.user().profile.username ? Meteor.user().profile.username :''
						}
					</span>
					{
						img ?
							<img src={ img.url()} alt="Profile Picture" width="50" height="20" />
						: ''
					}
					<span className="caret"></span>
				</button>
				<ul className="dropdown-menu pull-right">
					<li><a href={FlowRouter.path('editUser',{_id:'1'})}><i className="fa fa-user"></i>&nbsp;{i18n('ADMIN_HEADER_MY_PROFILE')}</a></li>
					<li><a href={FlowRouter.path('changePassword')}><i className="fa fa-cog"></i>&nbsp;Change Password</a></li>
					<li><a href="javascript:void(0)"><i className="fa fa-question-circle"></i>&nbsp;{i18n('ADMIN_HEADER_HELP')}</a></li>
					<li onClick={this.logout.bind(this)}><a><i className="fa fa-sign-out"></i>&nbsp;{i18n('ADMIN_HEADER_LOGOUT')}</a></li>
				</ul>
			</div>
		)
	}
}

/*export default createContainer(() => {
	let handle = Meteor.subscribe('usersProfile')
	return {
		pageLoading: !handle.ready(),
		user: Meteor.users.findOne(),
		results: Images.findOne({ _id:Meteor.user().profile.imageId })
	};
}, UserSettings);*/