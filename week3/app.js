(function(){
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NIDC)
	.service('MenuSearchService', MSS)
	.directive('foundList', foundList)
	.constant('ApiBaseUrl', "https://davids-restaurant.herokuapp.com/");
	
	function foundList(){
		return {
			'templateUrl': "foundList.html",
			'scope': {
				'results': '<',
				'onRemove': '&'

			},
		}
	}
	NIDC.$inject = ['MenuSearchService'];

	function NIDC(MenuSearchService){
		var SearchResults = this;

		SearchResults.inputString = "";
		SearchResults.found = undefined;

		SearchResults.removeItem = function(itemIndex){
			SearchResults.found.splice(itemIndex, 1);
		}

		SearchResults.onRemove = SearchResults.removeItem;

		SearchResults.search = function(){
			MenuSearchService.getMatchedMenuItems(SearchResults.inputString).then(function resolve(result){
				SearchResults.found = result;
			}, function reject(result){
				console.log(result);
			});
		}
	}

	MSS.$inject = ['$http', 'ApiBaseUrl'];
	function MSS($http, ApiBaseUrl){
		var service = this;

		service.getMatchedMenuItems = function(searchTerm){
			return	$http({
				url: ApiBaseUrl+'menu_items.json',
				method: 'GET'
			}).then(function(result){
				var found = []
				var menu_items = result.data.menu_items;
				for (var i=0;i<menu_items.length;i++){
					if (menu_items[i].description.match(searchTerm.toLowerCase())) {
						found.push(menu_items[i]);
					}
				}
				return found;
			}, function(response){

			})
		}

		return service;

	}
})();