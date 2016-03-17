AdminLayout = React.createClass({
	insertSidebar(){
	},
	render() {
		return (
			<div>
				<AdminHeader />
				<div className="container-fluid main-container">
					<div className="col-md-2 sidebar">
						<div className="row">
							<div className="side-menu">
								<AdminSidebar />
							</div>
						</div>
					</div>
					<div className="col-md-10 content">
						<div className="panel panel-default">
							<div className="panel-heading">
							</div>
							<div className="panel-body">
								{this.props.content}
							</div>
						</div>
					</div>
					<AdminFooter />
				</div>
			</div>
		);
	}
});
