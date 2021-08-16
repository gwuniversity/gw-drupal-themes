<?php

/**
 * @file
 * Hooks for gw-article type.
 */

/**
 * Implements hook_preprocess_HOOK().
 *
 * Add variables to the node--gw-article--full.html.twig template.
 */
function gw_main_theme_preprocess_node__gw_article__full(&$variables) {

  // The article node.
  $node = $variables['elements']['#node'];

  // Format the publication date.
  $variables['publication_date'] = $node->get('field_gw_article_date')->value ? \Drupal::service('date.formatter')->format($node->get('field_gw_article_date')->date->getTimestamp(), 'gw_article_date') : \Drupal::service('date.formatter')->format($node->get('created')->value, 'gw_article_date');

  // Article author.
  $variables['publication_author'] = $node->getOwner()->getDisplayName();

  // Generate the related content array.
  $variables['related_content'] = _gw_main_theme_get_referenced_items($variables['node'], 'field_gw_article_related_content', 'field_gw_article_featured_media');

  // Generate the tags array.
  $variables['tags'] = _gw_main_theme_get_tags_array($variables['node']);
}
