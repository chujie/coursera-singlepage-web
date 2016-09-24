(function () {
'use strict';


angular.module('ShoppingListApp', [])
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.controller('ToBuyShoppingController', ToBuyShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var vm = this;

  vm.shoppingList = ShoppingListCheckOffService.getShoppingList();

  vm.boughtItem = function(itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var vm = this;
  vm.boughtList = ShoppingListCheckOffService.getBoughtList();  
}

function ShoppingListCheckOffService() {
    var service = this;
    
    
    var shoppingList = [
        { name: "cookies", quantity: 10 },
        { name: "bread", quantity: 2 },
        { name: "noodle", quantity: 2 },
        { name: "apples", quantity: 5 },
        { name: "cherries", quantity: 5 },
    ];

    var boughtList = [];

    service.boughtItem = function(itemIndex) {
        var tmp = shoppingList.splice(itemIndex, 1);
        boughtList.push(tmp[0]);
    };

    service.getShoppingList = function() {
        return shoppingList;
    };

    service.getBoughtList = function() {
        return boughtList;
    };

}

})();
