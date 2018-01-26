
//====================================================================================================================
// Module:    HighwayApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueRidgeCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry, $routeParams) {


    BlueRidgeFctry.getBlueRidgeData()
    .then( (data) => {
      console.log(data);
      $scope.hwy = data.filter( hway => hway.abbrev === `${$routeParams}`);
      console.log($scope.hwy);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/blueRidgeFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("BlueRidgeFctry", function ($http, $q) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/hwy66Fctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("Hwy66Fctry", function($http, $q) {

    return { };
  });

}) (angular.module ('HighwayApp', ['ngRoute']));



//====================================================================================================================
// Module:    HighwayApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/:blueRidgePkwy", {
      templateUrl: "../partials/blueRidgePkwy.html",
      controller: "BlueRidgeCtrl"
    })
    .when("/:hwy66", {
      templateUrl: "../partials/hwy66.html",
      controller: "Hwy66Ctrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueRidgeCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry, $routeParams) {


    BlueRidgeFctry.getBlueRidgeData()
    .then( (data) => {
      console.log(data);
      $scope.hwy = data.filter( hway => hway.abbrev === `${$routeParams}`);
      console.log($scope.hwy);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/blueRidgeFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("BlueRidgeFctry", function ($http, $q) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/hwy66Fctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("Hwy66Fctry", function($http, $q) {

    return { };
  });

}) (angular.module ('HighwayApp', ['ngRoute']));



//====================================================================================================================
// Module:    HighwayApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/blueRidgePkwy", {
      templateUrl: "../partials/blueRidgePkwy.html",
      controller: "BlueRidgeCtrl"
    })
    .when("/hwy66", {
      templateUrl: "../partials/hwy66.html",
      controller: "Hwy66Ctrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueRidgeCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry, $routeParams) {


    BlueRidgeFctry.getBlueRidgeData()
    .then( (data) => {
      console.log(data);
      $scope.hwy = data.filter( hway => hway.abbrev === `${$routeParams}`);
      console.log($scope.hwy);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/blueRidgeFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("BlueRidgeFctry", function ($http, $q) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/hwy66Fctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("Hwy66Fctry", function($http, $q) {

    return { };
  });

}) (angular.module ('HighwayApp', ['ngRoute']));



//====================================================================================================================
// Module:    HighwayApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/blueRidgePkwy", {
      templateUrl: "../partials/blueRidgePkwy.html",
      controller: "BlueRidgeCtrl"
    })
    .when("/hwy66", {
      templateUrl: "../partials/hwy66.html",
      controller: "Hwy66Ctrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueRidgeCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry, $routeParams) {


    BlueRidgeFctry.getBlueRidgeData()
    .then( (data) => {
      console.log(data);
      $scope.hwy = data.filter( hway => hway.abbrev === `${$routeParams}`);
      console.log($scope.hwy);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/blueRidgeFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("BlueRidgeFctry", function ($http, $q) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/hwy66Fctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("Hwy66Fctry", function($http, $q) {

    return { };
  });

}) (angular.module ('HighwayApp', ['ngRoute']));



//====================================================================================================================
// Module:    HighwayApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/blueRidgePkwy", {
      templateUrl: "../partials/blueRidgePkwy.html",
      controller: "BlueRidgeCtrl"
    })
    .when("/hwy66", {
      templateUrl: "../partials/hwy66.html",
      controller: "Hwy66Ctrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueRidgeCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry, $routeParams) {

  console.log($routeParams);
    BlueRidgeFctry.getBlueRidgeData()
    .then( (data) => {
      console.log(data);
      $scope.hwy = data.filter( hway => hway.abbrev === `${$routeParams}`);
      console.log($scope.hwy);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/blueRidgeFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("BlueRidgeFctry", function ($http, $q) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/hwy66Fctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("Hwy66Fctry", function($http, $q) {

    return { };
  });

}) (angular.module ('HighwayApp', ['ngRoute']));



//====================================================================================================================
// Module:    HighwayApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/blueRidgePkwy", {
      templateUrl: "../partials/blueRidgePkwy.html",
      controller: "BlueRidgeCtrl"
    })
    .when("/hwy66", {
      templateUrl: "../partials/hwy66.html",
      controller: "Hwy66Ctrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueRidgeCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry, $routeParams) {

    BlueRidgeFctry.getBlueRidgeData()
    .then( (data) => {
      console.log(data);
      $scope.hwy = data.filter( hway => hway.abbrev === `${$routeParams}`);
      console.log($scope.hwy);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/blueRidgeFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("BlueRidgeFctry", function ($http, $q) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/hwy66Fctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("Hwy66Fctry", function($http, $q) {

    return { };
  });

}) (angular.module ('HighwayApp', ['ngRoute']));



//====================================================================================================================
// Module:    HighwayApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/blueRidgePkwy", {
      templateUrl: "../partials/blueRidgePkwy.html",
      controller: "BlueRidgeCtrl"
    })
    .when("/hwy66", {
      templateUrl: "../partials/hwy66.html",
      controller: "Hwy66Ctrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueRidgeCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry) {

    BlueRidgeFctry.getBlueRidgeData()
    .then( (data) => {
      console.log(data);
      $scope.hwy = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.hwy);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/blueRidgeFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("BlueRidgeFctry", function ($http, $q) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/hwy66Fctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("Hwy66Fctry", function($http, $q) {

    return { };
  });

}) (angular.module ('HighwayApp', ['ngRoute']));



//====================================================================================================================
// Module:    HighwayApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/blueRidgePkwy", {
      templateUrl: "../partials/blueRidgePkwy.html",
      controller: "BlueRidgeCtrl"
    })
    .when("/hwy66", {
      templateUrl: "../partials/hwy66.html",
      controller: "Hwy66Ctrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueRidgeCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry) {

    BlueRidgeFctry.getBlueRidgeData()
    .then( (data) => {
      $scope.hwy = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.hwy);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/blueRidgeFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("BlueRidgeFctry", function ($http, $q) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/hwy66Fctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("Hwy66Fctry", function($http, $q) {

    return { };
  });

}) (angular.module ('HighwayApp', ['ngRoute']));



//====================================================================================================================
// Module:    HighwayApp
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .config($routeProvider => {
    $routeProvider
    .when("/blueRidgePkwy", {
      templateUrl: "../partials/blueRidgePkwy.html",
      controller: "BlueRidgeCtrl"
    })
    .when("/hwy66", {
      templateUrl: "../partials/hwy66.html",
      controller: "Hwy66Ctrl"
    })
    .otherwise("/");
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/blueRidgeCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("BlueRidgeCtrl", function($scope, BlueRidgeFctry) {

    BlueRidgeFctry.getBlueRidgeData()
    .then( (data) => {
      $scope.hwyObj = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.hwyObj);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {


  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/blueRidgeFctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("BlueRidgeFctry", function ($http, $q) {

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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/hwy66Fctry.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("Hwy66Fctry", function($http, $q) {

    return { };
  });

}) (angular.module ('HighwayApp', ['ngRoute']));


