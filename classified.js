//alert("Hello World! from .info file");
//console.log("hellow world from .nfo");

/*
Drupal.behaviors.classifiedModuleBehavior = function (context) {
    alert("Hello World!");
	console.log("hellow world");
  };
*/
Drupal.behaviors.classifiedModuleBehavior = function (context) {
	alert(Drupal.settings.classifiedModule_settings.alert_msg);
	console.log(Drupal.settings.classifiedModule_settings.alert_msg);
};