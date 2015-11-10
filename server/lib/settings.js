 Meteor.startup(function () {
	if ( Meteor.users.find().count() === 0 ) {
	    Accounts.createUser({
	        username: 'deligence',
	        email: 'info@deligence.com',
	        password: 'y!A;4)'
	    });
	} else {
		console.log('user exists');
	}
	// articles.createIndex( { "alias": 1 }, { unique: true } )
	articles._ensureIndex({ "alias": 1 }, { unique: true });
	category._ensureIndex({ "alias": 1 }, { unique: true });
	menus._ensureIndex({ "alias": 1 }, { unique: true });
});