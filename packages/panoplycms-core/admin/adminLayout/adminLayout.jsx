AdminLayout = React.createClass({
	componentDidMount(){
		$('body').attr('style','')
		require('../../imports/styles/admin.css')
	},
	render() {
		return (
			<div>
				<AdminHeader />
				<div className="container-fluid main-container">
					<div className="row">
						<div className="col-md-2 sidebar">
							<div className="side-menu">
								<AdminSidebar />
							</div>
						</div> 
						<div className="col-md-10 content">
							{this.props.content}
						</div>
					</div>
					<div className="row" >
						<AdminFooter />
					</div>
				</div>
			</div>
		);
	}
});