// Write your package code here! 
if (Meteor.isClient) { 	
	App = React.createClass({
		getInitialState() {
			// counter starts at 0
			return {counter: 0}
		},
		clickBut(event){
			_this = this;
			Meteor.call('clickButton', this.state.counter ,function(error,res){
				// assign new value to counter on button-click
				_this.setState({counter: res});
			});
		},
		render() {
			return (
				<div>
				<h1>Welcome to Meteor! <span className="little">with ReactJS</span></h1>
				<button onClick={this.clickBut}> Click Me </button>
				<p>You have pressed the button {this.state.counter} times.</p>
				</div>
			);
		}
	});
	Meteor.startup(function() {
		// ReactDOM.render( <App /> , document.getElementById("render-target"));
		// ReactDOM.render( <App /> );
	});
};

Meteor.methods({
	clickButton: function(counter) {
		return ++counter;
	} 
}); 
   
if (Meteor.isServer) {
	Meteor.startup(function() {
		// code to run on server at startup
	});
};