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


Drupal.behaviors.classifiedModuleBehavior = function (context) {
	var siteLevel = Drupal.settings.classifiedModule_settings.level
	alert("The site classification level is "+siteLevel);
	console.log(siteLevel);
};
