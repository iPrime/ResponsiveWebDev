// JavaScript Document

// Can also be used with $(document).ready() / $(window).load()
$(document).ready(function() {

	// Toggle menu
	$(function() {
		var pull 		= $('#nav-toggle');
			menu 		= $('#listnav');
			menuHeight	= menu.height();
	
		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
	
		$(window).resize(function(){
			var w = $(window).width();
			if(w > 320 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
	});
		
	// Filter option
	// Variable 
	var posts = $('#activiteiten .post');
		posts.hide().filter('[data-cat="rondvaart"]').show();
		
	// Click function
	$('#category li a').click(function() { 
		// Change active class
	    $('li a').removeClass();
		$(this).addClass('current-cat');

		// Get data of category
		var customType = $(this).data('filter'); // Category
			console.log(customType);
			console.log(posts.length); // Length of articles
			
		posts.hide().filter(function () {
			return $(this).data('cat') === customType;
		}).show();

	});
	

	// Accordion
	$('.accordion header').click(function(e) {
		e.preventDefault();
		
		// Remove / add class close
		$('.accordion header').removeClass();
		$(this).addClass('close');

		if($(this).next('article').is(':visible')){
			$(this).next('article').slideUp('slow');
			$('.accordion header').removeClass();
		} else {
			$('.accordion .hide-list').slideUp('slow');
			$(this).next('article').slideToggle('slow');
		}
		
		return false;
	});
	

	var src = $('#tour figure.grid_12 img');
	
	src.each(function(){
		alert($(this).attr('src'));
		$(this).clone().appendTo($('.page-hero'));
	});
	
	//console.log(src);

	// Nice animation for scroll to top
	$('.backtotop').click(function () {
		$('html, body').animate({
			scrollTop: '0px'
		},
			1250);
		return false;
	});
	
});