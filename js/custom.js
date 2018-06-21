(function($) {

	var $fotoTopo = $('#foto-topo-anime');
	TweenMax.from($fotoTopo, 0.5, {opacity: 0,
									y: -200,
									delay: 1,
									ease:Elastic.easeOut});

	var $header = $('#header');
	TweenLite.from($header, 0.5, {opacity: 0, x: -200,
									ease:Elastic.easeOut,
									delay: 1.1});

	var $toptext = $('#anime-top-text');
	TweenLite.from($toptext, 0.5, {opacity: 0,
									x: -200,
									ease:Expo.easeIn,
									delay: 1});
	
	var $redShape = $('#red-shape-anime-entry');
	TweenMax.to($redShape, 0.8, {scaleY: 0,
								y: 450,
								delay: 1,
								ease:Expo.easeOut});

})(jQuery);



