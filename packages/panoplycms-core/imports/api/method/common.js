Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/panolpyimages"})]
});

generateAlias = function(alias){
	return alias.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-')
};