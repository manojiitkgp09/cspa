(function(){
	'use strict'

	angular.module('MenuApp')
	.controller('MenuItemsCtrl', ['menu_items', function(menu_items){
		var MenuItems = this;
		MenuItems.menu_items = menu_items;
	}]);
})();