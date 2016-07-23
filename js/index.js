var $body = $("body");
var $header = $("header");

var bodyHeight = $body.height();

$(window).resize(function(){
	bodyHeight = $body.height();
});

$("#scrollDown").click(function(){
	$body.animate({scrollTop:bodyHeight},1000);
});
$("#intro-btn").click(function(){
	$body.animate({scrollTop:0},1000);
});
$("#edu-btn").click(function(){
	$body.animate({scrollTop:bodyHeight},1000);
});
$("#skill-btn").click(function(){
	$body.animate({scrollTop:bodyHeight+500},1000);
});
$("#project-btn").click(function(){
	$body.animate({scrollTop:bodyHeight+1100},1000);
});

$(document).scroll(function(){
	if($body.scrollTop() >= bodyHeight){
		$header.css({top:0});
	}
	else{
		$header.css({top:"-62px"});
	}
});
