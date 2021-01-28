

$(document).ready(function () {
    $('.nav-item-alumni').addClass('active');

    var breakpoint = 0
  
    // If the screen is smaller then 840px wide remove all classes.
    if ($(window).width() < breakpoint) {
        $('.js-slidein').removeClass('js-slidein')
    }
  
    // Check which of the elements with this class is visible on the page
    $('.js-slidein').each(function (i) {
        var bottomObject = $(this).offset().top
        var bottomWindow = $(window).scrollTop() + $(window).height()
    
        if (bottomWindow > bottomObject) {
            $(this).addClass('js-slidein-visible')
        }
    })
  
    // Trigger the slide-in effect on scroll
    $(window).scroll(function () {
        let delay = 0
        $('.js-slidein').each(function (i) {
            var bottomObject = $(this).offset().top + $(this).outerHeight() / 3
            var bottomWindow = $(window).scrollTop() + $(window).height()
    
            if (bottomWindow > bottomObject) {
                if($(this).hasClass('js-slidein-visible') == false && $(this).hasClass('js-slidein-delay') == false){
                    $(this).addClass('js-slidein-delay')
                        setTimeout(() => {
                        console.log(delay)
                        $(this).addClass('js-slidein-visible')
                        $(this).removeClass('js-slidein-delay')
                    }, delay)
                    delay += 100
                }
            }else {
                $(this).removeClass('js-slidein-visible')
            }
        })
    })
})
