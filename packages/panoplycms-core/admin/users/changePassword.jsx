import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../common/heading.jsx';
// import AlertMessage from '../common/alertMessage.jsx';
// import AlertMessageOfError from '../common/alertMessageOfError.jsx';
import LoadingSpinner from '../common/loadingSpinner.jsx';
import { AlertMessage } from '../common/alertMessage.jsx';

class ChangePassword extends Component {
	constructor(props) {
    super(props);
 
    this.state = {
			valid:'',
    };
  }
  componentDidMount(){
		let validObj=$("#changePasswordForm").validate({
			rules: {
				oldPassword: {
					required: true,
					password:true
				},
				newPassword: {
					required: true,
					password:true
				},
				confirmPassword: {
					required: true,
					password:true
				},
			},
			//For custom messages
			messages: {
				oldPassword:{
					required: "Please enter old password.",
					password: "Please enter a valid password."
				},
				newPassword:{
					required: "Please enter new password.",
					password: "Please enter a valid password."
				},
				confirmPassword:{
					required: "Please enter password again.",
					password: "Please enter a valid password."
				},
			},
			submitHandler: function (form) { // for demo
				return false;
			},
			errorElement : 'div',
			errorPlacement: function(error, element) {
				var placement = $(element).data('error');
				if (placement) {
					$(placement).append(error)
				} else {
					error.insertAfter(element);
				}
			}
		});
		this.setState({valid:validObj})    
	}
	/*resetSuccessMsg(){
		this.setState({'msg':false})
		this.setState({'errorMsg':false})
	}*/
	updateuser(event){
		event.preventDefault();
		var oldPassword = $('#oldPassword').val();
		var newPassword = $('#newPassword').val();
		var confirmPassword = $('#confirmPassword').val();
		if(newPassword != confirmPassword){
			AlertMessage('ERROR', 'New password and Confirm password is not same.', 'error');
		}else{
			Accounts.changePassword(oldPassword, newPassword,(err,data)=>{
				if(err){
					AlertMessage('ERROR', err.reason, 'error');
				}else{
					AlertMessage('SUCCESS', 'Successfully! changed your password.', 'success');
				}
			});
		}
	}
	render() {
		if (this.props.pageLoading) {
			return <LoadingSpinner />;
		}

		/*let msg = '';
		if(this.state.msg){
			msg = <AlertMessage data={'changed your password.'} func={this.resetSuccessMsg.bind(this)} />
		}else if(this.state.errorMsg){
			msg = <AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg.bind(this)} />
		}else{
			msg = '';
		}*/

		return(
			<div className="">
				<Heading data={i18n('ADMIN_USERS_CHANGE_PASSWORD')} />
				{ /*msg*/ }

				<form className="form-horizontal" id="changePasswordForm" onSubmit={this.updateuser.bind(this)}> 
				   <div className="controls-header">
                 <div className="form-group">
										<div className="col-sm-6">
											<input type="submit" className="btn custom-default-btn" value='SAVE' />
											
											<a className="btn custom-default-btn" href={FlowRouter.path('dashboard')}>CANCEL</a>
										</div>
					    </div> 
				  </div>
         <div className="panel-body custom-panel">
					<div className="form-group">
						<label htmlFor="oldPassword" className="col-sm-2 control-label">{i18n('ADMIN_USERS_EDIT_OLD_PASSWORD')}</label>
						<div className="col-sm-7">
							<input type="password" id="oldPassword" className="form-control" required />
						</div>
					</div> 
					<div className="form-group">
						<label htmlFor="newPassword" className="col-sm-2 control-label">{i18n('ADMIN_USERS_EDIT_NEW_PASSWORD')}</label>
						<div className="col-sm-7">
							<input type="password" id="newPassword" className="form-control" required />
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="confirmPassword" className="col-sm-2 control-label">{i18n('ADMIN_USERS_EDIT_CONFIRMPASSWORD')}</label>
						<div className="col-sm-7">
							<input type="password" id="confirmPassword" className="form-control" required />
						</div>
					</div> 
				 </div>
				</form>
			</div>
		)
	}
}

export default createContainer(() => {
	let handle = Meteor.subscribe('usersProfile')
	return {
		pageLoading: ! handle.ready()
	};

},ChangePassword)