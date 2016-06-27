SidePanel = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			rightPosMods: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"home-block-2"}]}, {sort:{createdAt:1}}).fetch(),
		};
	},
	
	renderRightMods() {
		// console.log('Hello I am rightPosMods', this.data.rightPosMods)
		return this.data.rightPosMods.map((module) => {
			return <ModuleList key={module._id} module={module} />;
		});
	},

	render() {
		return(
			<div className="side-panel">
				{this.renderRightMods()}
			</div>
		);
	}
});

ModuleList = React.createClass({
	propTypes: {module: React.PropTypes.object.isRequired },
	createMarkup(){
		return {__html: this.props.module.modDesc.value}; 
	},
	render(){
		// console.log(this.props.module._id);
		return(
			<div className="sidebar-module">
				<h4>{this.props.module.showTitle=="true"?this.props.module.title:''}</h4>
				<div dangerouslySetInnerHTML={this.createMarkup()} />
			</div>
		);
	}
});