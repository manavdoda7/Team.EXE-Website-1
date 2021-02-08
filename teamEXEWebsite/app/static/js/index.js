
var prevEventsTextsIndex = 0
// var prevEventsTexts = []     moved to index.html

$(document).ready(function () {

    $('.nav-item-home').addClass('active')

    $('#prev-events-carousel').carousel('pause')

    setInterval(function () {
        prevEventsTextsIndex = (prevEventsTextsIndex + 1) % prevEventsTexts.length
        $('#prev-events-carousel').carousel('next')
        $('#prev-events-text, #show-more-text').fadeOut(300, 'swing', () => {
            $('#prev-events-text').text(prevEventsTexts[prevEventsTextsIndex])
            $('#prev-events-text, #show-more-text').fadeIn(300)

        })
    }, 3000)
})

// ################# Dynamic Crousal ###############

$('.owl-carousel').owlCarousel({
    nav: false,
    loop: true,
    dots: false,

    // autoHeight: true,
    // lazyLoad: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 50,

    stagePadding: 20,
    navContainer: '.main-content .custom-nav',
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1,
            // dots: true,
            nav: false
        },
        485: {
            items: 1,
            // dots: true,
            nav: false
        },
        728: {
            items: 2,
            // dots: true,
            // nav: true
        },
        992: {
            items: 3
        }
    }
});

// $('.card-content').matchHeight();

$('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
})



    // Setting the nav postion carousal.......

function set_nav_postion(sizing) {
    prev = document.querySelector('.owl-prev');
    next = document.querySelector('.owl-next');

    prev.style.left = (sizing.left - 30) + 'px';
    next.style.left = (sizing.left + sizing.width - 20) + 'px';

}

$(document).ready(function () {
    let carousel = document.querySelector('.owl-stage-outer')
    const sizing = carousel.getBoundingClientRect();
    // console.log(sizing);
    set_nav_postion(sizing);
});

$(window).resize(function() {

    let carousel = document.querySelector('.owl-stage-outer')
    const sizing = carousel.getBoundingClientRect();
    // console.log(sizing);
    set_nav_postion(sizing);

});