FrontFooter = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			rightPosMods: PanoplyCMSCollections.Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"home-block-2"}]}, {sort:{createdAt:1}}).fetch(),
			leftFooterPosMods: PanoplyCMSCollections.Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-1"}]}, {sort:{createdAt:1}}).fetch(),
			// leftFotrModCount: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-1"}]}).count(),
			midFooterPosMods: PanoplyCMSCollections.Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-2"}]}, {sort:{createdAt:1}}).fetch(),
			// midFotrModCount: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-2"}]}).count(),
			rightFooterPosMods: PanoplyCMSCollections.Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-3"}]}, {sort:{createdAt:1}}).fetch(),
			// rightFotrModCount: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-3"}]}).count()
		};
	},
	renderFooter1Mods() {
		// console.log('Hello I am leftFooterPosMods', leftFooterPosMods)
		return this.data.leftFooterPosMods.map((module) => {
			// return <ModuleList key={module._id} module={module} />;
			return <App key='otherComponent'/>;
		});
	},

	renderFooter2Mods() {
		// console.log('Hello I am midFooterPosMods', this.data.midFooterPosMods)
		return this.data.midFooterPosMods.map((module) => {
			return <ModuleList key={module._id} module={module} />;
		});
	},

	renderFooter3Mods() {
		// console.log('Hello I am rightFooterPosMods', this.data.rightFooterPosMods)
		return this.data.rightFooterPosMods.map((module) => {
			return <ModuleList key={module._id} module={module} />;
		});
	},
/*
	selectFooterTemplate(){
		var l = (this.data.leftFotrModCount?1:0);
		var m = (this.data.midFotrModCount?1:0);
		var r = (this.data.rightFotrModCount?1:0);

		var totalFooterBlocks = l + m + r;
		console.log(totalFooterBlocks,"totalFooterBlocks");
		if ( totalFooterBlocks == 0) {
			return {__html: "<p>no footer<p>"}
		}
		else if( totalFooterBlocks == 1){
			return {__html: this.data.rightFotrModCount + "<p>one footer<p>"}
		}
		else if(totalFooterBlocks == 2){
			return {__html: "<p>two footer<p>"}
		}
		else{
			return {__html: "<div class=\"left-footer col-md-4\">"+this.renderFooter1Mods()+"</div><div class=\"mid-footer col-md-4\">"+this.renderFooter2Mods()+"</div><div class=\"right-footer col-md-4\">"+this.renderFooter3Mods()+"</div>"}
		}
	},
*/
	render() {
		return(
			<div className="footer">
				<footer className="blog-footer row">
					<div className="left-footer col-md-4"	>{this.renderFooter1Mods()}</div>
					<div className="mid-footer col-md-4"	>{this.renderFooter2Mods()}</div>
					<div className="right-footer col-md-4">{this.renderFooter3Mods()}</div>
					{/*<div dangerouslySetInnerHTML={this.selectFooterTemplate()} />*/}
				</footer>
			</div>
		)
	}
});