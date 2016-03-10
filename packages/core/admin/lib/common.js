Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/panolpyimages"})]
});