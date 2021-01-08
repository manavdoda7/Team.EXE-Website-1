console.log("Hello")

var firebaseConfig = {
    apiKey: "AIzaSyA5xtXY6mp2D8JSCDIKNtws10H6PZUfMeo",
    authDomain: "team-exe-website-1d1a2.firebaseapp.com",
    projectId: "team-exe-website-1d1a2",
    storageBucket: "team-exe-website-1d1a2.appspot.com",
    messagingSenderId: "156178981830",
    appId: "1:156178981830:web:74027e78a7382d226f48c7",
    measurementId: "G-W8W635B5T5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

getFromFirebaseAndRender()

var prevEventsTextsIndex = 0
var prevEventsTexts = []

$(document).ready(function() {

    $('#prev-events-carousel').carousel('pause')


    $("#move-down").click(function() {
        fullpage_api.moveTo(2);
    })
    // $('#move-down').css('opacity','0')
    // setTimeout(function() {
    //     $('#move-down').fadeIn();
    // }, 1500)

    $('.upcoming-event-card').hover(function() {
        $('.card-front').css('margin-top', '-300px')
    }, function() {
        $('.card-front').css('margin-top', '20px')
    })

    setInterval(function() {
        prevEventsTextsIndex = (prevEventsTextsIndex + 1) % prevEventsTexts.length
        $('#prev-events-carousel').carousel('next')
        $('#prev-events-text, #show-more-text').fadeOut(300, 'swing', () => {
            $('#prev-events-text').text(prevEventsTexts[prevEventsTextsIndex])
            $('#prev-events-text, #show-more-text').fadeIn(300)

        })
    }, 3000)
})

function getFromFirebaseAndRender() {
    let carouselCode = ''
    let i = 0
    db.collection("previously_conducted_events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            carouselCode += '<div class="carousel-item'
            if(i === 0){
                carouselCode += ' active'
            }
            carouselCode += `"><img src="${data.image}" class=" car-img d-block w-100" alt="..."></div>`
            prevEventsTexts.push(data.text)
            i++
        });
        $('.carousel-inner').html(carouselCode)
    });


    // db.collection("previously_conducted_events").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         let data = doc.data()
            
    //     });
    // });

}

$.when($.ready)
.then(function(){
    
})

// document.onreadystatechange = function () {
//     var state = document.readyState
//     if (state == 'interactive') {
//     } else if (state == 'complete') {
//         // setTimeout(function(){
//           document.getElementById("loading").classList.remove("animated");
//           document.getElementById("loading").classList.remove("fadeOut");
//           document.getElementById("loading").style.display = "none";
//   }}

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function resize() {
    var box = c.getBoundingClientRect();
    c.width = box.width;
    c.height = box.height;
}

var light = {
    x: 160,
    y: 200
}

var colors = ["#fff"];

function drawLight() {
    ctx.beginPath();
    ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
    var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
    // gradient.addColorStop(0, "#3b4654");
    // gradient.addColorStop(1, "#2c343f");
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
    gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
    // gradient.addColorStop(0, "#fff");
    // gradient.addColorStop(1, "#3b4654");
    ctx.fillStyle = gradient;
    ctx.fill();
}

function Box() {
    this.half_size = Math.floor((Math.random() * 3) + 1);
    this.x = Math.floor((Math.random() * c.width) + 1);
    this.y = Math.floor((Math.random() * c.height) + 1);
    this.r = Math.random() * Math.PI;
    this.shadow_length = 0;
    this.color = colors[Math.floor((Math.random() * colors.length))];

    this.getDots = function() {

        var full = (Math.PI * 2) / 4;


        var p1 = {
            x: this.x + this.half_size * Math.sin(this.r),
            y: this.y + this.half_size * Math.cos(this.r)
        };
        var p2 = {
            x: this.x + this.half_size * Math.sin(this.r + full),
            y: this.y + this.half_size * Math.cos(this.r + full)
        };
        var p3 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 2),
            y: this.y + this.half_size * Math.cos(this.r + full * 2)
        };
        var p4 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 3),
            y: this.y + this.half_size * Math.cos(this.r + full * 3)
        };

        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    }
    this.rotate = function() {
        var speed = (20 - this.half_size) / 20;
        this.r += speed * 0.002;
        this.x += speed;
        this.y += speed;
    }
    this.draw = function() {
        var dots = this.getDots();
        ctx.beginPath();
        ctx.moveTo(dots.p1.x, dots.p1.y);
        ctx.lineTo(dots.p2.x, dots.p2.y);
        ctx.lineTo(dots.p3.x, dots.p3.y);
        ctx.lineTo(dots.p4.x, dots.p4.y);
        ctx.fillStyle = this.color;
        ctx.fill();


        if (this.y - this.half_size > c.height) {
            this.y -= c.height + 100;
        }
        if (this.x - this.half_size > c.width) {
            this.x -= c.width + 100;
        }
    }
    this.drawShadow = function() {
        var dots = this.getDots();
        var angles = [];
        var points = [];

        for (dot in dots) {
            var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
            var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
            var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
            angles.push(angle);
            points.push({
                endX: endX,
                endY: endY,
                startX: dots[dot].x,
                startY: dots[dot].y
            });
        };

        for (var i = points.length - 1; i >= 0; i--) {
            var n = i == 3 ? 0 : i + 1;
            ctx.beginPath();
            ctx.moveTo(points[i].startX, points[i].startY);
            ctx.lineTo(points[n].startX, points[n].startY);
            ctx.lineTo(points[n].endX, points[n].endY);
            ctx.lineTo(points[i].endX, points[i].endY);
            ctx.fillStyle = "#2c343f";
            ctx.fill();
        };
    }
}

var boxes = [];

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawLight();

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].rotate();
        boxes[i].drawShadow();
    };
    for (var i = 0; i < boxes.length; i++) {
        collisionDetection(i)
        boxes[i].draw();
    };
    requestAnimationFrame(draw);
}

resize();
draw();

while (boxes.length < 40) {
    boxes.push(new Box());
}

window.onresize = resize;
// c.onmousemove = function(e) {
//     light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
//     light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
// }


function collisionDetection(b){
	for (var i = boxes.length - 1; i >= 0; i--) {
		if(i != b){
			var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
			var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
			var d = Math.sqrt(dx * dx + dy * dy);
			if (d < boxes[b].half_size + boxes[i].half_size) {
			    boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
			    boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
			}
		}
	}
}


// For the animation



async function getQuotes() {

    let url = 'https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/backup/quotes.json';

    let response = await fetch(url);
    let json = await response.json();

    // console.log(json);

    json = json[Math.floor(Math.random() * (json.length + 1))];

    let quote =  {
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

getQuotes();

setInterval(getQuotes, 66000);