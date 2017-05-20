import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../common/heading.jsx';
// import AlertMessage from '../common/alertMessage.jsx';
// import AlertMessageOfError from '../common/alertMessageOfError.jsx';
import LoadingSpinner from '../common/loadingSpinner.jsx';
import { AlertMessage } from '../common/alertMessage.jsx';

import { editUser } from '../actions/userProfile_action.js';

class EditUser extends Component {
	constructor(props) {
    super(props);
 
    this.state = {
			valid:'',
    };
  }
  componentDidMount(){
	}
	/*resetSuccessMsg(){
		this.setState({'msg':false})
		this.setState({'errorMsg':false})
	}*/
	updateuser(event){
		event.preventDefault();
		let username = $('#username').val();
		let email = $('#email').val();
		let files = $('#profilePic')[0].files[0];
		let regex = /[^.]+$/;

		let userObj = {
			'emails.0.address': email,
			profile: { 
				username: username,
				imageId: Meteor.user().profile.imageId
			}
		}
		
		if(files){
			if(regex.exec(files.name)[0] == "jpg" || regex.exec(files.name)[0] == "png" || regex.exec(files.name)[0] == "svg"){
				Images.insert(files, (err, fileObj)=> {
					if(fileObj){
						userObj.profile['imageId'] = fileObj. _id;
						// console.log(userObj, " User ==== ")

						Meteor.call('updateUser', userObj, (err,data)=>{
							if(err){
								AlertMessage('ERROR', err.reason, 'error');
							}else{
								AlertMessage('SUCCESS', 'Successfully! updated user profile.', 'success');
							}
						})
						return dispatch => {
							dispatch(editUser(userObj))
						}
					}
				});
			}else{
				AlertMessage('ERROR', 'Unsupported Image format', 'error');
			}
		}else{
			Meteor.call('updateUser', userObj, (err,data)=>{
				if(err){
					AlertMessage('ERROR', err.reason, 'error');
				}else{ 
					AlertMessage('SUCCESS', 'Successfully! updated user profile.', 'success');
				}
			})
			return dispatch => {
				dispatch(editUser(userObj))
			}
		}
	}
	render() {
		if (this.props.pageLoading) {
			return <LoadingSpinner />;
		}
		let img = Images.findOne({ _id: Meteor.user().profile.imageId })

		/*let msg = '';
		if(this.state.msg){
			msg = <AlertMessage data={'updated user profile.'} func={this.resetSuccessMsg} />
		}else if(this.state.errorMsg){
			msg = <AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg} />
		}else{
			msg = '';
		}*/

		return(
			<div className="">
				<Heading data={i18n('ADMIN_USERS_EDIT')} />
				<form className="form-horizontal" id="userEditForm" onSubmit={this.updateuser.bind(this)}>
				  <div className="controls-header">
          	<div className = "form-group">
							<input type = "submit" className = "btn custom-default-btn" value='UPDATE' />
						  <a className = "btn custom-default-btn" href={FlowRouter.path('dashboard')}>CANCEL</a>
           	</div>
				  </div>
				  <div className="panel-body custom-panel">
						<div className = "form-group">
							<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_USERS_EDIT_USERNAME')}</label>
							<div className = "col-sm-7">
								<input type = "text" id="username" name="username" defaultValue={this.props.user.profile?this.props.user.profile.username:''} className = "form-control" required />
							</div>
						</div> 
						<div className = "form-group">
							<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_USERS_EDIT_EMAIL')}</label>
							<div className = "col-sm-7">
								<input type = "email" name="email" id="email" defaultValue={this.props.user.emails[0].address} className = "form-control" required/>
							</div>
						</div> 
						<div className = "form-group">
							<label htmlFor = "firstname" className = "col-sm-2 control-label">Profile Picture</label>
							<div className = "col-sm-7">
								<input id="profilePic" type="file" name="file" className="upload-file"/>
								<div className="col-md-3"><br />
								{
									img ?
										<img src={ img.url() } className="img-rounded" style={{maxWidth: "100%"}} />
									: ''
								}
								</div>
							</div>
						</div> 
					</div>
				
				</form>
			</div>
		)
	}
}

export default createContainer(()=>{
	let handle = Meteor.subscribe('usersProfile')
	return {
		pageLoading: ! handle.ready(),
		user: Meteor.users.findOne()
	};
}, EditUser)
