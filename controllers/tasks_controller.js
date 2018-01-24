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

// API routes
// var bearerToken = 'aPZGg2PjfUOmvrqGB-6y-FCO11Et4w0_04R7_XZm-LTkwmClkSebFC4-dmSaExcw4EyyoD05iU2yWTtfj8YS30k-2bq_ncc1yuVzPinhX5Sm8AfhJFanOTmdowpgWnYx';

// add a route for doing a yelp search

// router.get("/api/yelp/:search", function(req, res) {
//   // build the query to get the data from Yelp
//   this.console.log("WTF JANET");
//   var yelpURL = "https://api.yelp.com/v3/businesses/search?term=" + req.params.search + "&location=saltlakecity&sort_by=rating&limit=5";
//
//   // use the request package to execute an HTTP request to yelp
//   request.get(yelpURL, {
//     'auth': {
//       'bearer': bearerToken
//     }
//   }, function(data){
//     // return the data back to the client
//     res.json(data);
//   });
// });





router.get('/upkeep/about', function(req, res) {
  res.render('about', { title: 'About Us' });
});

module.exports = router;

