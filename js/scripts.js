console.log("Hello")

$(document).ready(function() {
    $("#move-down").click(function() {
        fullpage_api.moveTo(2);
    })
    // $('#move-down').css('opacity','0')
    // setTimeout(function() {
    //     $('#move-down').fadeIn();
    // }, 1500)
})