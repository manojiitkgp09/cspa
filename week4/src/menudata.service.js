(function(){
	'use strict'

	angular.module('data')
	.service('MenuDataService', MDS);

	MDS.$inject = ['$http'];
	function MDS($http){
		var service = this;

		service.getCategories = function(){
			return $http({
				'method': 'GET',
				'url': 'https://davids-restaurant.herokuapp.com/categories.json'
			})
			.then(function(response){
				return response.data;
			}, function(response){
				console.log(response);
			})
		};

		service.getItemsForCategory = function(category_short_name){
			return $http({
				'method': 'GET',
				'url': 'https://davids-restaurant.herokuapp.com/menu_items.json',
				'params': {
					'category': category_short_name
				}
			})
			.then(function(response){
				return response.data.menu_items;
			}, function(response){
				console.log(response);
			})	
		}
		return service;
	}

})();