<?php

/**
 * @file
 * Hooks for gw-gallery type.
 */

/**
 * Implements hook_preprocess_HOOK().
 *
 * Add variables to the node--gw-gallery--full.html.twig template.
 */
function gw_main_theme_preprocess_node__gw_gallery__full(&$variables) {

  // The gallery node.
  $node = $variables['elements']['#node'];

}
