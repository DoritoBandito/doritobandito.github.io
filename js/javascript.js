function addRemoveActive(anchor) {
    $(".nav").find(".active").removeClass("active");
    $(anchor).parent().addClass("active");
}

$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors:['home', 'about', 'con-two', 'con-three'],
        menu: '#menu'
    });

    var quotes = $(".revolving-text");
    var quoteIndex = -1;

    $(".navbar-header a").on("click", function() {
        $(".nav").find(".active").removeClass("active");
    })

    $(".nav a").on("click", function() {
        addRemoveActive(this);
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