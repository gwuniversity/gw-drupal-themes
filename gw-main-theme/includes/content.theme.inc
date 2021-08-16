<?php

/**
 * @file
 * Functions to support content type hooks found in content_types/gw_TYPE.inc.
 */

include 'content_types/gw_article.inc';
include 'content_types/gw_event.inc';
include 'content_types/gw_person.inc';
include 'content_types/gw_basic_page.inc';
include 'content_types/gw_advanced_page.inc';
include 'content_types/gw_gallery.inc';

/**
 * Implements hook_preprocess_node().
 *
 * Preprocesses all nodes.
 */
function gw_main_theme_preprocess_node(&$variables) {

}

/**
 * Returns an array of tags including the word, the tag id, and url.
 *
 * @param object $node
 *   The node from whence the tags are found.
 *
 * @return array
 *   An associative array of tags passed to the twig template.
 */
function _gw_main_theme_get_tags_array($node) {

  $tags = [];

  $referenced_tags = $node->get('field_tags')->referencedEntities();

  if (isset($referenced_tags)) {

    $content_tag = [];
    foreach ($referenced_tags as $tag) {
      $content_tag['word'] = $tag->get('name')->value;
      $content_tag['tag_id'] = $tag->get('tid')->value;
      $content_tag['url'] = '/article/tag/' . $tag->get('tid')->value;
      $tags[] = $content_tag;
    }
  }

  return $tags;
}

/**
 * Returns an array of related items.
 *
 * @param object $node
 *   The node from whence to search for related items.
 * @param string $referenced_field
 *   The name of the field to search.
 * @param string $referenced_media_field
 *   The optional field name for the related media.
 *
 * @return array
 *   Array of related items, url, and image.
 */
function _gw_main_theme_get_referenced_items($node, $referenced_field, $referenced_media_field = FALSE) {

  // Get the related entities to this item.
  $related_entities = $node->get($referenced_field)->referencedEntities();

  $related_items = [];
  if (isset($related_entities)) {

    // Create an array of related item values to return to the page.
    $related_item = [];
    foreach ($related_entities as $item) {

      $related_item['related_title'] = $item->title->getValue()[0]['value'];
      $related_item['related_url'] = $item->toUrl()->toString();

      if ($referenced_media_field) {
        // Get the referenced images.
        $referenced_images = $item->get($referenced_media_field)->referencedEntities();

        foreach ($referenced_images as $image) {
          $uri = $image->get('field_media_image')->entity->uri->value;
        }
        $related_item['related_image'] = file_create_url($uri);
      }

      else {
        $related_item['related_image'] = '';
      }

      $related_items[] = $related_item;
    }
  }
  return $related_items;
}

/**
 * Function to return a label from a selected value from dropdowns.
 *
 * @see https://drupal.stackexchange.com/a/282850
 */
function _gw_main_theme_get_label($field_name, $value) {

  // This entity type.
  $entity_type_id = 'node';

  // Get the field definitions.
  $entity_fields_definitions = \Drupal::service('entity_field.manager')->getFieldStorageDefinitions($entity_type_id);

  /** @var \Drupal\Core\Field\FieldStorageDefinitionInterface $field_definition */
  $field_definition = $entity_fields_definitions[$field_name];
  $field_allowed_options = options_allowed_values($field_definition);

  // Return selection from array.
  return $field_allowed_options[$value];
}

/**
 * Function to return all options from select.
 */
function _gw_main_theme_get_options($field_name) {

  // This entity type.
  $entity_type_id = 'node';

  // Get the field definitions.
  $entity_fields_definitions = \Drupal::service('entity_field.manager')->getFieldStorageDefinitions($entity_type_id);

  /** @var \Drupal\Core\Field\FieldStorageDefinitionInterface $field_definition */
  $field_definition = $entity_fields_definitions[$field_name];
  $field_allowed_options = options_allowed_values($field_definition);

  // Return selection from array.
  return $field_allowed_options;

}
