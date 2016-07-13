DefaultOffline = React.createClass({
	componentDidMount(){
		$('body').addClass('offlinePng')
	},
	componentWillMount(){
		$('body').removeClass('offlinePng')
	},
	render() {
		return (
			<div>
			</div>
		)
	}
});