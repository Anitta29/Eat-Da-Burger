// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

class Burger {
  all (cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  }
  // The variables cols and vals are arrays.
  create (vals, cb) {
    orm.create("burgers", vals, function(res) {
      cb(res);
    });
  }
  update (vals, colName, condition, cb) {
    orm.update("burgers", vals, colName, condition, function(res) {
      cb(res);
    });
  }
  delete (vals, cb) {
    orm.delete("burgers", vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = new Burger();
