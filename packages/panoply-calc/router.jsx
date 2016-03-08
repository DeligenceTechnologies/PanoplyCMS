FlowRouter.route('/click', {
	name: 'click-component',
	subscriptions: function(params){},
	action: function(params) { ReactLayout.render(App);	},
	triggersEnter: [function(context, redirect) {
		console.log('Welcome to Click React App!');
	}]
});