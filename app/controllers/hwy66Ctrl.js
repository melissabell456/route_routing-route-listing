"use strict";

angular.module("HighwayApp").controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

  Hwy66Fctry.getHwy66Data()
  .then( (data) => {
    // searching array to return only route 66 data for display
    $scope.hwy66 = data.filter( (hway) => hway.abbrev === "hwy66");
    console.log($scope.hwy66);
  });
});