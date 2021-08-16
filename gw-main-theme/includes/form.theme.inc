<?php

/**
 * @file
 * Functions to support theming form layout in the GW Main theme.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_alter().
 *
 * Adds a custom stylesheet to webforms.
 */
function gw_main_theme_form_alter(&$form, FormStateInterface $form_state) {

  if (isset($form['#entity_type']) && $form['#entity_type'] == 'webform_submission') {
    $form['#attached']['library'][] = 'gw_main_theme/webform';
  }

}

/**
 * Implements hook_form_FORM_ID_alter().
 */
function gw_main_theme_form_views_exposed_form_alter(&$form, FormStateInterface $form_state) {

  // Get view object.
  $view = $form_state->get('view');

  switch ($view->id()) {
    case 'gw_directory':
      $form['#attributes']['class'][] = 'container-inline';
      $form['title']['#attributes']['placeholder'][] = 'Name';
      $form['field_gw_person_department_target_id']['#attributes']['class'][] = 'form-control';
      $form['field_gw_person_school_target_id']['#attributes']['class'][] = 'form-control';
      break;

    case 'gw_events':
      $form['#attributes']['class'][] = 'container-inline';

      $form['field_gw_event_when_value_year']['#attributes']['class'][] = 'form-control';
      $form['field_gw_event_when_value_year']['#type'] = "select";
      $form['field_gw_event_when_value_year']['#size'] = NULL;
      $form['field_gw_event_when_value_year']['#options'] = _get_years_for_items('gw_event');
      // $form['field_gw_event_when_value_year']['#default_value'] = $form['field_gw_event_when_value_year']['#options']['- ANY -'];

      $form['views_month_filter_event_date']['#attributes']['class'][] = 'form-control';
      $form['views_month_filter_event_date']['#type'] = "select";
      $form['views_month_filter_event_date']['#size'] = NULL;
      $form['views_month_filter_event_date']['#options'] = _get_months();
      // $form['views_month_filter_event_date']['#default_value'] = $form['views_month_filter_event_date']['#options']['- ANY -'];

      $form['field_gw_event_type_target_id']['#attributes']['class'][] = 'form-control';

      break;

    case 'gw_articles':
      $form['#attributes']['class'][] = 'container-inline';

      $form['created']['#attributes']['class'][] = 'form-control';
      $form['created']['#type'] = "select";
      $form['created']['#size'] = NULL;
      $form['created']['#options'] = _get_years_for_items('gw_article');
      // $form['created']['#default_value'] = $form['created']['#options']['- ANY -'];

      $form['views_month_filter_date_created']['#attributes']['class'][] = 'form-control';
      $form['views_month_filter_date_created']['#type'] = "select";
      $form['views_month_filter_date_created']['#size'] = NULL;
      $form['views_month_filter_date_created']['#options'] = _get_months();
      // $form['views_month_filter_date_created']['#default_value'] = $form['views_month_filter_date_created']['#options']['- ANY -'];

      $form['field_gw_article_type_target_id']['#attributes']['class'][] = 'form-control';

      break;

  }

}

/**
 * Function to get the 'years' of a particular type.
 */
function _get_years_for_items($type) {

  // Return a different array based on type.
  switch ($type) {
    case 'gw_event':

      // Query the years events exist in.
      $database = \Drupal::database();
      $query = $database->query("SELECT YEAR(FROM_UNIXTIME(field_gw_event_when_value)) FROM node__field_gw_event_when ORDER BY field_gw_event_when_value DESC");
      $results = $query->fetchCol();
      $list = ['' => '- Year -'];

      foreach (array_unique($results) as $year) {
        $list["$year"] = $year;
      }
      break;

    case 'gw_article':

      // Query the years articles exist in.
      $database = \Drupal::database();
      $query = $database->query("SELECT YEAR(FROM_UNIXTIME(created)) FROM node_field_data WHERE type='gw_article' ORDER BY created DESC");
      $results = $query->fetchCol();
      $list = ['' => '- Year -'];

      foreach (array_unique($results) as $year) {
        $list["$year"] = "$year";
      }
      break;
  }

  return $list;

}

/**
 * Return a list of months.
 */
function _get_months() {

  $months = [
    '' => t('- Month -'),
    '1' => t('January'),
    '2' => t('February'),
    '3' => t('March'),
    '4' => t('April'),
    '5' => t('May'),
    '6' => t('June'),
    '7' => t('July'),
    '8' => t('August'),
    '9' => t('September'),
    '10' => t('October'),
    '11' => t('November'),
    '12' => t('December'),
  ];

  return $months;

}
