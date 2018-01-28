"use strict";

angular.module("HighwayApp").controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry) {

  BlueRidgeFctry.getBlueRidgeData()
  .then( (data) => {
    // searching array to return only Blue Ridge data for display
    let blueRidge = data.find( hway => hway.abbrev === "blueRidgePkwy");
    // making name and description of highway available for use in partial
    $scope.highwayName = blueRidge.name;
    $scope.highwayDescription = blueRidge.description;
  });

});