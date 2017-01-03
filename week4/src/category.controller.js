(function(){
	'use strict'

	angular.module('MenuApp')
	.controller('CatsCtrl', ['categories', function(categories){
		var catList = this;
		catList.categories = categories;
	}]);
})();