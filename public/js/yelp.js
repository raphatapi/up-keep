    $(document).ready(function(){

        $("#searchButton").on("click", function(){
            $("#yelp").empty();
            var yelpSearch1 = document.getElementById("yelpTerm").value;
            var yelpSearch2 = document.getElementById("yelpLocation").value;
            var yelpSearch = "yelpSearch1" + "yelpSearch2";
            console.log("hello");
                
            // do a GET to your Yelp endpoint in your server
            $.get("/api/yelp/"+yelpSearch).done(function(result){
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