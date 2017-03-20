ChangePassword = React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		// return {
		//   results: Images.findOne(),
		//   user: Meteor.users.findOne(),
		// } 
		var handle = Meteor.subscribe('usersProfile')
		return {
			pageLoading: ! handle.ready()
		};
	},
	getInitialState(){
		return {
			msg:'',
			valid:''
		}
	},
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
	},
	resetSuccessMsg(){
		this.setState({'msg':false})
		this.setState({'errorMsg':false})
	},
	updateuser(event){
		event.preventDefault();
		that = this;
		var oldPassword=ReactDOM.findDOMNode(this.refs.oldPassword).value.trim();
		var newPassword=ReactDOM.findDOMNode(this.refs.newPassword).value.trim();
		var confirmPassword=ReactDOM.findDOMNode(this.refs.confirmPassword).value.trim();
		if(newPassword!=confirmPassword){
			// alert('New password and Confirm password is not same.');
			that.setState({'errorMsg':'New password and Confirm password is not same.'})
		}else{
			Accounts.changePassword(oldPassword, newPassword,function(err,data){
				if(err){
					that.setState({'errorMsg':err.reason})
				}else{
					that.setState({msg : true})
				}
			});
		}
	},
	render() {
		if (this.data.pageLoading) {
			return <LoadingSpinner />;
		}

		return(
			<div className="col-md-10 content">
				<Heading  data={i18n('ADMIN_USERS_CHANGE_PASSWORD')} />
				{this.state.msg?<AlertMessage data={'changed your password.'} func={this.resetSuccessMsg} />:'' }
				{this.state.errorMsg?<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg} />:'' }

				<form className="form-horizontal" id="changePasswordForm" encType="multipart/form-data" onSubmit={this.updateuser}> 
					<div className = "form-group">
						<label htmlFor = "firstname" className = "col-sm-2 control-label" >{i18n('ADMIN_USERS_EDIT_OLD_PASSWORD')}</label>
						<div className = "col-sm-10">
							<input type = "password" ref="oldPassword" id="oldPassword" className = "form-control" />
						</div>
					</div> 
					<div className = "form-group">
						<label htmlFor = "firstname" className = "col-sm-2 control-label" >{i18n('ADMIN_USERS_EDIT_NEW_PASSWORD')}</label>
						<div className = "col-sm-10">
							<input type = "password" ref="newPassword" id="newPassword" className = "form-control" />
						</div>
					</div> 
					<div className = "form-group">
						<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_USERS_EDIT_CONFIRMPASSWORD')}</label>
						<div className = "col-sm-10">
							<input type = "password" ref="confirmPassword" id="confirmPassword" className = "form-control" />
						</div>
					</div> 
					<div className = "form-group">
						<label htmlFor = "firstname" className = "col-sm-2 control-label" ></label>
						<div className = "col-sm-6">
							<input type = "submit" className = "btn btn-primary" value='SAVE' />
							&nbsp;&nbsp;
							<a className = "btn btn-danger" href={FlowRouter.path('dashboard')} >CANCEL</a>
						</div>
					</div> 
				</form>
			</div>
		)  
  }
})

LoadingSpinner=React.createClass({
	render:function(){
		return <div>Loading....</div>
	}
})