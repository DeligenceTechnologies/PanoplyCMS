FlowRouter.route('/', {
	name: 'front-home',
	subscriptions: function(params){
		this.register('Sites',Meteor.subscribe('siteName'))
		this.register('Modules',Meteor.subscribe('moduleList'))
		this.register('MenuItem',Meteor.subscribe('menuItems'))
	},
	action: function(params) {
		ReactLayout.render(DefaultTemplate);
	},
	triggersEnter: [function(context, redirect) {
		// console.log('Welcome to Panoply CMS!');
	}]
});


