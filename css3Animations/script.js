$(document).ready(function(){

	//Hand follow mouse
	$(document).mousemove(function(e){
		$("#hand").offset({left:e.pageX-150, top:e.pageY-150});
	});

	//On click events
	$("body").on("click", function(e){
		console.log("log");
		removeDiv();
		console.log(this);
		//Show background
		$(".bg").css("visibility", "visible");
		//Determine where was clicked and have new div set to appear in that location
		var x = e.pageX-600 + "px";
		var y = e.pageY + "px";
		var div = $("<div class='pawOut'></div>").css({
			"position": "absolute",
			"left": x,
			"top": y
		});
		$('body').append($('<div class="bg"></div>'));
		$('body').append(div);
		console.log(div);
		div.append($("<img id='paw' class='animated bounceInLeft' src='../images/catpaw.png'/>"));
		
		animatePaw();
		addSound();
		ouch();
		reset();
	})


	function menu(){
		$("body").keypress(function (e) {
  if (e.which == 13) {
  	window.location.href = '../index.html';
  	}
  })
}

menu();

	function animatePaw(){
		$("#paw").addClass('animated bounceOutLeft');
		$("#hand").addClass('animated wobble');
		$("#hand").addClass("animated pulse");
	}

	function removeDiv() {
		$(".pawOut").remove()
	}

	function addSound(){
		//Audio
		var smackEl = document.createElement('audio');
		smackEl.setAttribute('src', '../Smack.mp3');
		smackEl.setAttribute('autoplay', 'autoplay');
	 //smackEl.load()
	 $.get();
	 smackEl.addEventListener("load", function() {
	 	smackEl.play();
	 }, true);

	 $('.play').click(function() {
	 	smackEl.play();
	 });
	}

	function ouch(){
		setTimeout(function(){
			$("#hand").addClass('animated pulse').css("backgroundColor", "red");
			$('body').css("backgroundColor", "red")
		}, 610);
		setTimeout(function() {
			$('body').css("backgroundColor", "white");
			$("#hand").css("backgroundColor", "transparent");
		},1340)
	}

	function reset(){
		//Remove background
		setTimeout(function(){
			$(".bg").remove()
		}, 600);
			//Reset wobble
			setTimeout(function(){
				$("#hand").removeClass('animated wobble')
			}, 500);
			setTimeout(function(){
				$('body').css("backgroundColor", "white")
			}, 200);
		}

})

