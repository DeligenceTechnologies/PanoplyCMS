// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by menumodule.js.
import { name as packageName } from "meteor/menumodule";

// Write your tests here!
// Here is an example.
Tinytest.add('menumodule - example', function (test) {
  test.equal(packageName, "menumodule");
});
