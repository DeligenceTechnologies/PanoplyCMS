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
				<div className="col-md-10 content">{this.props.content}</div>
			</div>
			<AdminFooter />
		</div>
		);
	}
});
