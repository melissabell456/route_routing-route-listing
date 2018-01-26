"use strict";

angular.module("HighwayApp").controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry) {

  BlueRidgeFctry.getBlueRidgeData()
  .then( (data) => {
    $scope.hwyObj = data.filter( hway => hway.abbrev === "blueRidgePkwy");
    console.log($scope.hwyObj);
  });

});