DefaultOffline = React.createClass({
	componentDidMount(){
		$('body').attr('style', 'background: rgba(0, 0, 0, 0) url("/packages/deligence1_default-template/public/offline.png") no-repeat fixed center center / cover ;')
	},
	componentWillMount(){
		$('body').attr('style', '')
	},
	render() {
		return (
			<div>
			</div>
		)
	}
});