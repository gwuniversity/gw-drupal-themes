// Views javascript additions
(function($) {

  // Views form updates javascript
  Drupal.behaviors.gw_main_theme_views_form_updates = {
    attach: function () {

      // Add 'form-control' to custom-az-filter.
      $( '#edit-custom-az-filter' ).addClass( 'form-control' );

    }
  };


})(jQuery);
