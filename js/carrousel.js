var owl = $('.owl-carousel');
owl.owlCarousel({
	animateOut: 'fadeOut',
	items:1,
	autoplay:true,
	loop:true,
	autoplayHoverPause:true,
	nav    : false,
	autoplayTimeout:9000,
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
   
});