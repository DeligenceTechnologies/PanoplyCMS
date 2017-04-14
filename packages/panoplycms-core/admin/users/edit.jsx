
EditUser = React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		// return {
		//   results: Images.findOne(),
		//   user: Meteor.users.findOne(),
		// } 
		var handle = Meteor.subscribe('usersProfile')
		return {
			pageLoading: ! handle.ready(), 
			user: Meteor.users.findOne(),
			image:Images.findOne({_id:Meteor.user().profile.imageId})
		};
	},
	getInitialState(){
		return {
			msg:false,
			valid:'',
			errorMsg: false
		}
	},
	componentDidMount(){
		let validObj=$("#userEditForm").validate({
			rules: {
				email: {
					required: true,
					email:true
				},
				username: {
					required: true,
				},
			},
			//For custom messages
			messages: {
				email:{
					required: "Please enter  email.",
					email: "Please enter a valid email."
				},
				username: {
					required: "Please enter name.",
				}
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
		var username = this.refs.username.value.trim();
		var email = this.refs.email.value.trim();
		var files = this.refs.profilePic.files[0];
		that=this;
		let userObj={
			'emails.0.address':email,
			profile: { 
				username: username,
				imageId:Meteor.user().profile.imageId
			}
		}
		if(this.state.valid.form()){
			if(files){
				Images.insert(files, function (err, fileObj) {
					if(fileObj){
						userObj.profile['imageId'] = fileObj. _id;
						// console.log(userObj, " User ==== ")
						Meteor.call('updateUser',userObj,function(err,data){
							if(err){
								that.setState({'errorMsg':err.reason})
							}else{ 
								that.setState({msg : true})
							}
						})
					}
				});
			}else{
				Meteor.call('updateUser',userObj,function(err,data){
					if(err){
						that.setState({'errorMsg':err.reason})
					}else{ 
						that.setState({msg : true})
					}
				})
			}
		}
	},
	render() {
		/*if (this.data.pageLoading) {
		return <LoadingSpinner />;
		}*/
		let imgUrl=Images.findOne({_id:Meteor.user().profile.imageId})

		if(this.state.msg){
			msg = <AlertMessage data={'updated user profile.'} func={this.resetSuccessMsg} />
		}else if(this.state.errorMsg){
			msg = <AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg} />
		}else{
			msg = '';
		}

		return(
			<div className="col-md-10 content" onClick={this.resetSuccessMsg}>
				<Heading  data={i18n('ADMIN_USERS_EDIT')} />
				{msg}

				<form className="form-horizontal" id="userEditForm" encType="multipart/form-data" onSubmit={this.updateuser}>
					<div className = "form-group">
						<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_USERS_EDIT_USERNAME')}</label>
						<div className = "col-sm-10">
							<input type = "text" ref="username" name="username" defaultValue={this.data.user.profile?this.data.user.profile.username:''} className = "form-control" />
						</div>
					</div> 
					<div className = "form-group">
						<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_USERS_EDIT_EMAIL')}</label>
						<div className = "col-sm-10">
							<input type = "text" ref="email" name="email" id="email" defaultValue={this.data.user.emails[0].address} className = "form-control" />
						</div>
					</div> 
					<div className = "form-group">
						<label htmlFor = "firstname" className = "col-sm-2 control-label">Profile Picture</label>
						<div className = "col-sm-10">
							<input ref="profilePic" type="file" name="file"  className="upload-file"/>
							<div className="col-md-3"><br />
								<img src={imgUrl?imgUrl.url():''} className="img-rounded" style={{maxWidth: "100%"}} /> 
							</div>
						</div>
					</div> 
					<div className = "form-group">
						<label htmlFor = "firstname" className = "col-sm-2 control-label"></label>
						<div className = "col-sm-6">
							<input type = "submit" className = "btn btn-primary" value='UPDATE' />
							&nbsp;&nbsp;
							<a className = "btn btn-danger" href={FlowRouter.path('dashboard')}>CANCEL</a>
						</div>
					</div> 
				</form>
			</div>
		)
	}
})