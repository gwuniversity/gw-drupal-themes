// Override the default template set

// The name of sub folder which hold the shortcut preview images of the
// templates.  Determine base path of drupal installation if any
// (ckeditor could possibly be loaded w/o drupalSettings).

// Keep images in a module, because themes are on the remote cloud service.
var module_path = "modules/custom/gwu_content_types/img/ckeditor/default/";

// Path for the sample images.
var sampleImagePath = ((drupalSettings && drupalSettings.path) ? drupalSettings.path.baseUrl : '/') + module_path;

CKEDITOR.addTemplates( 'default', {

  // // Path for the image icons.
	imagesPath: ((drupalSettings && drupalSettings.path) ? drupalSettings.path.baseUrl : '/') + 'modules/custom/gwu_content_types/img/ckeditor/default/',

	// The templates definitions.
	templates: [
    {
      title: '2 Across',
      image: 'Generic-50-50.gif',
      html: '<div type="tpl-2-across" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-6 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1003-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-6 pos-two">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1003-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-2-across -->' +
        '</div>'
    },
    {
      title: '3 Across',
      image: 'Generic-33-33-33.gif',
      html: '<div type="tpl-3-across" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-4 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1001-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-4 pos-two">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1001-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-4 pos-three">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1001-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-3-across -->' +
        '</div>'
    },
    {
      title: '4 Across',
      image: 'Generic-25-25-25-25.gif',
      html: '<div type="tpl-4-across" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-sm-6 col-md-3 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1000-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-sm-6 col-md-3 pos-two">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1000-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-sm-6 col-md-3 pos-three">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1000-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-sm-6 col-md-3 pos-four">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1000-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-4-across -->' +
        '</div>'
    },
    {
      title: 'Percentage Based'
    },
    {
      title: '50% Centered',
      image: 'Generic-50-Centered.gif',
      html: '<div type="tpl-50" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-6  pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1003-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>  ' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-50 -->' +
        '</div>'
    },
    {
      title: '66% Centered',
      image: 'Generic-66-Centered.gif',
      html: '<div type="tpl-66" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-8 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1004-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>  ' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-66 -->' +
        '</div>'
    },
    {
      title: '80% Centered',
      image: 'Generic-80-Centered.gif',
      html: '<div type="tpl-80" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-10 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1006-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>  ' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-80 -->' +
        '</div>'
    },
    {
      title: '100% Fullbleed',
      image: 'Fullbleed-100-Centered.gif',
      html: '<div type="tpl-1-across-full-bleed" class="container px-0">' +
        '<div class="row">' +
        '<div class="col-12 pos-one">' +
        '<article>' +
        '<div class="centered full-bleed-template text-center">' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.se2e" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1007-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</div>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-1-across-full-bleed -->' +
        '</div>'
    },
    {
      title: '33%-33% Centered',
      image: 'Generic-40-40-Centered.gif',
      html: '<div type="tpl-33-33" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-4 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1001-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-sm-4 col-xs-12 pos-two">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1001-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-33-33 -->' +
        '</div>'
    },
    {
      title: '40%-40% Centered',
      image: 'Generic-40-40-Centered.gif',
      html: '<div type="tpl-40-40"  class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-5 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1002-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-5 pos-two">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1002-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-40-40 -->' +
        '</div>'
    },
    {
      title: '25%-75%',
      image: 'Generic-25-75.gif',
      html: '<div type="tpl-25-75" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-3 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1000-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-9 pos-two">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1005-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-25-75 -->' +
        '</div>'
    },
    {
      title: '33%-66%',
      image: 'Generic-33-66.gif',
      html: '<div type="tpl-33-66" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-4 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1001-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-8 pos-two">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1004-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-33-66 -->' +
        '</div>'
    },
    {
      title: '66%-33%',
      image: 'Generic-66-33.gif',
      html: '<div type="tpl-66-33" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-8 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1004-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-4 pos-two">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1001-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-66-33 -->' +
        '</div>'
    },
    {
      title: '75%-25%',
      image: 'Generic-75-25.gif',
      html: '<div type="tpl-75-25" class="container px-0">' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-12 col-md-9 pos-one">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1005-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-3 pos-two">' +
        '<article>' +
        '<div>' +
        '<drupal-entity data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1000-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity>' +
        '</div>' +
        '<header class="mt-2">' +
        '<h3>Headline (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p>Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-75-25 -->' +
        '</div>'
    },
    {
      title: 'Testimonials'
    },
    {
      title: 'Testimonial Heavy Left-Aligned Image',
      image: 'Left-Testimonial.gif',
      html: '<div type="tpl-testimonial-heavy-left-aligned-image" class="container px-0">' +
        '<div class="row test-l-f">' +
        '<div class="col-md-12 doodad">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-md-12">' +
        '<article>' +
        '<div class="test-l clearfix">' +
        '<div class="test-img-left">' +
        '<figure>' +
        '<div>' +
        '<p class="i-wrap"><drupal-entity data-align="left" data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1009-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity></p>' +
        '</div>' +
        '</figure>' +
        '<div class="name-block heavy">' +
        '<p class="name">Name O. Person</p>' +
        '<p class="affi">GW Affiliation Line 1<br>GW Affiliation Line 2</p>' +
        '</div>' +
        '</div>' +
        '<div class="test-copy">' +
        '<blockquote class="test-l-quote">' +
        '<p class="quote"><span class="testimonial-heavy">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed porttitor ipsum. Suspendisse rutrum condimentum.\"</span></p>' +
        '</blockquote>' +
        '</div>' +
        '</div>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<div class="row test-l-u">' +
        '<div class="col-md-12 doodad-not">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-testimonial-heavy-left-aligned-image -->' +
        '</div>'
    },
    {
      title: 'Testimonial Heavy Right-Aligned Image',
      image: 'Right-Testimonial.gif',
      html: '<div type="tpl-testimonial-heavy-right-aligned-image" class="container px-0">' +
        '<div class="row test-l-f">' +
        '<div class="col-md-12 doodad">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-md-12">' +
        '<article>' +
        '<div class="test-r clearfix">' +
        '<div class="test-img-right">' +
        '<figure>' +
        '<div>' +
        '<p class="i-wrap"><drupal-entity data-align="right" data-embed-button="media" data-entity-embed-display="view_mode:media.large" data-entity-embed-display-settings="{&quot;link_url&quot;:&quot;&quot;,&quot;link_url_target&quot;:0}" data-entity-type="media" data-entity-uuid="0aa00aa0-1009-a00a-a00a-a0000000000a" data-langcode="en"></drupal-entity></p>' +
        '</div>' +
        '</figure>' +
        '<div class="name-block heavy">' +
        '<p class="name">Name O. Person</p>' +
        '<p class="affi">GW Affiliation Line 1<br>GW Affiliation Line 2</p>' +
        '</div>' +
        '</div>' +
        '<div class="test-r-copy">' +
        '<blockquote class="test-r-quote">' +
        '<p class="quote"><span class="testimonial-heavy">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed porttitor ipsum. Suspendisse rutrum condimentum.\"</span></p>' +
        '</blockquote>' +
        '</div>' +
        '</div>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<div class="row test-l-u">' +
        '<div class="col-md-12 doodad-not">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-testimonial-heavy-right-aligned-image -->' +
        '</div>'
    },
    {
      title: 'Testimonial Light Left-Aligned Image',
      image: 'Left-Testimonial.gif',
      html: '<div type="tpl-testimonial-light-left-aligned-image" class="container px-0">' +
        '<div class="row test-l-f">' +
        '<div class="col-md-12 doodad">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-md-12">' +
        '<article>' +
        '<div class="test-l clearfix">' +
        '<div class="test-img-left">' +
        '<figure>' +
        '<div>' +
        '<p class="i-wrap"><img class="t-img-responsive" alt="" src="' + sampleImagePath + 'testimonial-person.png" class="img-responsive" />' +
        '</div>' +
        '</figure>' +
        '<div class="name-block light">' +
        '<p class="name">Name O. Person</p>' +
        '<p class="affi">GW Affiliation Line 1<br>GW Affiliation Line 2</p>' +
        '</div>' +
        '</div>' +
        '<div class="test-copy">' +
        '<blockquote class="test-l-quote">' +
        '<p class="quote"><span class="testimonial-light">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed porttitor ipsum. Suspendisse rutrum condimentum.\"</span></p>' +
        '</blockquote>' +
        '</div>' +
        '</div>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<div class="row test-l-u">' +
        '<div class="col-md-12 doodad-not">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-testimonial-light-left-aligned-image -->' +
        '</div>'
    },
    {
      title: 'Testimonial Light Right-Aligned Image',
      image: 'Right-Testimonial.gif',
      html: '<div type="tpl-testimonial-light-right-aligned-image" class="container px-0">' +
        '<div class="row test-l-f">' +
        '<div class="col-md-12 doodad">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<div class="row justify-content-center"> ' +
        '<div class="col-md-12">' +
        '<article>' +
        '<div class="test-r clearfix">' +
        '<div class="test-img-right">' +
        '<figure>' +
        '<div>' +
        '<p class="i-wrap"><img class="t-img-responsive" alt="" src="' + sampleImagePath + 'testimonial-person.png" /></p>' +
        '</div>' +
        '</figure>' +
        '<div class="name-block light">' +
        '<p class="name">Name O. Person</p>' +
        '<p class="affi">GW Affiliation Line 1<br>GW Affiliation Line 2</p>' +
        '</div>' +
        '</div>' +
        '<div class="test-r-copy">' +
        '<blockquote class="test-r-quote">' +
        '<p class="quote"><span class="testimonial-light">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed porttitor ipsum. Suspendisse rutrum condimentum.\"</span></p>' +
        '</blockquote>' +
        '</div>' +
        '</div>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<div class="row test-l-u">' +
        '<div class="col-md-12 doodad-not">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-testimonial-light-right-aligned-image -->' +
        '</div>'
    },
    {
      title: 'Testimonial Quote',
      image: 'Left-Testimonial.gif',
      html: '<div type="tpl-testimonial-quote" class="container px-0">' +
        '<div class="row test-l-f">' +
        '<div class="col-md-12 doodad">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<div class="row test-q-one">' +
        '<div class="col-md-12">' +
        '<article>' +
        '<div class="test-q clearfix">' +
        '<div class="test-q-copy">' +
        '<blockquote class="test-q-quote">' +
        '<p class="quote"><span class="testimonial-light">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed porttitor ipsum. Suspendisse rutrum condimentum.\"</span></p>' +
        '</blockquote>' +
        '</div>' +
        '<div class="name-block">' +
        '<p class="name">Name O. Person</p>' +
        '<p class="affi">GW Affiliation Line 1 <br> GW Affiliation Line 2</p>' +
        '</div>' +
        '</div>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<div class="row test-l-u">' +
        '<div class="col-md-12 doodad-not">' +
        '<hr>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-testimonial-quote -->' +
        '</div>'
    },
    {
      title: 'Colored Boxes'
    },
    {
      title: '1 Across - Blue Box',
      image: 'Colored-box-1-across-blue.gif',
      html: '<div type="tpl-1-blue-across" class="container px-0">' +
      '<div class="row blue-boxes">' +
      '<div class="col-md-12 col-sm-12 pos-one blue-box">' +
      '<article>' +
      '<header class="mt-2">' +
      '<h3 class="promo-title rtecenter">HEADLINE (optional)</h3>' +
      '</header>' +
      '<section class="col-copy mb-4">' +
      '<p class="marketing-text white rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
      '</section>' +
      '</article>' +
      '</div>' +
      '</div>' +
      '<!-- endAfterNext: tpl-1-across-blue -->' +
      '</div>'
    },
    {
      title: '2 Across - Blue Boxes',
      image: 'Colored-box-2-across-blue.gif',
      html: '<div type="tpl-2-blue-across" class="container px-0">' +
        '<div class="row blue-boxes">' +
        '<div class="col-md-6 col-sm-12 pos-one blue-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text white rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="blue-boxes-divider">' +
        '</div>' +
        '<div class="col-md-6 col-sm-12 pos-two blue-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text white rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-2-across-blue -->' +
        '</div>'
    },
    {
      title: '3 Across - Blue Boxes',
      image: 'Colored-box-3-across-blue.gif',
      html: '<div type="tpl-3-blue-across" class="container px-0">' +
        '<div class="row blue-boxes">' +
        '<div class="col-12 col-md-4 col-sm-12 pos-one blue-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text white rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="blue-boxes-divider">' +
        '</div>' +
        '<div class="col-12 col-md-4 col-sm-12 pos-two blue-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text white rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="blue-boxes-divider">' +
        '</div>' +
        '<div class="col-12 col-md-4 col-sm-12 pos-three blue-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text white rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-3-across-blue -->' +
        '</div>'
    },
    {
      title: '1 Across - Buff Box',
      image: 'Colored-box-1-across-buff.gif',
      html: '<div type="tpl-1-buff-across" class="container px-0">' +
      '<div class="row buff-boxes">' +
      '<div class="col-md-12 col-sm-12 pos-one buff-box">' +
      '<article>' +
      '<header class="mt-2">' +
      '<h3 class="promo-title rtecenter">HEADLINE (optional)</h3>' +
      '</header>' +
      '<section class="col-copy mb-4">' +
      '<p class="marketing-text rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
      '</section>' +
      '</article>' +
      '</div>' +
      '</div>' +
      '<!-- endAfterNext: tpl-1-across-buff -->' +
      '</div>'
    },
    {
      title: '2 Across - Buff Boxes',
      image: 'Colored-box-2-across-buff.gif',
      html: '<div type="tpl-2-buff-across" class="container px-0">' +
        '<div class="row buff-boxes">' +
        '<div class="col-md-6 col-sm-12 pos-one buff-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="buff-boxes-divider">' +
        '</div>' +

        '<div class="col-md-6 col-sm-12 pos-two buff-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE (optional)</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-2-across-buff -->' +
        '</div>'
    },
    {
      title: '3 Across - Buff Boxes',
      image: 'Colored-box-3-across-buff.gif',
      html: '<div type="tpl-3-buff-across-full-bleed" class="container px-0">' +
        '<div class="row buff-boxes">' +
        '<div class="col-12 col-md-4 col-sm-12 pos-one buff-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="buff-boxes-divider">' +
        '</div>' +
        '<div class="col-12 col-md-4 col-sm-12 pos-two buff-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="buff-boxes-divider">' +
        '</div>' +
        '<div class="col-12 col-md-4 col-sm-12 pos-three buff-box">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">HEADLINE</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="marketing-text rtecenter">Body Copy: Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-3-across-buff -->' +
        '</div>'
    },
    {
      title: 'Fact Rows',
      description:'If your site has animation enabled, the Fact Rows will animate in the published view. If you are not seeing animation and want to enable it, email onlinestrategy@gwu.edu.'
    },
    {
      title: 'Fact Row - 2 Across',
      image: 'Factrow-2-across.gif',
      html: '<div type="tpl-factrow-2-across" class="container px-0">' +
        '<div class="gwu-son-factrow row" data-anijs="if: scroll, on: window, do: factrow-animation, before: $scrollReveal">' +
        '<div class="col-md-6 col-sm-12 pos-one gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">100%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-md-6 col-sm-12 pos-two gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">200k</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-factrow-2-across -->' +
        '</div>'
    },
    {
      title: 'Fact Row - 3 Across',
      image: 'Factrow-3-across.gif',
      html: '<div type="tpl-factrow-3-across" class="container px-0">' +
        '<div class="gwu-son-factrow row" data-anijs="if: scroll, on: window, do: factrow-animation, before: $scrollReveal">' +
        '<div class="col-12 col-md-4 col-sm-12 pos-one gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">100%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-4 col-sm-12 pos-two gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">200%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-12 col-md-4 col-sm-12 pos-three gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">300%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-factrow-3-across -->' +
        '</div>'
    },
    {
      title: 'Fact Row - 4 Across',
      image: 'Factrow-4-across.gif',
      html: '<div type="tpl-factrow-4-across" class="container px-0">' +
        '<div class="gwu-son-factrow fr-4-across row" data-anijs="if: scroll, on: window, do: factrow-animation, before: $scrollReveal">' +
        '<div class="col-lg-3 col-md-12 pos-one gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">100%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-lg-3 col-md-12 pos-two gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">200%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-lg-3 col-md-12 pos-three gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">300%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-lg-3 col-md-12 pos-four gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">400%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +

        '</div>' +
        '<!-- endAfterNext: tpl-factrow-4-across -->' +
        '</div>'
    },
    {
      title: 'Fact Row - 5 Across',
      image: 'Factrow-5-across.gif',
      html: '<div type="tpl-factrow-5-across" class="container px-0">' +
        '<div class="gwu-son-factrow fr-5-across row" data-anijs="if: scroll, on: window, do: factrow-animation, before: $scrollReveal">' +
        '<div class="col-lg-2 col-md-12 pos-one gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">100%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-lg-2 col-md-12 pos-two gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">200%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-lg-2 col-md-12 pos-three gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">300%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-lg-2 col-md-12 pos-four gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">400%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '<div class="col-lg-2 col-md-12 pos-five gwu-son-fact-container">' +
        '<article>' +
        '<header class="mt-2">' +
        '<h3 class="promo-title rtecenter">500%</h3>' +
        '</header>' +
        '<section class="col-copy mb-4">' +
        '<p class="fact-row-text rtecenter">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor</p>' +
        '</section>' +
        '</article>' +
        '</div>' +
        '</div>' +
        '<!-- endAfterNext: tpl-factrow-5-across -->' +
        '</div>'
    },

]
} );
