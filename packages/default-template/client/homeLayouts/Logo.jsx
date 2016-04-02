Logo = React.createClass({
	mixins:[ReactMeteorData],
		getMeteorData(){
		var handle = Meteor.subscribe('siteName')
		return {
			pageLoading: ! handle.ready(), 
			results: Sites.findOne()
		};
	},
	render(){
		if (this.data.pageLoading)
			return <LoadingSpinner />;
		else{
			return(
			<div>
				<h3>Welcome to</h3>
				<h2 className="blog-title">{this.data.results?this.data.results.name:''}</h2>
				<p className="lead blog-description">{this.data.results?this.data.results.summary:''}</p>
			</div>
		);
		}
	}
});

LoadingSpinner=React.createClass({
	render(){
		return <div>Loading ...</div>
	}
});
