var App = React.createClass({
	getInitialState() {
		// counter starts at 0
		return {counter: 0, }
	},
	clickButton1(event){
		_this = this;
		Meteor.call('clickButton', this.state.counter ,function(error,res){
			// assign new value to counter on button click
			_this.setState({counter: res});
		});
	},
	render() {
		return ( 
			<div className="ui container">
				<h1>Welcome to Meteor! <span className="little">with ReactJS</span></h1>
				<button onClick={this.clickButton1}> Click Me </button> 
				<p>You have pressed the button {this.state.counter} times.</p>
			</div>
		);
	}
});

Meteor.startup(function() {
	ReactDOM.render( <App /> , document.getElementById("render-target"));
});