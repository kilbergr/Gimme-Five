
$(document).mousemove(function(e){
    $("#puppy").stop().animate({left:e.pageX, top:e.pageY});
});

$("#puppy").on("click", function(e){
	$(".bg").css("visibility", "visible");
	var x = e.pageX;
	var y = e.pageY;
	$("#paw").addClass('animated bounceInLeft');
	if($("#paw").hasClass('animated bounceInLeft')){
		$("#puppy").addClass('animated wobble');
	}

})

