	
$(document).ready(function () {
	
	$('.list > #blackC').click(function () {
		$(this).children(".list-item_list").toggle();
	});	
	$('.list > #blackM').click(function () {
		$(this).children(".list-item_list").toggle();
	});
	$('.list > #blackMz').click(function () {
		$(this).children(".list-item_list").toggle();
	});
		
	
	$(".img-mini").click(function() {
		$("#nav").load("citroen/navCitroen.html");
		$("#detail").load("citroen/standart++.html");
		$(".arrow-mini").show();
		$(".arrow-mid").hide();
		$(".arrow-premium").hide();
	});
	
	$(".img-mid").click(function() {
		$("#nav").load("mazda/navMazda.html");
		$("#detail").load("mazda/standart++.html");
		$(".arrow-mid").show();
		$(".arrow-mini").hide();
		$(".arrow-premium").hide();
	});

	$(".img-premium").click(function() {
		$("#nav").load("mercedes/navMers.html");
		$("#detail").load("mercedes/standart++.html");
		$(".arrow-premium").show();
		$(".arrow-mini").hide();
		$(".arrow-mid").hide();
	});


	$("#minimalC").mouseenter(function() {
		$("#detail").load("citroen/minimal.html");
		$(".triangle1").show();
	});
	$("#minimalC").mouseleave(function() {
		$(".triangle1").hide();
	});
	

	$("#standartC").mouseenter(function() {
		$("#detail").load("citroen/standart.html");
		$(".triangle2").show();
	});
	$("#standartC").mouseleave(function() {
		$(".triangle2").hide();
	});


	$("#standartC+").mouseenter(function() {
		$("#detail").load("citroen/standart+.html");
		$(".triangle3").show();
	});
	$("#standartC+").mouseleave(function() {
		$(".triangle3").hide();
	});


	$("#standartC++").mouseenter(function() {
		$("#detail").load("citroen/standart++.html");
		$(".triangle4").show();
	});
	$("#standartC++").mouseleave(function() {
		$(".triangle4").hide();
	});


	$("#standartC+++").mouseenter(function() {
		$("#detail").load("citroen/standart+++.html");
		$(".triangle5").show();
	});
	$("#standartC+++").mouseleave(function() {
		$(".triangle5").hide();
	});


	$("#fullC").mouseenter(function() {
		$("#detail").load("citroen/full.html");
		$(".triangle6").show();
	});
	$("#fullC").mouseleave(function() {
		$(".triangle6").hide();
	});


	$("#blackC").mouseenter(function() {
		$(".triangle7").show();
	});
	$("#blackC").mouseleave(function() {
		$(".triangle7").hide();
	});


	$("#headlightsC").mouseenter(function() {
		$("#detail").load("citroen/headlights.html");
		$(".triangle8").show();
	});
	$("#headlightsC").mouseleave(function() {
		$(".triangle8").hide();
	});


	$("#internal-thresholdsC").mouseenter(function() {
		$("#detail").load("citroen/internal-thresholds.html");
		$(".triangle9").show();
	});
	$("#internal-thresholdsC").mouseleave(function() {
		$(".triangle9").hide();
	});


	$("#out-thresholdsC").mouseenter(function() {
		$("#detail").load("citroen/out-thresholds.html");
		$(".triangle10").show();
	});
	$("#out-thresholdsC").mouseleave(function() {
		$(".triangle10").hide();
	});


	$("#doorsC").mouseenter(function() {
		$("#detail").load("citroen/doors.html");
		$(".triangle11").show();
	});
	$("#doorsC").mouseleave(function() {
		$(".triangle11").hide();
	});


	$("#back-wingsC").mouseenter(function() {
		$("#detail").load("citroen/back-wings.html");
		$(".triangle12").show();
	});
	$("#back-wingsC").mouseleave(function() {
		$(".triangle12").hide();
	});


	$("#hoodC").mouseenter(function() {
		$("#detail").load("citroen/hood.html");
		$(".triangle13").show();
	});
	$("#hoodC").mouseleave(function() {
		$(".triangle13").hide();
	});


	$("#front-bumperC").mouseenter(function() {
		$("#detail").load("citroen/front-bumper.html");
		$(".triangle14").show();
	});
	$("#front-bumperC").mouseleave(function() {
		$(".triangle14").hide();
	});


	$("#back-bumperC").mouseenter(function() {
		$("#detail").load("citroen/back-bumper.html");
		$(".triangle15").show();
	});
	$("#back-bumperC").mouseleave(function() {
		$(".triangle15").hide();
	});



	$("#minimalMz").mouseenter(function() {
		$("#detail").load("mazda/minimal.html");
		$(".triangle1").show();
	});
	$("#minimalMz").mouseleave(function() {
		$(".triangle1").hide();
	});
	

	$("#standartMz").mouseenter(function() {
		$("#detail").load("mazda/standart.html");
		$(".triangle2").show();
	});
	$("#standartMz").mouseleave(function() {
		$(".triangle2").hide();
	});


	$("#standartMz+").mouseenter(function() {
		$("#detail").load("mazda/standart+.html");
		$(".triangle3").show();
	});
	$("#standartMz+").mouseleave(function() {
		$(".triangle3").hide();
	});


	$("#standartMz++").mouseenter(function() {
		$("#detail").load("mazda/standart++.html");
		$(".triangle4").show();
	});
	$("#standartMz++").mouseleave(function() {
		$(".triangle4").hide();
	});


	$("#standartMz+++").mouseenter(function() {
		$("#detail").load("mazda/standart+++.html");
		$(".triangle5").show();
	});
	$("#standartMz+++").mouseleave(function() {
		$(".triangle5").hide();
	});


	$("#fullMz").mouseenter(function() {
		$("#detail").load("mazda/full.html");
		$(".triangle6").show();
	});
	$("#fullMz").mouseleave(function() {
		$(".triangle6").hide();
	});


	$("#blackMz").mouseenter(function() {
		$(".triangle7").show();
	});
	$("#blackMz").mouseleave(function() {
		$(".triangle7").hide();
	});


	$("#headlightsMz").mouseenter(function() {
		$("#detail").load("mazda/headlights.html");
		$(".triangle8").show();
	});
	$("#headlightsMz").mouseleave(function() {
		$(".triangle8").hide();
	});


	$("#internal-thresholdsMz").mouseenter(function() {
		$("#detail").load("mazda/internal-thresholds.html");
		$(".triangle9").show();
	});
	$("#internal-thresholdsMz").mouseleave(function() {
		$(".triangle9").hide();
	});


	$("#out-thresholdsMz").mouseenter(function() {
		$("#detail").load("mazda/out-thresholds.html");
		$(".triangle10").show();
	});
	$("#out-thresholdsMz").mouseleave(function() {
		$(".triangle10").hide();
	});


	$("#doorsMz").mouseenter(function() {
		$("#detail").load("mazda/doors.html");
		$(".triangle11").show();
	});
	$("#doorsMz").mouseleave(function() {
		$(".triangle11").hide();
	});


	$("#back-wingsMz").mouseenter(function() {
		$("#detail").load("mazda/back-wings.html");
		$(".triangle12").show();
	});
	$("#back-wingsMz").mouseleave(function() {
		$(".triangle12").hide();
	});


	$("#hoodMz").mouseenter(function() {
		$("#detail").load("mazda/hood.html");
		$(".triangle13").show();
	});
	$("#hoodMz").mouseleave(function() {
		$(".triangle13").hide();
	});


	$("#front-bumperMz").mouseenter(function() {
		$("#detail").load("mazda/front-bumper.html");
		$(".triangle14").show();
	});
	$("#front-bumperMz").mouseleave(function() {
		$(".triangle14").hide();
	});


	$("#back-bumperMz").mouseenter(function() {
		$("#detail").load("mazda/back-bumper.html");
		$(".triangle15").show();
	});
	$("#back-bumperMz").mouseleave(function() {
		$(".triangle15").hide();
	});





	
	$("#minimalM").mouseenter(function() {
		$("#detail").load("mercedes/minimal.html");
		$(".triangle1").show();
	});
	$("#minimalM").mouseleave(function() {
		$(".triangle1").hide();
	});
	

	$("#standartM").mouseenter(function() {
		$("#detail").load("mercedes/standart.html");
		$(".triangle2").show();
	});
	$("#standartM").mouseleave(function() {
		$(".triangle2").hide();
	});


	$("#standartM+").mouseenter(function() {
		$("#detail").load("mercedes/standart+.html");
		$(".triangle3").show();
	});
	$("#standartM+").mouseleave(function() {
		$(".triangle3").hide();
	});


	$("#standartM++").mouseenter(function() {
		$("#detail").load("mercedes/standart++.html");
		$(".triangle4").show();
	});
	$("#standartM++").mouseleave(function() {
		$(".triangle4").hide();
	});


	$("#standartM+++").mouseenter(function() {
		$("#detail").load("mercedes/standart+++.html");
		$(".triangle5").show();
	});
	$("#standartM+++").mouseleave(function() {
		$(".triangle5").hide();
	});


	$("#fullM").mouseenter(function() {
		$("#detail").load("mercedes/full.html");
		$(".triangle6").show();
	});
	$("#fullM").mouseleave(function() {
		$(".triangle6").hide();
	});


	$("#blackM").mouseenter(function() {
		$(".triangle7").show();
	});
	$("#blackM").mouseleave(function() {
		$(".triangle7").hide();
	});


	$("#headlightsM").mouseenter(function() {
		$("#detail").load("mercedes/headlights.html");
		$(".triangle8").show();
	});
	$("#headlightsM").mouseleave(function() {
		$(".triangle8").hide();
	});


	$("#internal-thresholdsM").mouseenter(function() {
		$("#detail").load("mercedes/internal-thresholds.html");
		$(".triangle9").show();
	});
	$("#internal-thresholdsM").mouseleave(function() {
		$(".triangle9").hide();
	});


	$("#out-thresholdsM").mouseenter(function() {
		$("#detail").load("mercedes/out-thresholds.html");
		$(".triangle10").show();
	});
	$("#out-thresholdsM").mouseleave(function() {
		$(".triangle10").hide();
	});


	$("#doorsM").mouseenter(function() {
		$("#detail").load("mercedes/doors.html");
		$(".triangle11").show();
	});
	$("#doorsM").mouseleave(function() {
		$(".triangle11").hide();
	});


	$("#back-wingsM").mouseenter(function() {
		$("#detail").load("mercedes/back-wings.html");
		$(".triangle12").show();
	});
	$("#back-wingsM").mouseleave(function() {
		$(".triangle12").hide();
	});


	$("#hoodM").mouseenter(function() {
		$("#detail").load("mercedes/hood.html");
		$(".triangle13").show();
	});
	$("#hoodM").mouseleave(function() {
		$(".triangle13").hide();
	});


	$("#front-bumperM").mouseenter(function() {
		$("#detail").load("mercedes/front-bumper.html");
		$(".triangle14").show();
	});
	$("#front-bumperM").mouseleave(function() {
		$(".triangle14").hide();
	});


	$("#back-bumperM").mouseenter(function() {
		$("#detail").load("mercedes/back-bumper.html");
		$(".triangle15").show();
	});
	$("#back-bumperM").mouseleave(function() {
		$(".triangle15").hide();
	});
		
});


