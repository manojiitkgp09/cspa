(function(){
	'use strict'

	angular.module('MenuApp')
	.component('categoryList', {
		bindings: {
			categories: '<',
		},
		templateUrl: 'src/templates/categoryList.template.html'

	});
})();