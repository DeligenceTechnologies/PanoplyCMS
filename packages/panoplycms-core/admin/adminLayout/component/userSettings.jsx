
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import LoadingSpinner from '../../common/loadingSpinner.jsx'

 class UserSettings extends Component {
	logout(event){
		event.preventDefault();
		Meteor.logout();
		FlowRouter.go('login');
	}
	render(){
		if (this.props.pageLoading) {
			return <LoadingSpinner />;
		}
		
		return(
			<div>
				<button type="button" className="btn btn-logged" data-toggle="dropdown">
					<span className="custom-span">
						{
							this.props.user.profile.username
						}
					</span>
					{
						this.props.results ?
							<img src={ this.props.results.url()} alt="Profile Picture" width="50" height="20" />
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

export default createContainer(() => {
	let handle = Meteor.subscribe('usersProfile')
	let user = Meteor.user();
	return {
		pageLoading: !handle.ready(),
		user: user,
		results: Images.findOne({ _id:user.profile.imageId })
	};
}, UserSettings);