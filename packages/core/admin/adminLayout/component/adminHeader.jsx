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
	render(){
		return( <div>
  			<button type="button" className="btn btn-logged" data-toggle="dropdown">
    			<img src="images/loggeduser.png" alt="" />
    				Elen Adarna
    				<span className="caret"></span>
  			</button>
	  		<ul className="dropdown-menu pull-right">
	            <li><a href="profile.html"><i className="fa fa-user"></i> My Profile</a></li>
	            <li><a href="#"><i className="fa fa-cog"></i> Account Settings</a></li>
	            <li><a href="#"><i className="fa fa-question-circle"></i> Help</a></li>
	            <li><a href="signin.html"><i  className="fa fa-sign-out"></i> Log Out</a></li>
	     	</ul>
		</div>
		)
	}
})

Logo=React.createClass({
	mixins:[ReactMeteorData],
  	getMeteorData(){
      return {
     	results: Sites.find().fetch()
      }

  },
	render(){
		// console.log(this.data.results);
		return( <div>
			<a className="navbar-brand" href="#">

			</a>
		</div>
		)
	}
})
