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
				<h3>Welcome to</h3>
				{imgUrl?
				<img src={imgUrl?imgUrl.url():''} />
				:
				<h2 className="blog-title" onClick={this.onClick}>{this.props.data?this.props.data.name:''}</h2>
				}
				<p className="lead blog-description">{this.props.data?this.props.data.summary:''}</p>
			</div>
		);
	}
});

LoadingSpinner=React.createClass({
	render(){
		return <div>Loading ...</div>
	}
});
