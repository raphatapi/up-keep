var bodyParser = require("body-parser");
var express = require("express");
var methodOverride = require("method-override");

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

app.use("/", routes);

db.sequelize.sync({}).then(function(){
  app.listen(port, function(){
    console.log('The app is listening on port ' + port);
  });
});
