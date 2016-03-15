Meteor.methods({
	addModule(insert) {
		insert.createdAt = new Date();
		insert.alias = insert.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
		insert.trash = false;
		Modules.insert(insert);
	},
	editModule(select, update) {
		update.updatedAt = new Date();
		update.alias = update.title.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-'),
		Modules.update(select, {$set: update});
	},
	removeModule(modId) {
		Modules.update(modId,{$set:{"trash":true}});
	}
});
_.mixin({
	capitalize: function(string) {
		return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
	}
});