// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by htmlblockmodule.js.
import { name as packageName } from "meteor/htmlblockmodule";

// Write your tests here!
// Here is an example.
Tinytest.add('htmlblockmodule - example', function (test) {
  test.equal(packageName, "htmlblockmodule");
});
