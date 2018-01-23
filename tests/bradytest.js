var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://up-keeps.herokuapp.com/upkeep/howto")
  .type("#youtubeSearch", "anode rod replacement")
  .click("#searchButton")
  
  .end()
  .then(function(result) {
    console.log(result);
  })
  
  .catch(function(error) {
    console.error("Search failed:", error);
  });