$(document).ready(function(){
    var slideLeft =$('.studies__column__one');
    var slideRight =$('.studies__column__two');

    slideLeft.addClass( "slide-out-left" );
    slideRight.addClass( "slide-out-right" );

    $(window).scroll(function (event) {
         hT = slideLeft.offset().top,
        hH = slideLeft.outerHeight(),
        wheight = $(window).height(),
        scroll = $(this).scrollTop();
        if (scroll > (hT - wheight)) {
            slideLeft.removeClass("slide-out-left").addClass( "slide-in-left" );
            slideRight.removeClass("slide-out-right").addClass( "slide-in-right" );
        }
        else{
            slideLeft.addClass("slide-out-left");
            slideRight.addClass("slide-out-right");
        }
    });
  
  });

