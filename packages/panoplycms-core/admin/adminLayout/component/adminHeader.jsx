/*=====================================================
admiHeader is used as header in admin panel dashboard
where to sub componet also used (Logo and userSettigs)
=====================================================*/
	
import('react').then(({Component})=>{
	import Logo from './adminLogo.jsx';
	import UserSettings from './userSettings.jsx';
	class AdminHeader extends Component {
		render(){
			return(
				<nav className="navbar navbar-default navbar-fixed-top admin-navbar">
					<div className="container-fluid">
						<div className="navbar-header col-md-2">
							<Logo siteData = {this.props.siteData} />
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<div className="btn-group pull-right admin-login">
								<UserSettings />
							</div>
						</div>
					</div>
				</nav>
			)
		}
	}

	export default AdminHeader;
});