// Theme Javascript

(function($, Drupal) {
  // Create one time use variable.
  var initialized;

  /*
   * Clone the utility links into the 'mean menu' mobile menu.
   */
  function clone_utility_links() {
    $( ".gw-utility-links-left li" ).clone().removeClass("list-inline-item").addClass('mean-utility-left').appendTo( "#mobile-nav-ul" );
    $( ".gw-utility-links-right li" ).clone().removeClass("list-inline-item").addClass('mean-utility-right').appendTo( "#mobile-nav-ul" );
  }

  /* clear the utility links out of the mobile menu. */
  function clear_utility_links() {
    $( "li.mean-utility-left" ).remove();
    $( "li.mean-utility-right" ).remove();
  }

  /*
   * Function that is run once and only once.
   */
  function init() {

    var moved = false;

    $('#region-collapsible').hide();

    if (!initialized) {

      // Only run this code if initalized == true.
      initialized = true;

      // Add the 'enlivenem' class to the children of any
      // div with the 'use-enliven' class.
      $( "div.use-enliven>svg" ).addClass( "enlivenem" );

      // The image is hidden if the enliven class is available,
      // to prevent flashing. Show it now that the class is applied.
      $( "div.svg-field" ).show();


      // First check if the window is going to be mobile, if so, clone.
      if ($(window).width() < 940 ) {
        $( ".utility-links" ).hide();
          clone_utility_links();
          moved = true;
      }

      // Then check if the window is resized. If so, show as appropriate.
      $(window).resize(function() {

        if ($(window).width() < 940 ) {
          $( ".utility-links" ).hide();
          if (moved) {
            clone_utility_links();
            moved = false;
          }
        }
         else {
          $( ".utility-links" ).show();
          if (!moved) {
            clear_utility_links();
            moved = true;
           }
          }

      });

    }
  }

  // Main theme behavior, runs the once only init() function.
  Drupal.behaviors.gw_main_theme = {
    attach: function (context) {
      if (context !== document) {
        return;
      }
      init();
    }
  };

  // Search block toggle.
  Drupal.behaviors.gw_main_theme_search = {
    attach: function () {
      $( ".search-btn" ).click(function() {
        $('#block-searchbloxsearch').collapse('toggle');
      });
    }
  };

  // Mean Menu.
  Drupal.behaviors.gw_main_theme_mean_menu = {
    attach: function () {

      $('#menu-container').meanmenu({
        meanMenuContainer: 'div#navbar-main',
        meanScreenWidth: "940"
      });
    }
  };


}(jQuery, Drupal));


