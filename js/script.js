$(document).ready(function(){
	$(function(){
		$('.purchase').hide();
		$('.content-block:not(:last-child)').mouseenter(function(){ 
			$(this).find('.purchase').fadeIn(100);
		});
		$('.content-block:not(:last-child)').mouseleave(function(){ 
			$(this).find('.purchase').fadeOut(100);
		});
	});
});

$(document).ready(function(){
	var kredit = $('.custom-kredit');
	var dollar = $('.custom-dollar');
	kredit.keyup(function() {
			dollar.val((kredit.val()/71.77).toFixed(2) + ' $');
	});
});