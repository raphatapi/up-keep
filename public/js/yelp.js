window.onload = function(){
  var $yelp = $("#yelp");
  var $location = $("#yelpLocation");

 $("#yelpSearchBttn").on("click", function(){
  var searchTerm = document.getElementById("yelpTerm").value;
  var locationInput = document.getElementById("yelpLocation").value;
  const sort_by = 'rating';
  const limit = '5';
  searchStuff(locationInput, searchTerm, limit, sort_by);
});

function formatNumber(phoneNumber) {
  phoneNumber = phoneNumber || "";
  return phoneNumber.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, "($1) $2-$3");
}

function searchStuff(queryLocation, queryTerm, queryLimit, querySort) {
  $yelp.empty();
  // If location input is empty, show an error
  if ($location.val() == '') {
    alert("Please add a location.");
  // Else run specificed search
  } else {
      var query = $.param({
        location: queryLocation,
        term: queryTerm,
        limit: queryLimit,
        sort_by: querySort
      });

      var url = '/api/yelpSearch/?' + query
      $.ajax({
        url: url,
        success: function(response){
          var helpMeData = response.businesses
          var helpMeQueryParams = [];

          for (i = 0; i < 5; i++) {
            var phoneNumber = helpMeData[i].phone;
            var phone = formatNumber(phoneNumber);
            var title = helpMeData[i].name;
            var id = helpMeData[i].id;
            var address = helpMeData[i].location.display_address[0];
            var rating = helpMeData[i].rating;
            var image = helpMeData[i].image_url;
            var link = helpMeData[i].url;
            // var output = '<img src=' +image + '>';
            // $yelp.append(output);
            $yelp.append(`<article class="help-me" id="${id}"><section class="featured-image"><a class="help-me-link" href="${link}" target="_blank"><img src="${image}" alt="" /></a></section><section class="help-me-content"><a class="help-me-link" href="${link}" target="_blank"><h3 class="title">${title}</h3></a><p class="address">${address} | <span class="phone">${phone}</span></p></section><section class="rating">Rating: ${rating}</section><div class="clearfix"></div></article>`);
          };
        },
        error: function () {
          console.log("Can't load because of error.");
        }
      })
    }
  }
}
// // Old version
//         $("#searchButton").on("click", function(){
//             $("#yelp").empty();
//             var yelpSearch1 = document.getElementById("yelpTerm").value;
//             var yelpSearch2 = document.getElementById("yelpLocation").value;
//             var yelpSearch = "yelpSearch1" + "yelpSearch2";
//             console.log("hello");
//
//             // do a GET to your Yelp endpoint in your server
//             $.get("/api/yelp/"+yelpSearch).done(function(result){
//                 var searchResults = result.businesses;
//                 for(var i=0; i < 5; i++) {
//                     var name = searchResults[i].name;
//                     var image = searchResults[i].image_url;
//                     var URL = searchResults[i].url;
//                     var rating = searchResults[i].rating;
//
//                     $("#yelp").append(`<div class="how to">
//                         <img src = "${image}">
//                         ${name}
//                         ${URL}
//                         ${rating}
//                     </div>`
//                     );
//                 };
//             });
//         });
//     };
