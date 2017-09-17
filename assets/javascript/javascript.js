$(document).ready(function() {

	console.log("ready");

var topics = ["Aaahh!!! Real Monsters","The Adventures of Pete & Pete","All That","Ren & Stimpy"];

function displayButton () {

	$(".buttonDiv").empty();

	for (var i = 0; i < topics.length; i++) {

		var newShowButton = $("<button>").text(topics[i]).addClass("showButton").attr("data-show",topics[i]);

		$(".buttonDiv").append(newShowButton);

	};

};

displayButton();

$(".submit").on("click", function() {

	event.preventDefault();

	console.log("click");

	var userInput = $("#showSearch").val().trim();

	console.log(userInput);

	topics.push(userInput);

	displayButton();

});

$(document).on("click", ".showButton", function() {

  	console.log("clicked");

	var show = $(this).attr("data-show");

	console.log(show);

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=tToJmy121kNzv6W2c1St4UWNaqIP18zQ&limit=10";

	$.ajax({
	url: queryURL,
	method: "GET"
	})

	.done(function(response) {

		console.log(queryURL);

		console.log(response);

		var results = response.data;

		for (var i = 0; i < results.length; i++) {
		
			var showDiv = $("<div>");

			var p = $("<p>").text("Rating: " + results[i].rating);

			var showImage = $("<img>").addClass("gif");

			showImage.attr("src", results[i].images.fixed_height_still.url);

			showDiv.append(p);
			showDiv.append(showImage);

			$(".showImages").prepend(showDiv);


		$(".gif").on("click", function() {

			console.log("state");

			var state = $(this).attr("data-state");

			if (state === "fixed_height_still") {

				$(this).attr("src", $(this).attr("[i].images.fixed_height.url"));
				$(this).attr("data-state", "[i].images.fixed_height.url");

			} else {

				$(this).attr("src",$(this).attr("data-fixed_height_still"));
				$(this).attr("data-state", "fixed_height_still");

			}

		});

	};

});

});

});

//on click function which targets GIFs

//on click change source to images.fixed_height.url

//write if statement to choose still vs animated

//going to need to add a class to the image for the onclick function

//going to need to use THIS again

//going to have to assign a value for each image so when you click that image you can access it's stillness