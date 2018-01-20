var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    res.redirect("/upkeep");
});

router.get("/upkeep", function(req, res) {
  db.Tasks.findAll({
    // include: [db.Category],
    order: [
      ["task_name", "ASC"]
    ]
  })
  .then(function(dbTask) {
    var hbsObject = {
      task: dbTask
    };
    res.render("tasks", hbsObject);
  });
});

module.exports = router;