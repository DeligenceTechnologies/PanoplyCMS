import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../common/heading.jsx';
import LoadingSpinner from '../common/loadingSpinner.jsx';

class UserList extends Component {
	render() {
		if (this.props.pageLoading) {
			return <LoadingSpinner />;
		}
		if(this.props.user && this.props.user.profile.imageId){
			// var image = Images.findOne({_id: this.props.user.profile.imageId});
			console.log(this.props.image.url()," ===> ",this.props.image)
		}
		let url=[{
			title:"Dashboard",
			url:"/admin/dashboard",
			active:false
		},{
			title: 'User List',
			url: "/admin/users",
			active:true
		}];
		return(
			<div>
				<Heading key={this.props.pageLoading} data={'User List'} url={url} />
				<div className="custom-table">
				  <div className="panel panel-default panel-table">
				     	<div className="panel-body">
					 <div className="table-responsive" id="non-editable">
						<table className="table table-striped table-bordered table-list table-hover">
							<thead>
								<tr>
									<th>{i18n('ADMIN_USERS_PROFILE_PICTURE')}</th>
									<th>{i18n('ADMIN_USERS_EDIT_USERNAME')}</th>
									<th>{i18n('ADMIN_USERS_EDIT_EMAIL')}</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{
											this.props.image ?
												<img src={this.props.image.url()} className="img-circle" alt="Profile Picture" width="50" height="50" />
											: 'No image'
										}
									</td>
									<td>{this.props.user?this.props.user.profile?this.props.user.profile.username:'':''}</td>
									<td>{this.props.user?this.props.user.emails[0].address:''}</td>
									<td>
										<a className = "btn btn-default " data-toggle="tooltip" title="Edit" href={FlowRouter.path('editUser',{_id:this.props.user._id})}>
											<i className="fa fa-pencil-square-o"> </i>
										</a> &nbsp;&nbsp;
								    	<button disabled='true' className="btn btn-danger " data-toggle="tooltip" title="Delete"> 
								      		<i className="fa fa-trash-o"></i>
								      	</button>
									</td>
								</tr> 
							</tbody>
						</table>
					 </div>
			   	</div>
				  </div>
			   
				</div>
			</div>
		)
	}
}

export default createContainer(() => {
	let handle = Meteor.subscribe('usersProfile')
	let user = Meteor.users.findOne()
	return {
		pageLoading: ! handle.ready(), 
		user: user,
		image :Images.findOne({_id: user.profile.imageId})
	};

}, UserList)