Logo = React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		return {
			results: PanoplyCMSCollections.Sites.findOne()
		};
	},
	onClick(){
		PanoplyRouter.go('/')
	},
	render(){
		let imgUrl=Images.findOne({_id:this.data.results.logoId})
		return(
			<div>
				{
					imgUrl?
						<img style={{margin:"10px 0",maxWidth: "100%",maxHeight: "100px"}} src={imgUrl.url()} />
					:
						<div>
							<h3>Welcome to</h3>
							<h2 className="blog-title" onClick={this.onClick}>{this.props.data?this.props.data.name:''}</h2>
						</div>
				}
				<p className="lead blog-description">{this.props.data?this.props.data.summary:''}</p>
			</div>
		);
	}
});