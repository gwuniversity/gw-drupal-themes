<?php

/**
 * @file
 * Functions to support theming paragraphs things the Particle theme.
 */

use Drupal\media\Entity\Media;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;

/**
 * Implements hook_preprocess_paragraph_TYPE().
 *
 * Customizations for the Bootstrap Paragraphs Simple (Default) Template.
 */
function gw_main_theme_preprocess_paragraph__bp_simple__default(&$variables) {

  // Get this paragraph object.
  $pg = $variables['elements']['#paragraph'];

  // Set the bp_width variable.
  $variables['bp_width'] = $pg->get("bp_width")->getString();

  // Check to see if the parallax boolean is checked.
  $parallax = $pg->get("field_bp_gw_parallax")->getString();

  // If it is checked, add the variables.
  if ($parallax == '1') {
    $variables['use_parallax'] = TRUE;
    $variables['parallax_size'] = $pg->get("field_bp_gw_parallax_size")->getString();
  }

}

/**
 * Implements hook_preprocess_paragraph_TYPE().
 *
 * Variables for the GW Carousel Paragraph.
 * Uses template paragraph--gw-bp-carousel.html.twig.
 */
function gw_main_theme_preprocess_paragraph__gw_bp_carousel(&$variables) {


}

/**
 * Implements hook_preprocess_field_paragraph_TYPE().
 *
 * Add the field_gw_bp_slide_size to the field.
 * Uses template field--paragraph--gw-bp-image.html.twig.
 */
function gw_main_theme_preprocess_field__paragraph__gw_bp_image(&$variables) {

  // Get this paragraph object.
  $pg = $variables['element']['#object'];

  // Get parent.
  $parent = $pg->getParentEntity();

  // Number of slides.
  $variables['slide_count'] = $parent->get('bp_slide_content')->count();

  // Get the image style from the parent.
  $image_style = $parent->field_gw_bp_slide_size->value;

  // Set the 'image_style' variable for the output.
  $variables['image_style'] = $image_style;
  $variables['responsive_image_style_id'] = $image_style;

  $variables['items'][0]['content']['#image_style'] = $image_style;
  $variables['items'][0]['content']['#build']['settings']['image_style'] = $image_style;
  $variables['items'][0]['content']['#build']['settings']['responsive_image_style'] = $image_style;
  // $variables['content']['field_media_image'][0]['#responsive_image_style_id'] = $image_style;

  // Information box settings.
  $variables['info_enable'] = $parent->field_gw_bp_info_enable->value;
  $variables['info_alignment'] = $parent->field_gw_bp_info_align->value;
  $variables['slide_size'] = $parent->field_gw_bp_slide_size->value;

  // Description and title for info box.
  $variables['image_title'] = $pg->get("bp_title")->getString();
  $variables['image_description'] = $pg->get("field_gw_bp_image_description")->getString();

  // Get the Media ID of the image.
  $mid = $pg->get("field_gw_bp_image")->target_id;

  // Load the image as a media object.
  $media = Media::load($mid);

  // Get the File ID of the media object.
  $fid = $media->getSource()->getSourceFieldValue($media);

  // Load the File object.
  $file = File::load($fid);

  // Set the image uri.
  $variables['image_uri'] = $file->getFileUri();

  // Image link and title.
  $uri = $pg->get("field_gw_bp_link")->uri;
  $title = $pg->get("field_gw_bp_link")->title;
  $variables['image_link_title'] = $title;
  $variables['image_link_url'] = $uri;
  $variables['image_link_icon'] = '<span class="fa fa-long-arrow-right"></span>';

  // If the uri has "youtube" or "vimeo" in it, add a 'video' icon.
  if (strpos(strtolower($uri), 'youtube') !== FALSE || strpos(strtolower($uri), 'vimeo') !== FALSE) {
    $variables['image_link_icon'] = '<span class="fa fa-video"></span>';
  }

}

/**
 * Implements hook_preprocess_field_paragraph_TYPE().
 *
 * Add the field_gw_bp_slide_size to the field.
 * Uses template field--paragraph--gw-bp-image.html.twig.
 */
function gw_main_theme_preprocess_field__paragraph__gw_bp_video(&$variables) {

  // Get this paragraph object.
  $pg = $variables['element']['#object'];

  // Get parent.
  $parent = $pg->getParentEntity();

  // Number of slides.
  $variables['slide_count'] = $parent->hasField('bp_slide_content') ? $parent->get('bp_slide_content')->count() : 1;

  // Get the image style from the parent.
  $image_style = $parent->hasField('field_gw_bp_slide_size') ? $parent->field_gw_bp_slide_size->value : $pg->get('field_gw_bp_slide_size')->getValue()[0]['value'];

  $image_style = isset($image_style) ? $image_style : 'default';

  // Set the 'image_style' variable for the output.
  $variables['image_style'] = isset($image_style) ? $image_style : 'default';
  $variables['responsive_image_style_id'] = $image_style;

  $variables['items'][0]['content']['#image_style'] = $image_style;
  $variables['items'][0]['content']['#build']['settings']['image_style'] = $image_style;
  $variables['items'][0]['content']['#build']['settings']['responsive_image_style'] = $image_style;
  // $variables['content']['field_media_image'][0]['#responsive_image_style_id'] = $image_style;

  // Get the width and height set by the parent image style and set them
  // to twig vars.
  $variables['image_style_width'] = 'auto';
  $variables['image_style_height'] = 'auto';

  foreach (ImageStyle::load($image_style)->getEffects()->getConfiguration() as $config) {
    if (isset($config['data'])) {
      if (isset($config['data']['height'])) {
        $variables['image_style_height'] = $config['data']['height'];
      }
      if (isset($config['data']['width'])) {
        $variables['image_style_width'] = $config['data']['width'];
      }
    }
  }

}
