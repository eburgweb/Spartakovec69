$('.slider__photo').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
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
