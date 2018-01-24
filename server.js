var bodyParser = require("body-parser");
var express = require("express");
var methodOverride = require("method-override");

// Yelp API
require('dotenv').config();
var fs = require('fs');
var path = require('path');
const Yelp = require("./apis/yelpClass");
const yelp = new Yelp({ apiKey: process.env.YELP_API_KEY });


var app = express();
var port = process.env.PORT || 3000;

var db = require("./models");
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/tasks_controller.js");

// Addl Yelp change
app.get('/api/yelpSearch', function (req, res){
  var term = req.query.term;
  var location = req.query.location;
  var sort_by = 'rating';
  var limit = '5';

if (!term || !location) {
  res.json({
    error: 'You must include a term and a location!'
  });
}

yelp.search({ term, location, sort_by, limit })
  .then(data => {
    return res.json(data);
  })
  .catch((e) => {
    console.error("Error", e);
  });
});

app.use("/", routes);

// uncomment below for testing of yelp
// app.listen(port, function(){
//   console.log('The app is listening on port ' + port);
// });

db.sequelize.sync({}).then(function(){
  app.listen(port, function(){
    console.log('The app is listening on port ' + port);
  });
});
