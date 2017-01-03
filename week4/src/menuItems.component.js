(function(){
	'use strict'

	angular.module('MenuApp')
	.component('menuItemsList', {
		bindings: {
			menuItems: '<',
		},
		templateUrl: 'src/templates/menuItemsList.template.html'
	});
})();