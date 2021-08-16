<?php

/**
 * @file
 * Functions to support theming navigation in the Particle theme.
 */

/**
 * Implements hook_preprocess_breadcrumb().
 *
 * Double check to see if the last breadcrumb is a duplicate
 * of the previous one. If so, remove it.
 */
function gw_main_theme_preprocess_breadcrumb(&$variables) {

  // Select the last item in the breadcrumb trail.
  $last = end($variables['breadcrumb']);

  // Select the previous item of the breadcrumb trail.
  $prev = prev($variables['breadcrumb']);

  // Compare and remove if required.
  if ($prev && $last['text'] == $prev['text']) {
    array_pop($variables['breadcrumb']);
  }

}
