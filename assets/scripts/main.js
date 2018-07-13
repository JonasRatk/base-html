$(document).ready(function () {
    $('.timer').countTo();


    new WOW().init();
    
$(document).ready(function(){
				$('.burger').click(function(){
					$('.menu').toggleClass('show');
				});
			});


    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".header").css("background-color", "#0EB493");
        } else {
            $(".header").css("background-color", "rgba(16, 22, 54, 0.2)");
        }
    });
    
    
   $(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});
    
$('.menu').on('click', 'li', function() {
    $('.menu li.active').removeClass('active');
    $(this).addClass('active');
});
    
$(document).ready(function() {
  $('#filter li a').click(function() {
    var ourClass = $(this).attr('class');
    $('#filter li').removeClass('active');
    $(this).parent().addClass('active');
    if(ourClass == 'all') {
//        console.log($('#projects .web-item'));
      $('#projects .work-item').show();
    }
    else {
      $('#projects').children('div:not(.' + ourClass + ')').hide();
      $('#projects').children('div.' + ourClass).show();
    }
    return false;
  });
});
    

    
    
});
