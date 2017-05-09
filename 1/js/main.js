$(document).ready(function() {
	$('.products_slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText: ['<img src="img/arrow_left.png">', '<img src="img/arrow_right.png">'],
		responsive: {
			320: {
				items: 2,
				margin: 13,
				nav: false,
				center: true
			},

			768: {
				items: 5,
				margin: 14,
				
			},

			1600: {
				items: 6,
				margin: 14
			}
		}
	});

	$('.inst_slider').owlCarousel({
		loop: true,
		nav: false,
		responsive: {
			320: {
				items: 2,
				center: true,
				margin: 14
			},

			768: {
				items: 5,
				margin: 14
			},

			1600: {
				items: 5,
				margin: 24
			}
		}
	});

	$('.quem_slider').owlCarousel({
		loop: true,
		nav: false,
		responsive: {
			320: {
				items: 2,
				center: true,
				margin: 17
			},

			768: {
				items: 4,
				margin: 18
			},

			1600: {
				items: 4,
				margin: 28
			}
		}
	});

	$('.menu_icon').click(function() {
		$('menu').slideDown(500, function() {
			$('menu').css('display', 'block');
		});

		$('.main-background').fadeIn(500, function() {
			$('.main-background').css('display', 'block');
		})
	});

	$('.close').click(function() {
		$('menu').slideUp(500, function() {
			$('menu').css('display', 'none');
		});
			
		$('.main-background').fadeOut(500, function() {
			$('.main-background').css('display', 'none');
		})
	});

	$('.main-menu li .icon').click(function() {
		if(($(this).closest('li').children('.sub-menu')).length===0) {
			return;
		}

		$(this).toggle();
		($(this).closest('li')).find('.icon2').toggle();
		($(this).closest('li')).find('.sub-menu').toggle('slow');
		$('menu').css('overflow-y', 'scroll');
	});

	$('.main-menu li .icon2').click(function() {
		$(this).toggle();
		($(this).closest('li')).find('.icon').toggle();
		($(this).closest('li')).find('.sub-menu').toggle('slow');
		$('menu').css('overflow-y', 'hidden');
	})

	$('.basket_icon').click(function() {
		$('.basket').slideDown(500, function() {
			$('.basket').css('display', 'block');
		});
			
		$('.main-background').fadeIn(500, function() {
			$('.main-background').css('display', 'block');
		})
	});

	$('.basket').mouseleave(function() {
		$('.basket').slideUp(500, function() {
			$('.basket').css('display', 'none');
		});
			
		$('.main-background').fadeOut(500, function() {
			$('.main-background').css('display', 'none');
		});
	});	
});


