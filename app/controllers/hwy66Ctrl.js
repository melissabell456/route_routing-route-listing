"use strict";

angular.module("HighwayApp").controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

  Hwy66Fctry.getHwy66Data()
  .then( (data) => {
    console.log(data, "hwy66");
  });
});