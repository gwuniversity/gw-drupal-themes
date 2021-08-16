// Main javascript additions
(function($) {

  // Allow top level navbar links to link to their href.
  // @see https://stackoverflow.com/a/29633934
  // Drupal.behaviors.gw_main_theme_navbar_click = {
  //   attach: function (context, settings) {
  //     $('nav li.dropdown :first-child').on('click', function() {
  //       var $a = $(this).attr('href');
  //         if ($.length && $a) {
  //           location.href = $a;
  //         }
  //       });
  //     }
  //   };

  // Views form updates javascript
  Drupal.behaviors.gw_main_theme_views_form_updates = {
    attach: function () {

      // Add 'form-control' to custom-az-filter.
      $( '#edit-custom-az-filter' ).addClass( 'form-control' );

    }
  };


/*
 * Override bootstrap js to allow all navbar links to work.
 */
$('.navbar-side a[href]').click(function() {
    if (this.href) {
        location.href = this.href;
  }
});


})(jQuery);
