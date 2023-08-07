$(function(){

$('.slider__photo').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<img class="slider__arrow slider__arrow-prev" src="./images/hockeyvector.svg" alt="arrow-prev">',
    nextArrow: '<img class="slider__arrow slider__arrow-next" src="./images/hockeyvector.svg" alt="arrow-next">',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      }
    ]
  });

  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();

    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });

});
