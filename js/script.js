
/********************************************************
Ce fichier contient la pluspart des fonctions de script
********************************************************/

/* Photo de profile */
jQuery(document).ready(function(){
	var text1 = "Life is a Game. Let's play with the world !";
	var text2 = "I like taking a step back to think about games, strategies and life.";

	$("#text_photo_profile").html(text1);

	$("#photo_profile").mouseenter(function(){
		$("#photo_profile").attr("src", "images/moi/photo_profile_cache.jpg");
		$("#text_photo_profile").html(text2);
	});

	$("#photo_profile").mouseleave(function(){
		$("#photo_profile").attr("src", "images/moi/photo_profile.jpg");
		$("#text_photo_profile").html(text1);
	});
});

/* Redirections en fin de page */
jQuery(document).ready(function(){
	$(".redirection").mouseenter(function() {
		var elem = $(this);
		var css = elem.attr("style");
		if(css = "undefined") {
			css = "";
		}
		elem.attr("style", css + "background-color: hsla(360, 70%, 30%, 1)");

		var text = elem.find(".redirection_p");
		css = text.attr("style");
		if(css = "undefined") {
			css = "";
		}
		text.attr("style", css + "color: white");
	});
	$(".redirection").mouseleave(function() {
		var elem = $(this);
		var css = elem.attr("style");
		if(css = "undefined") {
			css = "";
		}
		elem.attr("style", css + "background-color: hsla(360, 70%, 68%, 1)");

		var text = elem.find(".redirection_p");
		css = text.attr("style");
		if(css = "undefined") {
			css = "";
		}
		text.attr("style", css + "color: black");
	});
});

/* On triche pour la couleur de volatileText !*/
jQuery(document).ready(function(){
	var elem = $(".volatileText");
	var css = elem.attr("style");
	if(css = "undefined") {
		css ="";
	}
	elem.attr("style", css + "color: white");
});

/* Les boutons du a_propos ! */
$("#btn3Things").click(function() {
	$("#btn3ThingsAppear").toggle("fast");
});

$("#btnDesign").click(function() {
	$("#btnDesignAppear").toggle("fast");
});
$("#btnProgramming").click(function() {
	$("#btnProgrammingAppear").toggle("fast");
});
$("#btnPlaying").click(function() {
	$("#btnPlayingAppear").toggle("fast");
});

$("#btnGames").click(function() {
	$("#btnGamesAppear").toggle("fast");
});
$("#btnAIDesigning").click(function() {
	$("#btnAIDesigningAppear").toggle("fast");
});
$("#btnSystems").click(function() {
	$("#btnSystemsAppear").toggle("fast");
});
$("#btnMathematics").click(function() {
	$("#btnMathematicsAppear").toggle("fast");
});
$("#btnAIProgramming").click(function() {
	$("#btnAIProgrammingAppear").toggle("fast");
});
$("#btnArchitecture").click(function() {
	$("#btnArchitectureAppear").toggle("fast");
});
$("#btnHardCore").click(function() {
	$("#btnHardCoreAppear").toggle("fast");
});
$("#btnCompetitive").click(function() {
	$("#btnCompetitiveAppear").toggle("fast");
});
$("#btnDeep").click(function() {
	$("#btnDeepAppear").toggle("fast");
});
	