<?php

/**
 * @file
 * Hooks for gw-event type.
 */

/**
 * Implements hook_preprocess_HOOK().
 *
 * Add variables to the node--gw-event--full.html.twig template.
 */
function gw_main_theme_preprocess_node__gw_event__full(&$variables) {

  // Get the 'when' dates of the event.
  if ($variables['node']->field_gw_event_when) {
    $dates = [];
    foreach ($variables['node']->field_gw_event_when as $event_date) {
      $date['start'] = $event_date->value;
      $date['end'] = $event_date->end_value;
      $date['time'] = \Drupal::service('date.formatter')->format($event_date->value, 'custom', 'g:ia');
      $date['end_time'] = \Drupal::service('date.formatter')->format($event_date->end_value, 'custom', 'g:ia');
      $date['date'] = \Drupal::service('date.formatter')->format($event_date->value, 'custom', 'D, j F, Y');
      $date['end_date'] = \Drupal::service('date.formatter')->format($event_date->end_value, 'custom', 'D, j F, Y');
      $date['duration'] = $event_date->duration ? $event_date->duration : '';
      $date['timezone'] = $event_date->timezone ? $event_date->timezone : '';
      $date['addtocalendar'] = "/simple_ics/" . $variables['node']->Id() . "/" . $event_date->value . "/" . $event_date->end_value;
      $dates[] = $date;
    }
  }
  $variables['event_dates'] = $dates;

  // Get the geofield and separate it into lat/long.
  if ($variables['node']->field_gw_event_geofield) {
    $coords['lat'] = $variables['node']->field_gw_event_geofield->lat;
    $coords['lon'] = $variables['node']->field_gw_event_geofield->lon;
  }

  $variables['coords'] = $coords;

  // Generate the event addresses.
  $addresses = [];
  foreach ($variables['node']->field_gw_event_address->getValue() as $address) {
    $addresses[] = [
      'organization' => $address['organization'],
      'other' => $address['given_name'],
      'street_1' => $address['address_line1'],
      'street_2' => $address['address_line2'],
      'city' => $address['locality'],
      'state' => $address['administrative_area'],
      'zip' => $address['postal_code'],
      'country' => $address['country_code'],
      // 'phone' => $address['address_phonenumber'],
    ];

  }
  $variables['gw_event_addresses'] = $addresses;

  // Generate the related content array.
  $variables['related_content'] = _gw_main_theme_get_referenced_items($variables['node'], 'field_gw_event_related_content', 'field_gw_event_featured_media');

  // Generate the tags array.
  $variables['tags'] = _gw_main_theme_get_tags_array($variables['node']);

}
