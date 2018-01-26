"use strict";

angular.module("HighwayApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
  .when("/:blueRidgePkwy", {
    templateUrl: "../partials/blueRidgePkwy.html",
    controller: "BlueRidgeCtrl"
  })
  .when("/hwy66", {
    templateUrl: "../partials/hwy66.html",
    controller: "Hwy66Ctrl"
  })
  .otherwise("/");
});