
// @todo add a wrapper around each element for more control over positioning.
Drupal.behaviors.classifiedModuleBehavior = function (context) {
	// @todo There is probably a much cleaner way to do this. ie. a case statement
	var siteText = null
	var siteLevel = Drupal.settings.classifiedModule_settings.level
	if (siteLevel == 0) {
		var siteText = "Unclassified";
	}
	else if (siteLevel == 1) {
		var siteText = "Classified";
	}
	else if (siteLevel == 2) {
		var siteText = "Top Secret";
	}

$('body', context).prepend('<div id="classified-top">' + siteText + '</div>').append('<div id="classified-bottom">' + siteText + '</div>');

$('#classified-top', context).addClass('level-'+siteLevel);
$('#classified-bottom', context).addClass('level-'+siteLevel);
  };