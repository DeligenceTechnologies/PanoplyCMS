DefaultOffline = React.createClass({
	/*mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			siteData: PanoplyCMSCollections.Sites.findOne(),
		};
	},*/
	componentDidMount(){
		/*console.log("------------", this.data.siteData)
		if(this.data.siteData.siteOffline && !Roles.userIsInRole(Meteor.userId(), ['admin'])){
			console.log("Offline component rendered...");*/
			$('body').attr('style', 'background: rgba(0, 0, 0, 0) url("/packages/deligencetechnologies_default-template/public/offline.png") no-repeat fixed center center / cover ;')
		/*}else{
			console.log("Site not offline")
		}*/
	},
	componentWillMount(){
		$('body').attr('style', '')
	},
	render() {
		return (
			<div></div>
		)
	}
});