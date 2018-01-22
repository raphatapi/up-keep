$(document).ready(function(){

    $("#searchButton").on("click", function(){
    var yelpSearch = document.getElementbyId("yelpSearch").value;;
    	
    var queryURL = "https://api.yelp.com/v3/businesses/search?term={term}&location={location}&sort_by=rating&limit=5"
    
    
    $.ajax({
        header: {
            Authorization: "Bearer aPZGg2PjfUOmvrqGB-6y-FCO11Et4w0_04R7_XZm-LTkwmClkSebFC4-dmSaExcw4EyyoD05iU2yWTtfj8YS30k-2bq_ncc1yuVzPinhX5Sm8AfhJFanOTmdowpgWnYx"
        },
		url:queryURL,
		method:"GET"
	}).done(function(result){
		var searchResults = result.items;
		for(var i=0; i < 5; i++) {
            var name = searchResults[i].name;
            var image = searchResults[i].image_url;
            var URL = searchResults[i].url;
            var rating = searchResults[i].rating;

            $("#yelp").append(`<div class="how to">
                <img src = "${image}">
                ${name}
                ${URL}
                ${rating}
            </div>`
            );
        };
    });
});
});