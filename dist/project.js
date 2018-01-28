
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      console.log(data, "hwy66");
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      $scope.hwy66 = data.find(hway => hway.abbrev === "hwy66");
      console.log(data, "hwy66");
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      $scope.hwy66 = data.find(hway => hway.abbrev === "hwy66");
    });
    console.log($scope.hwy66);
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      $scope.hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
    });
    console.log($scope.hwy66);
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      $scope.hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
    });
    console.log($scope.hwy66);
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      $scope.hwy66 = data.filter( (hway) => hway.abbrev === "hwy66");
    });
    console.log($scope.hwy66);
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      $scope.hwy66 = data.filter( (hway) => hway.abbrev === "hwy66");
      console.log($scope.hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      $scope.hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log($scope.hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return on route 66 data for display
      $scope.hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log($scope.hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      $scope.hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log($scope.hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      $scope.hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log($scope.hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      $scope.hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log($scope.hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      $scope.hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log($scope.hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      $scope.hwy66 = data.filter( (hway) => hway.abbrev === "hwy66");
      console.log($scope.hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.filter( (hway) => hway.abbrev === "hwy66");
      $scope.highwayName = hwy66.name;
      console.log($scope.highwayName);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      $scope.highwayName = hwy66.name;
      console.log($scope.highwayName);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      $scope.highwayName = hwy66.name;
      console.log($scope.highwayName);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      $scope.highwayName = hwy66.name;
      console.log(hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.filter( (hway) => hway.abbrev === "hwy66");
      $scope.highwayName = hwy66.name;
      console.log(hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      $scope.highwayName = hwy66.name;
      console.log(hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      hwy66.forEach(element => {
        $scope.highwayName = hwy66.name;
        $scope.highwayDescription = hwy66.description;
      });
      // console.log(hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      hwy66.forEach(element => {
        $scope.highwayName = hwy66.name;
        $scope.highwayDescription = hwy66.description;
      });
      console.log($scope.highwayDescription);
      console.log($scope.highwayName);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      hwy66.forEach(element => {
        $scope.highwayName = element.name;
        $scope.highwayDescription = element.description;
      });
      console.log($scope.highwayDescription);
      console.log($scope.highwayName);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66")[0];
      console.log(hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66")[0];
      console.log(hwy66[0]);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log(hwy66[0]);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log(hwy66.indexOf[0]);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log(hwy66[0]);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      console.log(hwy66);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      $scope.highwayName = hwy66.name;
      $scope.highwayDescription = hwy66.description;
      console.log($scope.highwayName);
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.filter( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      // making highwayName and description available for use in partial
      $scope.highwayName = hwy66.name;
      $scope.highwayDescription = hwy66.description;
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      $scope.blueRidge = data.find( hway => hway.abbrev === "blueRidgePkwy");
      console.log($scope.blueRidge);
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      // making highwayName and description available for use in partial
      $scope.highwayName = hwy66.name;
      $scope.highwayDescription = hwy66.description;
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      let blueRidge = data.find( hway => hway.abbrev === "blueRidgePkwy");
      // making name and description of highway available for use in partial
      $scope.highwayName = blueRidge.name;
      $scope.highwayDescription = blueRidge.description;
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      // making highwayName and description available for use in partial
      $scope.highwayName = hwy66.name;
      $scope.highwayDescription = hwy66.description;
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      let blueRidge = data.find( hway => hway.abbrev === "blueRidgePkwy");
      // making name and description of highway available for use in partial
      $scope.highwayName = blueRidge.name;
      $scope.highwayDescription = blueRidge.description;
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      // making highwayName and description available for use in partial
      $scope.highwayName = hwy66.name;
      $scope.highwayDescription = hwy66.description;
    });
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

    const getHwy66Data = () => {
      return $q((resolve, reject) => {
        $http
        .get("../../data/highways.json")
        .then( (hwyData) => {
          console.log(hwyData.data.highways);
          resolve(hwyData.data.highways);
        })
        .catch((err) => {
          reject(err);
        });
      });
    };
    return { getHwy66Data };
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
      // searching array to return only Blue Ridge data for display
      let blueRidge = data.find( hway => hway.abbrev === "blueRidgePkwy");
      // making name and description of highway available for use in partial
      $scope.highwayName = blueRidge.name;
      $scope.highwayDescription = blueRidge.description;
    });

  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/hwy66Ctrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("Hwy66Ctrl", function($scope, Hwy66Fctry) {

    Hwy66Fctry.getHwy66Data()
    .then( (data) => {
      // searching array to return only route 66 data for display
      let hwy66 = data.find( (hway) => hway.abbrev === "hwy66");
      // making highwayName and description available for use in partial
      $scope.highwayName = hwy66.name;
      $scope.highwayDescription = hwy66.description;
    });
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

}) (angular.module ('HighwayApp', ['ngRoute']));


