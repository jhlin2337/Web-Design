$("#leftOption").on("click", function() {
	var bookTitle = $("#leftBook").text();
	displayBook(bookTitle);
});

$("#rightOption").on("click", function() {
	var bookTitle = $("#rightBook").text();
	displayBook(bookTitle);
});

function displayBook(titleString) {
	if (titleString === "Demon Princess") {
		$("body").css({
			background: "url(http://wallpapercave.com/wp/MC6CA2s.jpg)",
			backgroundSize: "cover",
			backgroundPosition: "center",
			height: "100%",
		});

		var image = $("#bookImage");
		image.fadeOut(1000, function() {
			image.attr("src", "assets/images/demon-princess.jpg");
			image.fadeIn(1000);
		});

		var synopsisTitle = $("#synopsisTitle");
		changeText(synopsisTitle, "Demon Princess");

		var synopsisBody = $("#synopsisBody");
		changeText(synopsisBody, "With her father gone and her brother missing, Demon Princess Adriana has to assume the throne, temporarily becoming the Demon King. The procession is underway, and the princess is nervous yet determined … until the unthinkable happens and she is summoned! Somehow, Aldric, a mage-in-training, has summoned the princess into the human kingdom. Now trapped, Adriana must hide her identity and escape before she loses her life in the hands of her mortal enemies.");

		var leftBook = $("#leftBook");
		changeText(leftBook, "A Second Chance At Life")

		var rightBook = $("#rightBook");
		changeText(rightBook, "Book of Immortals");
	} else if (titleString === "A Second Chance At Life") {
		$("body").css({
			background: "url(https://s-media-cache-ak0.pinimg.com/originals/69/15/bf/6915bf9d20047d299aa5f6890478f720.jpg)",
			backgroundSize: "cover",
			backgroundPosition: "center",
			height: "100%",
		});

		var image = $("#bookImage");
		image.fadeOut(1000, function() {
			image.attr("src", "assets/images/second-chance-at-life.jpg");
			image.fadeIn(1000);
		});

		var synopsisTitle = $("#synopsisTitle");
		changeText(synopsisTitle, "A Second Chance At Life");

		var synopsisBody = $("#synopsisBody");
		changeText(synopsisBody, "Lady Elaina had everything—wealth, title, and irresistible beauty—until her jealous half-sister ruined her reputation and forced her into a disgraceful marriage. She died amidst the flames, murdered and betrayed by her husband and half-sister. As the flames roared, the loss of her unborn child created a thirst for revenge. A magical amulet sent her two years back in time. She has another chance to make things right for herself and her family, yet what began as a plot to undermine her half-sister’s machinations quickly evolved into a political conspiracy that will rock the entire empire and make Elaina realize she might not have traveled back in time alone.");

		var leftBook = $("#leftBook");
		changeText(leftBook, "Book of Immortals")

		var rightBook = $("#rightBook");
		changeText(rightBook, "Demon Princess");
	} else {
		$("body").css({
			background: "url(https://s-media-cache-ak0.pinimg.com/originals/59/15/e9/5915e9e486ae9cd5f9fb5fc88eb3051e.jpg)",
			backgroundSize: "cover",
			backgroundPosition: "center",
			height: "100%",
		});

		var image = $("#bookImage");
		image.fadeOut(1000, function() {
			image.attr("src", "assets/images/book-of-immortals.jpg");
			image.fadeIn(1000);
		});

		var synopsisTitle = $("#synopsisTitle");
		changeText(synopsisTitle, "Book of Immortals");

		var synopsisBody = $("#synopsisBody");
		changeText(synopsisBody, "Following her death in a plane crash, Celine discovers that neither heaven nor hell is an option for her. Miraculously, she’s transformed into the antagonist of the book she’d read prior to her demise. Now she must navigate this strange new immortal life, knowing that the antagonist’s journey won’t end well. Between covering up her devil ancestry in an immortal school and trying to understand her feelings for a senior apprentice, can Celine circumvent her impending doomsday to create a favorable plot twist?");

		var leftBook = $("#leftBook");
		changeText(leftBook, "Demon Princess");

		var rightBook = $("#rightBook");
		changeText(rightBook, "A Second Chance At Life");
	}
}

function changeText(element, newText) {
	element.fadeOut(1000, function() {
		element.text(newText);
		element.fadeIn(1000);
	});
}