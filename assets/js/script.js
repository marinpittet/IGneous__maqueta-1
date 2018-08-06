$(function(){
	// animacion de desplazamiento    
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 50
			}, 1000);
		}
	});
	// start Toggleable Navbar
	$('.navbar__toggle').click(function() {


		$('.sidenav--close').addClass('sidenav--open');


		var sidewidth = $('.sidenav--open').css('width');


		if (sidewidth === '0px') {
			$('.navbar__toggle .fa-bars').animate({
				opacity: 0
			}, 100);
			$('.sidenav--open').css('width', '100%');
			$('.navbar__toggle .fa-bars').css('display', 'none');
			$('.navbar__toggle .fa-times').css('display', 'block');
			$('.navbar__toggle .fa-times, .sidenav__items').animate({
				opacity: .8
			}, 100);
		} else {
			$('.navbar__toggle .fa-times').animate({
				opacity: 0
			}, 100);
			$('.sidenav__items').css('opacity', '0');
			$('.sidenav--open').css('width', '0px');
			$('.navbar__toggle .fa-times').css('display', 'none');
			$('.navbar__toggle .fa-bars').css('display', 'block');
			$('.navbar__toggle .fa-bars').animate({
				opacity: .8
			}, 100);
		}

	})

	$('.sidenav__items').click(function() {
		$('.navbar__toggle .fa-times').animate({
			opacity: 0
		}, 100);
		$('.sidenav__items').css('opacity', '0');
		$('.sidenav--open').css('width', '0px');
		$('.navbar__toggle .fa-times').css('display', 'none');
		$('.navbar__toggle .fa-bars').css('display', 'block');
		$('.navbar__toggle .fa-bars').animate({
			opacity: .8
		}, 100);
	})
    // end Toggleable Navbar

    // start navbar opacity and parallax
    $(window).scroll(function() {
    	navbar();
    	parallax();
    })

    function navbar() {
    	var wScroll = $(window).scrollTop();

    	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    		$('.navbar').css({
    			backgroundColor: 'rgba(255,255,255,1)',
    			borderBottom: 'solid 1px #00A599'
    		});
    		$('.dropdown-content').css({
    			borderRadius: '0px 0px 5px 5px',
    			backgroundColor: 'rgba(9, 153, 188, 0.9)'
    		});
    	} else {
    		$('.navbar').css({
    			backgroundColor: 'rgba(255,255,255,0)',
    			borderBottom: 'none'
    		});
    		$('.dropdown-content').css({
    			borderRadius: '5px',
    			backgroundColor: 'rgba(9, 153, 188, 0.5)'
    		});
    	}
    }

    function parallax() {
    	var wScroll = $(window).scrollTop();

    	$('.hero-body').css('background-position', '50%'+(50-(wScroll*.5))+'%')
    }
    // end navbar opacity and parallax

    //start section toggle visibility with buttons mision and equipo
    $('#mision').click(function(e){
    	e.preventDefault();

    	var mision = $('.mision');
    	var team = $('.team');

    	team.fadeOut('slow', function() {
    		team.css('display', 'none');
    		mision.fadeIn('slow');
    		mision.css('display', 'block');
    	});	
    })

    $('#equipo').click(function(e){
    	e.preventDefault();

    	var mision = $('.mision');
    	var team = $('.team');

    	mision.fadeOut('slow', function() {
    		mision.css('display', 'none');
    		team.fadeIn('slow');
    		team.css('display', 'block');
    	});	
    })
    //end section toggle visibility with buttons mision and equipo

     //start section toggle visibility with buttons estrategia y proceso
     $('#invest').click(function(e){
     	e.preventDefault();

     	$('#select').removeClass('is-active');
     	$('#invest').addClass('is-active');

     	var invest = $('.estrategia__detail');
     	var selection = $('.estrategia__proceso');

     	selection.fadeOut('slow', function() {
     		selection.css('display', 'none');
     		invest.fadeIn('slow');
     		invest.css('display', 'block');
     	});	
     })

     $('#select').click(function(e){
     	e.preventDefault();

     	$('#invest').removeClass('is-active');
     	$('#select').addClass('is-active');

     	var invest = $('.estrategia__detail');
     	var selection = $('.estrategia__proceso');

     	invest.fadeOut('slow', function() {
     		invest.css('display', 'none');
     		selection.fadeIn('slow');
     		selection.css('display', 'block');
     	});	
     })
    //end section toggle visibility with buttons estrategia y proceso

})