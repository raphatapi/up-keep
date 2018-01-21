var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    res.redirect("/upkeep");
});

router.get("/upkeep", function(req, res) {
  db.Tasks.findAll({
    order: [
      ["task_name", "ASC"]
    ]
  })
  .then(function(dbTask) {
    var hbsObject = {
      task: dbTask
    };
    res.render("preventative", hbsObject);
  });
});



module.exports = router;