$(document).ready(function() {

    var quotes = $(".revolving-text");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(4000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

});