"use strict";

angular.module("HighwayApp").controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry, $routeParams) {


  BlueRidgeFctry.getBlueRidgeData()
  .then( (data) => {
    console.log(data);
    $scope.hwy = data.filter( hway => hway.abbrev === `${$routeParams}`);
    console.log($scope.hwy);
  });

});