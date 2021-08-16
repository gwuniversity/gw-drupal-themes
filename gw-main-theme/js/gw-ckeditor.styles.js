/*
 * This file is used/requested by the 'Styles' button in the CKEditor.
 */

  CKEDITOR.addStylesSet("drupal", [
    {
      name: 'Default',
      element: 'p',
      group: 'Block Formatting',
      attributes: {}
    },
    {
      name: "Marketing Text",
      element: "span",
      attributes: {
        class: "marketing-text",
      },
    },
    {
      name: "Testimonial Heavy",
      element: "span",
      attributes: {
        class: "testimonial-heavy",
      },
    },
    {
      name: 'Infographic Small',
      element: 'span',
      attributes: {
        'class': 'liberator-statement-liberatorheavy-24'
      }
    },
    {
      name: 'Infographic Large',
      element: 'span',
      attributes: {
        'class': 'liberator-statement-liberatorheavy-36'
      }
    },
    {
      name: 'Liberator',
      element: 'span',
      attributes: {
        'class': 'liberator-statement-liberatorheavy-72'
      }
    },
    {
      name: 'Testimonial Heavy',
      element: 'span',
      attributes: {
        'class': 'testimonial-heavy'
      }
    },
    {
      name: 'Hoefler with Swash',
      element: 'span',
      attributes: {
        'class': 'hoeflerText-statement-swash'
      }
    },
    {
      name: 'Hoefler with Swash (Buff)',
      element: 'span',
      attributes: {
        'class': 'hoeflerText-statement-swash-buff'
      }
    },
    {
      name: 'Hoefler Statement',
      element: 'span',
      attributes: {
        'class': 'hoefler-statement-text-700-italic-36'
      }
    },
    {
      name: 'Gray Box Background',
      element: 'p',
      group: 'Block Formatting',
      attributes: {
        'class': 'gray-box'
      }
    },
    {
      name: 'Test Widget Class',
      type: 'widget',
      widget: 'drupalentity',
      attributes: { 'class': 'embed-240p' }
    },

  ]);
