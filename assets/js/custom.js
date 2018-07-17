(function ($) {
    "use strict";

    $(document).ready(function () {
        /*---------------------------------------------------
            Portfolio Filter
        ----------------------------------------------------*/
        // var Container = $('.container');
        // Container.imagesLoaded(function () {
        //     var portfolio = $('.portfolio-menu');
        //     portfolio.on('click', 'button', function () {
        //         $(this).addClass('active').siblings().removeClass('active');
        //         var filterValue = $(this).attr('data-filter');
        //         $grid.isotope({
        //             filter: filterValue
        //         });
        //     });
        //     var $grid = $('.portfolio-list').isotope({
        //         itemSelector: '.grid-item'
        //     });

        // });

        // Lazy load
        var allimages= document.getElementsByTagName('img');
        for (var i=0; i<allimages.length; i++) {
            if (allimages[i].getAttribute('data-src')) {
                allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
            }
        }

    });

    /*---------------------------------------------------
        Smooth Scroll
    ----------------------------------------------------*/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

    });

    /*---------------------------------------------------
        Click To Top
    ----------------------------------------------------*/
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 300) {
            $('#footer > .totop a').fadeIn();
        } else {
            $('#footer > .totop a').fadeOut();
        }

    });

    /*---------------------------------------------------
        Site Preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.site-preloader').fadeOut(500);
    });


}(jQuery));