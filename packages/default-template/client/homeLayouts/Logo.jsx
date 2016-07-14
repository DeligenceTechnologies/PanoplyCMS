Logo = React.createClass({
	onClick(){
		PanoplyRouter.go('/')
	},
	render(){
		return(
			<div>
				<h3>Welcome to</h3>
				<h2 className="blog-title" onClick={this.onClick}>{this.props.data?this.props.data.name:''}</h2>
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
