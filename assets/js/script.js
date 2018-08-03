$(function(){
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
    			borderRadius: '0px 0px 5px 5px'
    		});
		} else {
			$('.navbar').css({
				backgroundColor: 'rgba(255,255,255,0)',
				borderBottom: 'none'
			});
			$('.dropdown-content').css({
    			borderRadius: '5px'
    		});
		}
	}

	function parallax() {
		var wScroll = $(window).scrollTop();

		$('.hero-body').css('background-position', '0%'+(50-(wScroll*1))+'%')
	}
    // end navbar opacity and parallax

})