$('.slider__photo').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
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

$('#fullpage').fullpage({
  //options here
  autoScrolling: true,
  // scrollHorizontally: true,
  sectionSelector: '.section__contents',
  loopBottom: true,
  loopTop: true,
  anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'],
  responsiveWidth: 800,
});

$(function(){
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
