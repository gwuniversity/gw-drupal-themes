<?php

/**
 * @file
 * Functions to support theming media entities in the Particle theme.
 */

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function gw_main_theme_theme_suggestions_image_alter(array &$suggestions, array $variables) {

}

/**
 * Implements hook_preprocess_HOOK().
 *
 * Add variables to the node--varbase-heroslider-media.html.twig template.
 */
function gw_main_theme_preprocess_node__varbase_heroslider_media(&$variables) {

}

/**
 * Implements hook_preprocess_HOOK().
 *
 * Add variables to the field--svg_image_field.html.twig template.
 */
function gw_main_theme_preprocess_field__svg_image_field(&$variables) {

  // Get the SVG object.
  $obj = $variables['element']['#object'];

  if ($obj->hasField('field_use_enliven_library')) {

    // Get the value of the 'field_use_enliven_library'.
    $obj->get('field_use_enliven_library')->value;

    // Return that value to the template.
    $variables['items']['#enliven'] = $obj->get('field_use_enliven_library')->value;
  }

}

/**
 * Implements hook_preprocess_preprocess_media().
 *
 * Update properties of a media object.
 */
function gw_main_theme_preprocess_media(array &$variables) {

  // Get this node.
  $node = \Drupal::routeMatch()->getParameter('node');

  /*
   * Sets the responsive media style to one of
   * [gw_e2e_large, gw_e2e_medium, gw_e2e_small, default]
   * for media_header styles and [d07, d05, d03] for standard styles
   */

  if ($node && $node->hasField('field_page_header_style')) {

    switch ($node->field_page_header_style->getValue()[0]['value']) {

      case "standard":
        $image_style = $node->field_gw_page_standard_style->getValue()[0]['value'];
        // Add the responsive style.
        $variables['content']['field_media_image'][0]['#responsive_image_style_id'] = $image_style;
        break;

      case "media_header":
        $image_style = $node->field_gw_page_media_header_style->getValue()[0]['value'];
        // Add the responsive style.
        $variables['content']['field_media_image'][0]['#responsive_image_style_id'] = $image_style;
        break;

    }

  }

}
