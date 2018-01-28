"use strict";

angular.module("HighwayApp").controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

  Hwy66Fctry.getHwy66Data()
  .then( (data) => {
    // searching array to return only route 66 data for display
    let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
    // making highwayName and description available for use in partial
    $scope.highwayName = hwy66.name;
    $scope.highwayDescription = hwy66.description;
  });
});