FlowRouter.route('/', {
	name: 'front-home',
	subscriptions: function(params){
		this.register('Sites',Meteor.subscribe('siteName'))
		/*this.register('Sites1',Meteor.subscribe('imagepic'))*/
		this.register('Modules',Meteor.subscribe('moduleList'))
	},
	action: function(params) {
			ReactLayout.render(DefaultTemplate);
	},
	triggersEnter: [function(context, redirect) {
		console.log('Welcome to Panoply CMS!');
	}]
});

/*--------------------------Login Routing--------------------------*/
FlowRouter.route('/login', {
	name: 'login',
	subscriptions: function(params){

	},
	action: function(params) {
		if (Meteor.userId()) {
			FlowRouter.go('front-home');
		}
		else ReactLayout.render(FLogin);
	}
});