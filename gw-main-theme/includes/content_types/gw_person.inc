<?php

/**
 * @file
 * Hooks for gw-person type.
 */

use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\Unicode;

/**
 * Implements hook_preprocess_HOOK().
 *
 * Add variables to the node--gw-person--full.html.twig template.
 */
function gw_main_theme_preprocess_node__gw_person__full(&$variables) {

  // The person node.
  $node = $variables['elements']['#node'];

  // Get info from the attached paragraphs.
  $paragraphs = $variables['node']->field_gw_person_info->getValue();
  $nav_items = [];
  $nav_content = [];

  // Set a counter for the index.
  $content_index = 0;

  // Loop through the result set.
  foreach ($paragraphs as $element) {

    // Get the related paragraph.
    $p = \Drupal::EntityTypeManager()->getStorage('paragraph')->load($element['target_id']);

    // Set variables to paragraph values.
    // Also create a lower cased, css identifier for the ID.
    $title = isset($p->field_gw_person_info_tab_title->getValue()[0]['value']) ? $p->field_gw_person_info_tab_title->getValue()[0]['value'] : "Info";
    $id = Html::cleanCssIdentifier(mb_strtolower($title));
    $icon = isset($p->field_gw_person_info_tab_icon->getValue()[0]['value']) ? $p->field_gw_person_info_tab_icon->getValue()[0]['value'] : NULL;
    $text = isset($p->field_gw_person_info_tab_text->getValue()[0]['value']) ? $p->field_gw_person_info_tab_text->getValue()[0]['value'] : NULL;

    // Add "active" classes only to first items in array.
    $active_item = count($nav_items) == 0 ? 'active' : '';
    $active_content = count($nav_items) == 0 ? 'active' : '';

    // Create an array for the tabs.
    $nav_items[] = [
      'nav_item_text' => $title,
      'nav_item_link_other_classes' => [$active_item],
      'nav_item_id' => $id . '-tab',
      'nav_item_link' => '#' . $id,
      'nav_item_fa_icon' => $icon,
    ];

    // Create an array for the tab content.
    $nav_content[] = [
      'nav_content_id' => $id,
      'nav_content_text' => $text,
      'nav_content_active' => $active_content,
      'nav_content_index' => $content_index,
      'nav_content_title' => $title,
      'nav_content_fa_icon' => $icon,
    ];

    $content_index++;
  }

  // Assign tabs and tab content to variables for Twig template.
  $variables['gw_person_info_tabs'] = $nav_items;
  $variables['gw_person_info_tabs_content'] = $nav_content;

  // Generate the full name from parts.
  $full_name = isset($variables['node']->field_gw_person_prefix->getValue()[0]['value']) ? _gw_main_theme_get_label('field_gw_person_prefix', $variables['node']->field_gw_person_prefix->getValue()[0]['value']) . ' ' : '';
  $full_name .= isset($variables['node']->field_gw_person_first_name->getValue()[0]['value']) ? $variables['node']->field_gw_person_first_name->getValue()[0]['value'] . ' ' : '';
  $full_name .= isset($variables['node']->field_gw_person_middle_name->getValue()[0]['value']) ? $variables['node']->field_gw_person_middle_name->getValue()[0]['value'] . ' ' : '';
  $full_name .= isset($variables['node']->field_gw_person_last_name->getValue()[0]['value']) ? $variables['node']->field_gw_person_last_name->getValue()[0]['value'] : '';
  $full_name .= isset($variables['node']->field_gw_person_suffix->getValue()[0]['value']) ? _gw_main_theme_get_label('field_gw_person_suffix', $variables['node']->field_gw_person_suffix->getValue()[0]['value']) : '';

  // Strip the &nbsp; from the optional suffix. The space is used in the
  // auto label to ensure a readable default title.
  $variables['gw_person_full_name'] = trim(html_entity_decode($full_name));

  // Get the configuration settings.
  $config = \Drupal::config('gwu_content_types.settings');

  // Determine if vocabularies are meant to be read from a REST endpoint.
  $use_rest = ($config->get('gwu_content_use_rest') && $config->get('gwu_content_use_rest') == 1);

  // Get the service that pings the remote server for the term name
  // given the id.
  $remote_term_service = \Drupal::service('gwu.term_from_vocabulary');

  // Generate the addresses.
  $addresses = [];

  foreach ($variables['node']->field_gw_person_campus_address->getValue() as $address) {

    // The campus is a taxonomy term ID, so get the label from it.
    if ($address['organization']) {

      if ($use_rest) {
        // Get the campus 'name' from the JSON result.
        $campus = array_key_exists('name', $remote_term_service->getRemoteTermFromVocabulary($address['organization'])) ? $remote_term_service->getRemoteTermFromVocabulary($address['organization'])['name'] : '';
      }
      else {
        // Get the campus name from local vocabulary if available.
        $campus = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->load($address['organization']) ? \Drupal::entityTypeManager()->getStorage('taxonomy_term')->load($address['organization'])->label() : '';
      }

    }
    else {
      $campus = '';
    }

    $addresses[] = [
      'other' => $address['family_name'],
      'campus' => $campus,
      'street_1' => $address['address_line1'],
      'street_2' => $address['address_line2'],
      'city' => $address['locality'],
      'state' => $address['administrative_area'],
      'zip' => $address['postal_code'],
      'country' => $address['country_code'],
      'phone' => $address['address_phonenumber'],
    ];
  }
  $variables['gw_person_campus_addresses'] = $addresses;

  // Get the school value.
  $school = $variables['node']->field_gw_person_school->getValue();

  // Set a credential list.
  $credentials = [];

  // If the use rest checkbox is false, select values from the
  // configuration form.
  if (!$use_rest) {

    // Get the credential list from a textarea.
    $default_options_credentials = explode("\n", $config->get('gwu_default_credentials'));

    // Assign credentials to $default_credentials, and trim spaces.
    foreach ($default_options_credentials as $value) {
      $default_credentials[] = [trim($value)];
    }

    // Get the school list from a textarea.
    $default_options_schools = explode("\n", $config->get('gwu_default_schools'));

    // Assign schools to $default_schools, and trim spaces.
    foreach ($default_options_schools as $value) {
      $default_schools[] = [trim($value)];
    }

    // Get the value of the school from the node and use it as a key
    // for the default list of schools in the configuration.
    $variables['gw_person_school'] = '';

    if (isset($school[0])) {
      $key = $school[0]['value'];

      // Set the school name to a variable.
      $school_name = [$default_schools[$key][0]][0];
      $variables['gw_person_school'] = $school_name;
    }

  }

  // Otherwise use the remote service.
  else {

    if (!empty($school[0]['value'])) {
      $school_name = array_key_exists('name', $remote_term_service->getRemoteTermFromVocabulary($school[0]['value'])) ? $remote_term_service->getRemoteTermFromVocabulary($school[0]['value'])['name'] : '';
      $variables['gw_person_school'] = $school_name;
    }
    else {
      $variables['gw_person_school'] = FALSE;
    }

  }

  // Loop through the values in the field_gw_person_credentials list.
  // There is a lot of error checking here to make sure nothing goes wrong
  // if some variable is missing or not filled out.
  foreach ($variables['node']->field_gw_person_credentials->getValue() as $credential) {

    if (isset($credential['value'])) {

      try {
        // If 'use rest' is enabled, grab the remote taxonomy.
        if ($use_rest) {
          // Returns the term information.
          $term = $remote_term_service->getRemoteTermFromVocabulary($credential['value']);
        }
        else {
          if (!empty($default_credentials[$credential['value']])) {
            $term = ['name' => $default_credentials[$credential['value']][0]];
          }
          else {
            $term = FALSE;
          }
        }

        if ($term && array_key_exists('name', $term)) {
          // Get the name value.
          $term_name = $term['name'];

          // Get all text before the first "(" and trim whitespace.
          // Add to $credentials array.
          if (strpos($term_name, "(") || strpos($term_name, "-")) {
            $c = trim(substr($term_name, 0, strpos($term_name, "(")));

            // In the case the term_name is separated by -.
            if ($c == NULL) {
              $c = trim(substr($term_name, 0, strpos($term_name, "-")));
            }
          }
          else {
            $c = $term_name;
          }
          $credentials[] = $c;
        }

      }
      catch (\Throwable $e) {
        // Log the error to the watchdog.
        \Drupal::logger('GW Person Error')->error($e->getMessage());

        // Show the error to logged in users only.
        if ($variables['logged_in']) {
          $message = 'Unable to process term ID: ' . $credential['target_id'] . '.';
          \Drupal::messenger()->addError($message);
        }
      }
    }
  }

  // Set the credentials list to be used in the twig template.
  $variables['gw_person_credentials'] = $credentials;

  // Generate the tags array.
  $variables['tags'] = _gw_main_theme_get_tags_array($variables['node']);
}
