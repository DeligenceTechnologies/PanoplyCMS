
/*=======================================================
	this component is used display Loading spinner while 
	subscription is not ready
========================================================*/



import('react').then(({Component})=>{
	class LoadingSpinner extends Component {
		render(){
			return <div className="loading-text">Loading...</div>
		}

	}
	export default LoadingSpinner;
})