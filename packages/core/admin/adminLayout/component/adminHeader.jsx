AdminHeader=React.createClass({
	
	render(){
		return(
			<nav className="navbar navbar-default navbar-static-top">
				<div className="container-fluid">
						<div className="navbar-header col-md-2">
								<Logo />
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<form className="navbar-form navbar-left" method="GET" role="search">
										<div className="form-group">
												<input type="text" name="q" className="form-control" placeholder="Search" />
										</div>
										<button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
								</form>
								<div className="btn-group pull-right">
										<Usersettings />
								</div>
						</div>
				</div>
		</nav>
		)  	
	}
	
})

Usersettings=React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		var handle = Meteor.subscribe('usersProfile')
		return {
			pageLoading: ! handle.ready(), 
			user: Meteor.users.findOne(),
			results: Images.findOne()
		};
	},
	logout(event){
		event.preventDefault();
		// console.log('User logout');
		Meteor.logout();
		FlowRouter.go('login');
	},
	render(){
		if (this.data.pageLoading) {
			return <LoadingSpinner />;
		}
		// console.log(this.data.results,'-------');
		// console.log(this.data.user.emails[0].address,'<== User profile');
		return( <div>
				<button type="button" className="btn btn-logged" data-toggle="dropdown">
					<img src={this.data.results?"/"+this.data.results.copies.images.key:''} alt="" />
						{/*{this.data.user.profile.username}*/}{this.data.user.emails[0].address}
						<span className="caret"></span>
				</button>
				<ul className="dropdown-menu pull-right">
							<li><a href="profile.html"><i className="fa fa-user"></i> My Profile</a></li>
							<li><a href="#"><i className="fa fa-cog"></i> Account Settings</a></li>
							<li><a href="#"><i className="fa fa-question-circle"></i> Help</a></li>
							<li onClick={this.logout} ><a href=""><i  className="fa fa-sign-out"  ></i> Log Out</a></li>
				</ul>
		</div>
		)
	}
})

Logo=React.createClass({
	mixins:[ReactMeteorData],
		getMeteorData(){ 
		var handle = Meteor.subscribe('siteName')
		return {
			pageLoading: ! handle.ready(), 
			results: Sites.findOne()
		};
		
	},
	render(){
		if (this.data.pageLoading) {
			return <LoadingSpinner />;
		}
		// console.log(this.data.results.name,'+++++++++++++++++++');
		return( <div>
			<a className="navbar-brand" href="#">
			{this.data.results?this.data.results.name:''}
			</a>
		</div>
		)
	}
})

LoadingSpinner=React.createClass({
	render:function(){
		return <div>Loading....</div>
	}
})