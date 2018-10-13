/*
------------------------------------------------------------------------
* Template Name    : Responsive Bootstrap 4 Personal Template * 
* Author           : Shohag Hossain                                        *
* Version          : 1.0.0                                             *
* Created          : Novembar 2018                                      *
* File Description : Portfolio Template                     *
*-----------------------------------------------------------------------
*/

/*** animate on scroll ***/
$(window).on('scroll',function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("stickyadd");
    } else {
        $(".sticky").removeClass("stickyadd");
    }
});

$('.nav-item a, .scroll_down a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


/*** magnificPopup image ***/
$('.img-zoom').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});

/*** loading..... ***/
var loader = $(".loader");
var wHeight = $(window).height();
var wWidth = $(window).width();
var o = 0;

loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
})

do {
    loader.animate({
        width: o
    }, 10)
    o += 3;
} while (o <= 400)
if (o === 402) {
    loader.animate({
        left: 0,
        width: '100%'
    })
    loader.animate({
        top: '0',
        height: '100vh'
    })
}
setTimeout(function() {
    $(".loader-wrapper").fadeOut('fast');
    (loader).fadeOut('fast');
}, 3500);

/*** back to top ***/
$('.back_top').on('click',function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});