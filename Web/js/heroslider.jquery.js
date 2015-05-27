// JavaScript Document

// Can also be used with $(document).ready() / $(window).load()
$(function() {

	(function($, window, document, undefined) {
	
		// Define plugin
		$.fn.heroSlider = function( options ) {
		
			// Overridable options
			options = $.extend( {}, $.fn.heroSlider.options, options );
		
			return this.each(function() {
				
				// Define variables
				var counter  = 0,
				    element  = $(this),
				    wrapper  = element.children('.slides'),
				    slide    = wrapper.children('li'),
				    slideCnt = slide.length,
				    navLink  = element.find('.slide-nav').find('li').find('a'),
				    prefix   = (/mozilla/.test(navigator.userAgent.toLowerCase()) && 
				               !/webkit/.test(navigator.userAgent.toLowerCase())) ? '-moz-' : 
				               (/webkit/.test(navigator.userAgent.toLowerCase())) ? '-webkit-' :
				               (/msie/.test(navigator.userAgent.toLowerCase()))   ? '-ms-' :
				               (/opera/.test(navigator.userAgent.toLowerCase()))  ? '-o-' : '';
				
				
				// Add active class to first slide
				navLink.first().addClass('active');
				
				
				// Auto play function (if selected options)
				if ( options.autoPlay === true ) {          
				 	console.log('autoplay true'); 
				 	
		 	        // Define play function
		 	        function play() {
		 	
		 	        }
		 	
		 	        // Instantiate our play function
		 	        play();
				 	
				}
				
				// Navigation function
				
				
				
				// Play function
				
				
			}); // End each function
		} // End define
		
		// Overridable default options
		$.fn.heroSlider.options = {
			animSpeed	: '0.5s',	// animation speed
			autoPlay	: true,		// auto play option
			autoDelay	: 4000,		// auto play duration
			hoverPause	: true		// auto play pause on hover
		}
		
	})(jQuery, window, document); // End function
	$('.slider').heroSlider();
});