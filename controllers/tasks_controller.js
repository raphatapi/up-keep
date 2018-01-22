var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    res.redirect("/upkeep");
});

router.get('/upkeep', function(req, res) {
  res.render('index', { title: 'up-keep' });
});

router.get("/upkeep/preventative", function(req, res) {
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

router.get('/upkeep/howto', function(req, res) {
  res.render('howto', { title: 'How To' });
});

router.get('/upkeep/findhelp', function(req, res) {
  res.render('findhelp', { title: 'Find Help' });
});



module.exports = router;