$(document).ready(function(){
	$("#hide").click(function(){
		$("#image").hide();
	});
	$("#show").click(function(){
		$("#image").show();
	});
	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});
	$("#explode").click(function(){
		$("#image").hide("explode", { pieces: 500 }, 5000);
	});
	$("#slideUp").click(function(){
		$("#image").slideUp( "slow", function(){

		});
	});
	$("#bounce").click(function(){
		$("#image").toggle( "bounce", { times: 20 }, "slow").toggle( "scale" );
	});
});
