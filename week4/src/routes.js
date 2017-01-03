(function(){
	'use strict'

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
	function RoutesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
		.state('home', {
			'url': '/',
			'templateUrl': 'src/templates/home.template.html',

		})
		
		.state('categories', {
			'url': '/categories',
			'templateUrl': 'src/templates/categories.template.html',
			'controller': 'CatsCtrl',
			'controllerAs': 'catList',
			'resolve': {
				'categories': ['MenuDataService', function(MenuDataService){
					return MenuDataService.getCategories();
				}]
			}
		})

		.state('items', {
			'url': '/categories/:category_short_name/items',
			'templateUrl': 'src/templates/menu_items.template.html',
			'controller': 'MenuItemsCtrl',
			'controllerAs': 'menuItemsList',
			'resolve': {
				'menu_items': ['MenuDataService','$stateParams', function(MenuDataService, $stateParams){
					return MenuDataService.getItemsForCategory($stateParams.category_short_name);
				}]
			}

		})

	}
})();