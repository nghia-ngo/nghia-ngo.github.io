(function ($) {
    "use strict";

    $(document).ready(function () {
        // Lazy load
        var allimages= document.getElementsByTagName('img');
        for (var i=0; i<allimages.length; i++) {
            if (allimages[i].getAttribute('data-src')) {
                allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
            }
        }

        //Popup
        $('#certificate-net').magnificPopup({
            items:
            {
                src: 'assets/files/dotnet.pdf',  
            },
            type:'iframe'
        });

        $('#certificate-java').magnificPopup({
            items:
            {
                src: 'assets/files/java.pdf',  
            },
            type:'iframe'
        });

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