$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header_menu').click(function() {
        $('.header_burger, .header_menu').removeClass('active');
        $('body').removeClass('lock');
    });
    // $('.#ul li').on('click', function() {
    //    $('.header_link').addClass('.visit');
    // });

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

    });
});

new WOW().init();

/*jQuery(window).load(function() {
    jQuery('#status').fadeOut();
    jQuery('#preloader').delay(500).fadeOut('slow');
    setTimeout(function() {
        new WOW().init();
    }, 1000);
}
})*/

function initMap() {
    var pos = {
        lat: 50.023999,
        lng: 14.428404
    }
    var option = {
        center: pos,
        zoom: 13,
    };
    var myMap = new google.maps.Map(document.getElementById('map_canvas'), option);
}
var marker = new google.maps.Marker({
    position: pos,
    map: myMap
});