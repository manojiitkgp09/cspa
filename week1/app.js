(function(){
	'use strict'
	angular.module("LunchCheck", [])
	.controller("LunchCheckController", LCC);

	LCC.$inject = ['$scope'];
	
	function LCC($scope){
		$scope.items = "";
		$scope.msgColor = "black";
		$scope.lunchStatusMessage = "";

		$scope.checkItems = function(){
			$scope.lunchStatusMessage = "Please enter data first";
			$scope.msgColor = "red";
			var items = $scope.items.split(",");
			var count = 0
			for (var i=0;i<items.length;i++){
				if (items[i].trim() != ""){
					count++;
				}
			}
			if (count > 0) {
				$scope.msgColor = "green";
				if (count <=3){
					$scope.lunchStatusMessage = "Enjoy!";
				} else{
					$scope.lunchStatusMessage = "Too much!";
				}
			}
		}
	}

})();