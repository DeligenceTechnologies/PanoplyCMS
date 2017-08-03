
/*=======================================================
	this componet will call when data not found
========================================================*/


import('react').then(({Component})=>{
	class NotFoundComp extends Component {
		render(){
			return(
				<div className="alert alert-danger">
					<strong>Sorry!</strong> {i18n('ADMIN_DATA_NOT_FOUND')}
				</div>
			)
		}
	}
	export default NotFoundComp;
})