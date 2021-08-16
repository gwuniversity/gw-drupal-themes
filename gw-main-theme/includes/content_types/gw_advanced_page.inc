<?php

/**
 * @file
 * Hooks for gw-advanced-page type.
 */

/**
 * Implements hook_preprocess_HOOK().
 *
 * Add variables to the node--landing-page--full.html.twig template.
 */
function gw_main_theme_preprocess_node__landing_page__full(&$variables) {

  // The article node.
  $node = $variables['elements']['#node'];


}
