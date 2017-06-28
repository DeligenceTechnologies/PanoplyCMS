// Images = new FS.Collection("images", {
//   stores: [new FS.Store.GridFS("images", {})]
// });
export default Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("images", {})]
});
// export default Images;

Images.allow({
    'insert': function () {
        // add custom authentication code here
        return true;
    },
    'download': function () {
        return true;
    },
    'update': function () {
        return true;
    }
});

generateAlias = function(alias){
	return alias.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-')
};

_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});