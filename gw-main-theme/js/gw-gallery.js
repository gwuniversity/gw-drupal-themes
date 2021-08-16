// GW Gallery javascript additions
(function($) {

  // Views form updates javascript
  Drupal.behaviors.gw_gallery = {
    attach: function () {


      $('.slick-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        speed: 150,
        centerMode: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick-gallery',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true
      });


    }
  };

})(jQuery);
