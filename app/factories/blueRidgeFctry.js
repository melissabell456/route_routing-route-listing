"use strict";

angular.module("HighwayApp").factory("BlueRidgeFctry", function ($http, $q) {

  const getBlueRidgeData = () => {
    return $q((resolve, reject) => {
      $http
      .get("../../data/highways.json")
      .then((hwyData) => {
        resolve(hwyData.data.highways);
      })
      .catch((err) => {
        // console.log(err);
        reject(err);
      });
    });
  };
  return { getBlueRidgeData };
});