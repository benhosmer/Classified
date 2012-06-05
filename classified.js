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
	var siteLevel = Drupal.settings.classifiedModule_settings.level
$('body', context).prepend('<div id="classified">' + Drupal.settings.classifiedModule_settings.level + '</div>');
     // $('body', context).addClass(Drupal.settings.environment_indicator.cssClass);
  };