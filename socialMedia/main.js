$(document).ready(function(){

	$('.size').hover(function(){
		$(this).animate({
			width: "160px",
			height: "160px"
		});
	},
	function(){
		$(this).animate({
			width: "150px",
			height: "150px"
		});
	})



})