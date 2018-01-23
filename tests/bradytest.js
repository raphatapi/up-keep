var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://up-keeps.herokuapp.com/upkeep/howto")
  .type("#youtubeSearch", "anode rod replacement")
  .click("#searchButton")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  
  .catch(function(error) {
    console.error("Search failed:", error);
  });