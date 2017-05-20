Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/panolpyimages"})]
});

export default Images;

generateAlias = function(alias){
	return alias.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-')
};

_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});