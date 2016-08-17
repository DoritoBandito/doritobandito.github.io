$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors:['home', 'con-one', 'con-two', 'con-three']
    });

    var quotes = $(".revolving-text");
    var quoteIndex = -1;

    $(".navbar-header a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
    })

    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    /*function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(4000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();*/

});