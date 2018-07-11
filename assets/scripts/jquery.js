$(document).ready(function () {
    $('.timer').countTo();

    $(document).ready(function () {
        $('.owl-carousel').owlCarousel();
    });

    new WOW().init();

    // $(".projects").isotope({
    //        itemSelector: '.work-item',
    //        layoutMode: 'fitRows',
    //    });
    //    
    //    $('ul.filter li').click(function(){ 
    //        
    //      $("ul.filter li").removeClass("active");
    //      $(this).addClass("active");        
    //
    //        var selector = $(this).attr('data-filter'); 
    //        $(".projects").isotope({ 
    //            filter: selector, 
    //
    //        }); 
    //      return false; 
    //    }); 

$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleClass('open');
	});
});

    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".header").css("background-color", "#0EB493");
        } else {
            $(".header").css("background-color", "rgba(16, 22, 54, 0.2)");
        }
    });
    
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
$(document).ready(function(){
				$('.logo').click(function(){
					$('.menu').toggleClass('show');
				});
			});
    
$('#back-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});
});
