Login = React.createClass({
	submitData(event){
		event.preventDefault();
		console.log('err,data');
		var email=ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password=ReactDOM.findDOMNode(this.refs.password).value.trim();
		console.log(email,password);
		Meteor.loginWithPassword(email,password,function(err,data){
			if(err){
				FlowRouter.go('admin-login');
			}else{
				FlowRouter.go('home');
			}
		});
	},
	render() {
		return (<div>
			<div className="container-fluid main-container">
				<div className="col-md-10 content">
					<div className="panel panel-default">
						<section>
							<div className="container">
								<br />
								<div className="row">
									<div className="col-md-offset-2 col-md-6">
										<div className="panel panel-default">
											<div className="panel-heading">
												<span className="lead form-signin-heading">Panoply Log In</span>
											</div>
											<form className="form-signin" onSubmit={this.submitData} >
												<label htmlFor="inputEmail" className="sr-only">Email address</label>
												<input type="email" ref="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
												<label htmlFor="inputPassword" className="sr-only">Password</label>
												<input type="password" ref="password" id="inputPassword" className="form-control" placeholder="Password" required />
												<input type="submit" value="Login" className="btn btn-lg btn-primary btn-block" />
											</form>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>  
				</div>
			</div>
		</div>
		);
	}
});
