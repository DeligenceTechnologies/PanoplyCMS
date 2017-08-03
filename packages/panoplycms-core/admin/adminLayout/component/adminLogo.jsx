
/*=====================================================
		adminLogo is used as logo on admin panel dashbaoard
		its parent component is adminHeader
=====================================================*/

import('react').then(({Component})=>{
	import LoadingSpinner from '../../common/loadingSpinner.jsx';
	class Logo extends Component {
		render(){
			
			
			return(
				<div>
					<a className="navbar-brand" href={FlowRouter.path('dashboard')} style={{cursor:'pointer'}}>
						{
							this.props.siteData.name.length > 10 ?
								this.props.siteData.name.substring(0,9)+'...'
							:
								this.props.siteData.name
						}
					</a>
				</div>
			)
		}

	}

	export default Logo;
});