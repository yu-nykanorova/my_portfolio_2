$(document).ready(function(){
	$('.skills__list').owlCarousel({
	  loop: true,
	  margin: 10,
	  nav: true,
	  responsive:{
		0:{
			items:2
		},
		300:{
			items:3
		},
		450:{
			items:4
		},
		576:{
			items:6
		},
		768:{
			items:8
		},
	  }
	});
  });
  