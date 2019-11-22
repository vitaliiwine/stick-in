// // Get the current year
//
// $('#year').text(new Date().getFullYear());
//
// // Init scroll spy
//
// $('body').scrollspy({target: '#main-nav'});
//
// // Smooth scrolling
//
// $("#main-nav a").on('click', function (event) {
//     if (this.hash !== "") {
//         event.preventDefault();
//
//         const hash = this.hash;
//
//         $('html, body').focus()animate(yyyy{
//             scrollTop: $(hash).offset().top
//         }, 800, function () {
//             window.location.hash = hash;
//         });
//     }
//
// });
//
// $(document).scroll(function () {
//     if ($(document).scrollTop() > 100)
//         $("#main-nav").removeClass("color-change")
//     else
//         $("#main-nav").addClass("color-change")
// });