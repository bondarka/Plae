$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    };
    $('body').removeClass('loaded');

    $('.top-header_list').slick({
        dots: true,
        arrows: false,
        fade: true
    });
    $('.slider_list').slick({
        dots:false,
        arrows: true,
        fade: true
    });

    $(".dropdown").click(function(event) {
        event.stopPropagation();
        $('.menu_dropdown-link').removeClass('open').next().slideUp();
        $(this).addClass('open');
        $(this).next().slideDown();

    })

    $(document).click(function(){
        $('.dropdown').removeClass('open').next().slideUp();
    })


    $(".top-header_menutoggle").click(function() {
        $(".show:not(.menu)").removeClass('show');
        $(".menu").toggleClass('show');
    })

    $(".top-header_search").click(function() {
        $(".show:not(.top-navigation_search)").removeClass('show');
        $(".top-navigation_search").toggleClass('show');

    })

    $(".top-header_phone").click(function() {
        $(".show:not(.top-navigation_contact)").removeClass('show');
        $(".top-navigation_contact").toggleClass('show');
    })

    $(".top-header_market").click(function() {
        $(".show:not(.profile)").removeClass('show');
        $(".profile").toggleClass('show');
    })


});
/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */
$(function() {
    /* placeholder*/
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() { $(this).attr('placeholder', ''); });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    $('.button-nav').click(function() {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });


});

var handler = function() {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    $('.content').css({ 'padding-bottom': height_footer + 40, 'padding-top': height_header + 40 });


    var viewport_wid = viewport().width;

    if (viewport_wid <= 991) {

    }

}

// $(window).bind('load', handler);
// $(window).bind('resize', handler);
