// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Task" model that matches up with DB
var Tasks = sequelize.define("book", {
  task: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  imageLink: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  }, 
  skillLevel:{
    type: Sequelize.STRING
  }, 
  internetSearch:{
    type: Sequelize.STRING
  }
});

// Syncs with DB
Tasks.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Task