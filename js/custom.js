(function($) {

	var $fotoTopo = $('#foto-topo-anime');
	TweenMax.from($fotoTopo, 0.5, {opacity: 0,
									y: -200,
									ease:Expo.easeIn});

	var $header = $('#header');
	TweenLite.from($header, 0.5, {opacity: 0, x: -200,
									ease:Expo.easeIn,
									delay: 0.1});

	var $toptext = $('#anime-top-text');
	TweenLite.from($toptext, 0.5, {opacity: 0,
									x: -200,
									ease:Expo.easeIn,
									delay: 0.3});
	
	var $redShape = $('#red-shape-anime-entry');
	TweenMax.to($redShape, 0.8, {scaleY: 0,
								y: 450,
								ease:Expo.easeOut});

})(jQuery);



