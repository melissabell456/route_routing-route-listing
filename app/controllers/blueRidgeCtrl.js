"use strict";

angular.module("HighwayApp").controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry) {

  BlueRidgeFctry.getBlueRidgeData()
  .then( (data) => {
    // searching array to return only Blue Ridge data for display
    $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
    console.log($scope.blueRidge);
  });

});