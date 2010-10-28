// $Id$
(function ($) {

/**
 * Checks to see if the cron should be automatically run.
 */
Drupal.behaviors.cronCheck = function(context) {
  if (Drupal.settings.cron.runNext || false) {
    $('body:not(.cron-check-processed)', context).addClass('cron-check-processed').each(function() {
      // Execute the Google analytics importer run.
        $.get(Drupal.settings.cron.basePath + '/run-cron-check');
    });
  }
};

})(jQuery);
