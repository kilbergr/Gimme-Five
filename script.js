
$(document).mousemove(function(e){
    $("#hand").stop().animate({left:e.pageX, top:e.pageY});
});

$("#hand").on("click", function(e){
	//Show background
	$(".bg").css("visibility", "visible");
	//Determine where was clicked and have new div set to appear in that location
	var x = e.pageX-600 + "px";
	var y = e.pageY + "px";
	var div = $('<div>').css({
		"position": "absolute",
		"left": x,
		"top": y
	});
	div.append($("#paw"))
	$(document.body).append(div);
	//Animations
	$("#paw").addClass('animated bounceInLeft').addClass('animated bounceOutLeft');
	$("#hand").addClass('animated wobble');
	//Audio
        var smackEl = document.createElement('audio');
        smackEl.setAttribute('src', 'Smack.mp3');
        smackEl.setAttribute('autoplay', 'autoplay');
        //smackEl.load()
        $.get();
        smackEl.addEventListener("load", function() {
        smackEl.play();
        }, true);

        $('.play').click(function() {
        smackEl.play();
        });

	//Hide background
		setTimeout(function(){
		$(".bg").css("visibility", "hidden")
	}, 600);
})
