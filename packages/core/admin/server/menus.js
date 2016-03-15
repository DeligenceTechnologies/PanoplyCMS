Meteor.publish('menuList', function() {
    return Menus.find({});
});
