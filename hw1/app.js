(function () {
'use strict';

angular.module('foodChecker', [])

.controller('foodCheckerController', foodCheckerController);

foodCheckerController.$inject = ['$scope'];
function foodCheckerController($scope) {
  $scope.message = "";
  $scope.messageType = "";

  $scope.updateMessage = function () {
    checkIfTooMuch($scope.foodList);
  };

  function checkIfTooMuch(foodString) {
    if(foodString && foodString.trim()) {

      var foodList = foodString.trim().split(',');
      var c = 0;
      for(var i=0; i<foodList.length; i++) {
        if(foodList[i]) c++;
      }

      if(c <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageType = "info";
      } else {
        $scope.message = "Too much!";
        $scope.messageType = "warning";
      }
    } else {
      $scope.message = "Please enter data first";
      $scope.messageType = "warning";
    }
  }
};
})()
