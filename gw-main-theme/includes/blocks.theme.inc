<?php

/**
 * @file
 * Functions to support theming blocks in the GW Main theme.
 */

use Drupal\block\Entity\Block;

/**
 * Implements hook_preprocess_block().
 */
function gw_main_theme_preprocess_block(&$variables) {

  // Add a 'region' to the 'main' menu block attibutes.
  if ($variables['base_plugin_id'] == 'menu_block' && $variables['derivative_plugin_id'] == 'main') {

    // Get the block.
    $region = Block::load($variables['elements']['#id'])->getRegion();
    // Get which region the block is in and assign it to the variables.
    $variables['content']['#attributes']['region'] = $region;
  }

  // Varbase hero slider block.
  if ($variables['base_plugin_id'] == 'views_block' && $variables['derivative_plugin_id'] == 'varbase_heroslider_media-varbase_heroslider_media') {

    // If there's an entity subqueue "varbase_heroslider_media",
    // get the 'size' from it.
    $entity_subqueue = \Drupal::EntityTypeManager()->getStorage('entity_subqueue')->load('varbase_heroslider_media') ? \Drupal::EntityTypeManager()->getStorage('entity_subqueue')->load('varbase_heroslider_media') : FALSE;
    if ($entity_subqueue) {
      $variables['hero_slider_size'] = $entity_subqueue->get('field_varbase_hero_slider_size')->value;
    }
  }

}

/**
 * Implements hook_preprocess_varbase_media_header_block().
 *
 * Add a class to the variables array from the node value
 * field_gw_page_header_max_height.
 */
function gw_main_theme_preprocess_varbase_media_header_block(&$variables) {

  // Get this node.
  $node = \Drupal::routeMatch()->getParameter('node');

  // Set 'header_style'.
  $variables['header_style'] = $node->field_page_header_style ? $node->field_page_header_style->getValue()[0]['value'] : 0;

  // Add the 'summary' from the body to a variable.
  $variables['header_summary'] = $node->field_gw_basic_page_body->getValue()[0]['summary'];

  // Add boolean value for "field_gw_page_header_info" and
  // "field_gw_page_header_link".
  $variables['header_info'] = $node->field_gw_page_header_info;
  $variables['header_link'] = $node->field_gw_page_header_link;

  // If there's a header link, set the uri, title, and icon fields.
  if ($node->hasField('field_gw_page_header_link') && $node->field_gw_page_header_link->getValue()) {
    $uri = $node->field_gw_page_header_link->getValue()[0]['uri'];
    $variables['link_uri'] = $uri;
    $variables['link_title'] = $node->field_gw_page_header_link ? $node->field_gw_page_header_link->getValue()[0]['title'] : '';
    $variables['link_icon'] = '<span class="fa fa-long-arrow-right"></span>';

    // If the uri has "youtube" or "vimeo" in it, add a 'video' icon.
    if (strpos(strtolower($uri), 'youtube') !== FALSE || strpos(strtolower($uri), 'vimeo') !== FALSE ) {
      $variables['link_icon'] = '<span class="fa fa-video"></span>';
    }

  }

  // Set the 'header_align' variable.
  $variables['header_align'] = $node->field_gw_page_align_header_info->getValue()[0];

}
