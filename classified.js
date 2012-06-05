//alert("Hello World! from .info file");
//console.log("hellow world from .nfo");

/*
Drupal.behaviors.classifiedModuleBehavior = function (context) {
    alert("Hello World!");
	console.log("hellow world");
  };
*/

/*

Drupal.behaviors.classifiedModuleBehavior = function (context) {
	alert(Drupal.settings.classifiedModule_settings.level);
	console.log(Drupal.settings.classifiedModule_settings.level);
};
*/



/*
var siteLevel = Drupal.settings.classifiedModule_settings.level;
function (context) { 
alert(siteLevel);
console.log(siteLevel);
};
*/

/*
Drupal.behaviors.classifiedModuleBehavior = function (context) {
	var siteLevel = Drupal.settings.classifiedModule_settings.level
	alert("The site classification level is "+siteLevel);
	console.log(siteLevel);
};
*/

/*
Drupal.behaviors.classifiedModuleBehavior = function (context) {
	var siteLevel = Drupal.settings.classifiedModule_settings.level
	

	if (siteLevel == 0) {
		alert("The site is unclassified");
	}
	else if (siteLevel == 1) {
		alert("The site is classified");
	}
	else if (siteLevel == 2) {
		alert("The site is Top secret");
	}
	else {
		alert("the site has no classificatoin");
	}

	console.log("The site is classified as "+siteLevel);
	
};

*/
Drupal.behaviors.classifiedModuleBehavior = function (context) {
	// @todo There is probably a much cleaner way to do this.
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

$('body', context).prepend('<div id="classified-top">' + siteText + '</div>');
$('body', context).append('<div id="classified-bottom">' + siteText + '</div>');


//$('#classified-top #classified-bottom', context).removeClass('bawk');
//$('#classified-top #classified-bottom', context).addClass('bawk');
$('#classified-top', context).addClass('level-'+siteLevel);
$('#classified-bottom', context).addClass('level-'+siteLevel);

//$('#sidebar-left', context).removeClass('sidebar');
//$('#sidebar-left', context).addClass('bork-class');

    



     // $('body', context).addClass(Drupal.settings.environment_indicator.cssClass);
  };