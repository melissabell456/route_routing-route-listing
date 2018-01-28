"use strict";

angular.module("HighwayApp").factory("Hwy66Fctry", function($http, $q) {

  const getHwy66Data = () => {
    return $q((resolve, reject) => {
      $http
      .get("../../data/highways.json")
      .then( (hwyData) => {
        resolve(hwyData.data.highways);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };
  return { getHwy66Data };
});