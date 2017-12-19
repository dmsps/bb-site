$(document).ready(function(){

	/* Video Banner */

	$('#main__video').vide('img/Push-The-Buttons', {
		muted: true,
	 	loop: true,
	 	autoplay: true,
	 	posterType: 'detect'
	});

	/* Video Banner */


	/* Portfolio */

	$('#grid-container').cubeportfolio({
		layoutMode: 'grid',
		mediaQueries: [{
			width: 1400,
			cols: 2,
		}, {
			width: 1200,
			cols: 2,
		}, {
			width: 992,
			cols: 2,
		}, {
			width: 768,
			cols: 2,
		}, {
			width: 480,
			cols: 1,
		}],
	    animationType: 'flipOutDelay',
	    gapHorizontal: 10,
	    gapVertical: 10,
	    gridAdjustment: 'responsive',
	    caption: 'overlayBottomReveal',
	    displayType: 'fadeIn',
	    displayTypeSpeed: 300
	});

	/* Portfolio */


	/* Clients */

	$('#js-grid-clients').cubeportfolio({
	    layoutMode: 'slider',
	    drag: true,
	    auto: true,
	    autoTimeout: 3000,
	    autoPauseOnHover: true,
	    showNavigation: false,
	    showPagination: true,
	    rewindNav: true,
	    scrollByPage: false,
	    gridAdjustment: 'responsive',
	    mediaQueries: [{
			width: 1400,
			cols: 5,
		}, {
			width: 1200,
			cols: 5,
		}, {
			width: 992,
			cols: 4,
		}, {
			width: 768,
			cols: 3,
		}, {
			width: 480,
			cols: 2,
		}],
	    gapHorizontal: 0,
	    gapVertical: 50,
	    caption: 'opacity',
	    displayType: 'fadeIn',
	    displayTypeSpeed: 100,
	});

	/* Clients */

});


(function() {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm_share",
        b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q);
    }
})();



