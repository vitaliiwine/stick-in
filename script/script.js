// Get the current year

$('#year').text(new Date().getFullYear());

// Init scroll spy

$('body').scrollspy({target: '#main-nav'});

// Smooth scrolling

$("#main-nav a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }

});

$(document).scroll(function () {
    console.log("kek")
    if ($(document).scrollTop() > 100)
        $("#main-nav").removeClass("swag")
    else
        $("#main-nav").addClass("swag")
});