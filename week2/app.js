// (function(){
// 	angular.module('ShoppingListCheckOff', [])
// 	.controller('ToBuyController', ToBuyController)
// 	.controller('AlreadyBoughtController', AlreadyBoughtController)
// 	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// 	//because of function/variable hoisting the below line works
// 	ToBuyController.$inject = ['ShoppingListCheckOffService'];
// 	function ToBuyController(ShoppingListCheckOffService){
// 		var list1 = this;
// 		list1.name = "";
// 		list1.qty = "";

// 		list1.buyList = ShoppingListCheckOffService.getBuyItems();

// 		list1.addItem = function(name, qty){
// 			var item = {
// 				name: name,
// 				qty: qty
// 			};
// 			ShoppingListCheckOffService.addBuyItem(item);
// 			list1.name = "";
// 			list1.qty = "";
// 		}

// 		list1.removeItem = function(itemIndex){
// 			ShoppingListCheckOffService.removeBuyItem(itemIndex);
// 		};

// 		list1.isListEmpty = function(){
// 			return list1.buyList.length == 0 ? true : false; 
// 		};


// 	}

// 	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
// 	function AlreadyBoughtController(ShoppingListCheckOffService){
// 		var list2 = this;

// 		list2.boughtList = ShoppingListCheckOffService.getBoughtItems();

// 		list2.isListEmpty =function(){
// 			return list2.boughtList.length == 0 ?  true : false; 
// 		}
// 	}

// 	function ShoppingListCheckOffService(){
// 		var service = this;

// 		var buyList = [{
// 			'name': 'cookies',
// 			'qty': 5
// 		}];

// 		var boughtList = [];

// 		service.getBuyItems = function(){
// 			return buyList;
// 		};

// 		service.getBoughtItems = function(){
// 			return boughtList;
// 		};

// 		service.addBuyItem = function(item){
// 			buyList.push(item);
// 		}

// 		service.removeBuyItem = function(itemIndex){
// 			var item = buyList.splice(itemIndex, 1);
// 			boughtList.push(item[0]);
// 		}

// 		return service;
// 	} 
// })();

!function(){function t(t){var e=this;e.name="",e.qty="",e.buyList=t.getBuyItems(),e.addItem=function(n,i){var o={name:n,qty:i};t.addBuyItem(o),e.name="",e.qty=""},e.removeItem=function(e){t.removeBuyItem(e)},e.isListEmpty=function(){return 0==e.buyList.length?!0:!1}}function e(t){var e=this;e.boughtList=t.getBoughtItems(),e.isListEmpty=function(){return 0==e.boughtList.length?!0:!1}}function n(){var t=this,e=[{name:"cookies",qty:5}],n=[];return t.getBuyItems=function(){return e},t.getBoughtItems=function(){return n},t.addBuyItem=function(t){e.push(t)},t.removeBuyItem=function(t){var i=e.splice(t,1);n.push(i[0])},t}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",n),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();