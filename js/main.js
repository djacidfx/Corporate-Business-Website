
(function ($) {
    "use strict";
	
	new WOW().init();
	
	jQuery(document).ready(function($){	
	
		/*START MENU JS*/
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	
			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/	
	

		//  main slider
		var mainSlider = $('#main_slider');
	
		/*----- Start Main Slider -----*/
			mainSlider.nivoSlider({
				directionNav: true,
				animSpeed: 500,
				slices: 18,
				pauseTime: 50000000,
				pauseOnHover: false,
				controlNav: true,
				prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
				nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
			});	
		/*----- End Main Slider -----*/
	
  });		
  
  
		
		
    // jQuery MixItUp
    $('.portfolio_item').mixItUp();
	
	    // jQuery Lightbox
    $('.lightbox').venobox({
        numeratio: true,
        infinigall: true
    });
	
	/*---------------------
	 statistics-counter
	--------------------- */	
    $('.counter').counterUp({
        delay: 50,
        time: 3000
    });	
		
    /*-----------------------------
    Loader activation here. 
    -------------------------------*/
    $("#fakeloader").fakeLoader({
        timeToHide:1500, 
        zIndex:999999, 
        spinner:"spinner1",   //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:"#ffffff"
    });		
	
})(jQuery);