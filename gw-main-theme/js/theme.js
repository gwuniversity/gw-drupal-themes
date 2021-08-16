// Theme Javascript

(function($, Drupal) {


  // Create one time use variable.
  var initialized;

  /*
   * Move the utility links to the navbar.
   */
  function move_utility_links() {
    // Check the window width.
    var responsive_viewport = $(window).width();

    // If the width is smaller than 577:
    if (responsive_viewport < 577) {
      // Remove the utility links, append them to the navbar.
      $( ".gw-utility-links" ).detach().appendTo( "nav.gw-multilevel-navbar" );

    }
    else {
      // Else, put them back.
      $( ".gw-utility-links" ).detach().appendTo( "section.region-utility-links" );

    }
  }

  function init() {
    if (!initialized) {

      // Only run this code if initalized == true.
      initialized = true;

      // Move the utility links.
      move_utility_links();

      // Add the 'enlivenem' class to the children of any
      // div with the 'use-enliven' class.
      $( "div.use-enliven>svg" ).addClass( "enlivenem" );

      // The image is hidden if the enliven class is available,
      // to prevent flashing. Show it now that the class is applied.
      $( "div.svg-field" ).show();

      // On window resize, run move_utility_links().
      $(window).resize(function() {
        move_utility_links();
      });

    }
  }

  // Main theme behavior.
  Drupal.behaviors.gw_main_theme = {
    attach: function (context) {

      if (context !== document) {
        return;
      }
      init();
    }
  };

  // // Sticky Nav behavior.
  // Drupal.behaviors.sticky_nav = {
  //   attach: function () {

  //     // Scroll to 95 and add the fixed-top class.
  //     // Toggle the hidden navbar brand button.
  //     // Copy the call to action button into the nav.
  //     $(window).on('scroll', function(){
  //       if($(window).scrollTop()>=95 && !$('nav.gw-multilevel-navbar').hasClass('fixed-top')){
  //           $( "nav.gw-multilevel-navbar" ).addClass('fixed-top');
  //           $( "a.navbar-brand" ).toggle();
  //           $( "button.gw-header-button" ).clone().appendTo( "nav.gw-multilevel-navbar" );
  //           $( "div#block-breadcrumbs" ).toggle();
  //           $( "#nav-search-form").insertAfter( "nav.gw-multilevel-navbar");
  //       }
  //       // Undo everything if unscrolled.
  //       else if($(window).scrollTop()<95 && $('nav.gw-multilevel-navbar').hasClass('fixed-top')){
  //          $( "nav.gw-multilevel-navbar" ).removeClass('fixed-top');
  //          $( "a.navbar-brand" ).toggle();
  //          $( "nav.gw-multilevel-navbar .gw-header-button" ).detach();
  //          $( "div#block-breadcrumbs" ).toggle();
  //       }
  //   });

  //   }
  // };

  /*
   * Override bootstrap js to allow all navbar links to work.
   */
  $('.navbar-side a[href]').click(function() {
      if (this.href) {
        location.href = this.href;
    }
  });


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



}(jQuery, Drupal));


