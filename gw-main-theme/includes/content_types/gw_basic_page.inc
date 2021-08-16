<?php

/**
 * @file
 * Hooks for gw-basic-page type.
 */

/**
 * Implements hook_preprocess_HOOK().
 *
 * Add variables to the node--gw-basic-page--full.html.twig template.
 */
function gw_main_theme_preprocess_node__gw_basic_page__full(&$variables) {

  // The article node.
  $node = $variables['elements']['#node'];

}
