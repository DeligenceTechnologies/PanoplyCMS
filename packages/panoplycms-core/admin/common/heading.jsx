
/*=======================================================
	this component is used diplay heading on all page in 
	admin panel
========================================================*/


import('react').then(({Component})=>{
	class Heading extends Component {
		componentDidMount() {
			document.title = this.props.data;
		}
		render(){
			return (
				<div className="page-header row">
					<h3 className="sub-header pull-left">{this.props.data}</h3>
					{
						this.props.url?
							<ol className="breadcrumb pull-right">
							{
								this.props.url.map((value,index)=>{
									if(value.active){
										return(
											<li key={index} className="active">{value.title}</li>
										)
									}else{
										return(
											<li key={index}><a href={value.url}>{value.title}</a></li>
										)
									}
								})
							}
							</ol>
						:
							''
					}
				</div>
			)
		}
	}
	export default  Heading;
});
