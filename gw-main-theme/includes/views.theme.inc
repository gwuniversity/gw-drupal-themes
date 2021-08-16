<?php

/**
 * @file
 * Functions to support theming views in the Particle theme.
 */

use Drupal\views\ViewExecutable;

/**
 * Implements hook_views_pre_render().
 */
function gw_main_theme_views_pre_render(ViewExecutable $view) {

  // Add views css, js to the proper directory views.
  if (isset($view)) {

    switch ($view->storage->id()) {
      case 'gw_directory':
      case 'gw_articles':
      case 'gw_events':
        $view->element['#attached']['library'][] = 'gw_main_theme/views';
        break;

    }
  }
}
