function addRemoveActive(anchor) {
    $(".nav").find(".active").removeClass("active");
    $(anchor).parent().addClass("active");
}

$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors:['home', 'about', 'work', 'contact'],
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

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});