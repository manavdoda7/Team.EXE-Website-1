
var prevEventsTextsIndex = 0
// var prevEventsTexts = []     moved to index.html

$(document).ready(function () {

    $('.nav-item-home').addClass('active')

    $('#prev-events-carousel').carousel('pause')

    // $('.upcoming-event-card').hover(function () {
    //     $('.card-front').css('margin-top', '-300px')
    // }, function () {
    //     $('.card-front').css('margin-top', '20px')
    // })

    setInterval(function () {
        prevEventsTextsIndex = (prevEventsTextsIndex + 1) % prevEventsTexts.length
        $('#prev-events-carousel').carousel('next')
        $('#prev-events-text, #show-more-text').fadeOut(300, 'swing', () => {
            $('#prev-events-text').text(prevEventsTexts[prevEventsTextsIndex])
            $('#prev-events-text, #show-more-text').fadeIn(300)

        })
    }, 3000)
})


async function getQuotes() {

    let url = 'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json';

    let response = await fetch(url);
    let json = await response.json();

    // console.log(json);

    json = json[Math.floor(Math.random() * (json.length + 1))];

    let quote = {
        text: json["en"] + "\n",
        author: json["author"]
    };

    console.log(quote);

    let quote_fills = document.querySelectorAll(".dynamic-quote");
    let author_fills = document.querySelectorAll(".dynamic-author");

    quote_fills.forEach(quotes_fill => {
        quotes_fill.innerHTML = quote.text;
    });

    author_fills.forEach(author_fill => {
        author_fill.innerHTML = quote.author;
    });
}

// getQuotes();

// setInterval(getQuotes, 66000);


// ################# Dynamic Crousal ###############

$('.owl-carousel').owlCarousel({
    // items: 3,
    nav: true,
    // dots: true,
    loop: true,
    // autoHeight: true,

    // lazyLoad: true,
    margin: 50,
    stagePadding: 20,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false
        },
        485: {
            items: 1,
            dots: true,
            nav: false
        },
        728: {
            items: 2,
            dots: true,
            nav: true
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