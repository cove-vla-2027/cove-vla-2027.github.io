window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  $('.navbar-burger').click(function() {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  if (typeof bulmaCarousel !== 'undefined') {
    bulmaCarousel.attach('.gallery-carousel', {
      slidesToScroll: 1,
      slidesToShow: window.innerWidth < 768 ? 1 : 3,
      loop: false,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 3000,
    });
  }

  if (typeof bulmaSlider !== 'undefined') {
    bulmaSlider.attach();
  }
});
