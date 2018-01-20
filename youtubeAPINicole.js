alert("youtube working");

// $(document).ready(function(){
		
var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + youtubeSearch +"&type=video&videoCaption=closedcaption&maxResults=4&key=AIzaSyDYJIP_3sxyE3-SL-Dh0xAP0BWL98W0-Qs"
	var youtubeSearch = "fixing a toilet";
	var videoURL;

	$.ajax({
		url:queryURL,
		method:"GET"
	}).done(function(result){
		console.log(result);
		result.items.forEach(function(item){
			videoURL = `${queryURL}${items.snippet.thumbnails.default}`;
			$("#main-content").append("<div class="general-video" data-toggle="modal" data-target="#myModal" data-url="`${videoURL}`">");
			console.log(videoURL);
		})
	})

	$(document).on("click", "#searchButton", function(){
		console.log("search button clicked");
		$(".modal-body").empty();
		$(".modal-body").append(`<iframe class="modal-iframe" src="${$(this).attr("data-url")}" allowfullscreen="allowfullscreen"></iframe>`);
	})

// })