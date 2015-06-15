(function() {
  var initializing = true

  var app = angular.module('MysiteApp', ['ngRoute', 'MyDirectives', 'ngAnimate', 'ngMaterial']);

  // service created to pass variable between landing controller and comic controller. 
  app.service('sharedProperties', function ($http) {
    var property = true;

    return {
      getProperty: function () {
        return property;
      },
      setProperty: function(value) {
        property = value;
      },
      getComics: function() {
        return $http.get('src/data.json')
      }
    };
  });

  // controller for the landing page, used to check whether to the landing page is still being shown
  app.controller('LandCtrl', function ($scope, $timeout, sharedProperties) {
    $scope.showLanding = sharedProperties.getProperty();
    $scope.isFlipped = false;

    $scope.toggleLanding = function() {
      $timeout(function() {
        $scope.showLanding = false;
        sharedProperties.setProperty(false);
      }, 1700);
    };
  });

  // controller for the comics, used to grab data from json file and start animations
  app.controller('ComCtrl', function ($scope, $timeout, $mdSidenav, $http, sharedProperties) {
    // $scope.toggleLeft = buildToggler('left');
    $scope.boolChangeClass = true;
    $scope.isSidenavOpen = false;
    $scope.currentcomic = 0;
    $scope.comics = [];
    console.log(sharedProperties.getComics());
    $scope.isDroped = false;
    $scope.aerurex = [{"letter": "A", "valid": false, "id": 0}, {"letter": "E", "valid": false, "id": 1}, {"letter": "R", "valid": false, "id": 2}, {"letter": "U", "valid": false, "id": 3}, {"letter": "R", "valid": false, "id": 4}, {"letter": "E", "valid": false, "id": 5}, {"letter": "X", "valid": false, "id": 6}];

    $scope.$watch(function() { return sharedProperties.getProperty(); }, function(newVal) { 
      if(initializing) {
        initializing = false;
      } else {
        comicStart();        
      }
    }, true);

    var comicStart = function () {
      for(var i=0; i<$scope.aerurex.length; i++) {
        (function(i){ 
          $timeout(function() {
            $scope.aerurex[i].valid = true;
            if(i === 6) {
              $scope.getComics();
              $scope.dropComics();
            };
          }, i * 200);
        })(i);
      }
    }

    $scope.$watch('isSidenavOpen', function(isSidenavOpen) {
      $scope.boolChangeClass = !$scope.boolChangeClass;
    });

    $scope.checkDropValue = function(letterIndex) {
      return $scope.aerurex[letterIndex].valid;
    };

    $scope.getComics = function() {
     sharedProperties.getComics().success(function(data) {
        // $scope.comics = data;
      });
    };

    $scope.dropComics = function() {
      $timeout(function() {
        $scope.isDroped = true;
      }, 500);
    };
  });
  
  // app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $http) {

  //   $scope.toggleLeft = buildToggler('left');
  //   $scope.boolChangeClass = true;
  //   $scope.isSidenavOpen = false;
  //   $scope.currentcomic = 0;
  //   $scope.comics = [];

  //   $scope.$watch('isSidenavOpen', function(isSidenavOpen) {
  //     $scope.boolChangeClass = !$scope.boolChangeClass;
  //   });

  //   // grabs content from data.json file
  //   $http.get('src/data.json').success(function(data) {
  //     $scope.comics = data;
  //   });

  //   function buildToggler(navID) {
  //     var debounceFn = $mdUtil.debounce(function(){
  //           $mdSidenav(navID)
  //             .toggle()
  //             .then(function () {
  //               $log.debug("toggle " + navID + " is done");
  //             });
  //         },300);
  //     return debounceFn;
  //   }

  //   $scope.selectComic = function(setComic) {
  //     $scope.currentcomic = setComic;
  //     $log.debug($scope.currentcomic);
  //   };
 
  //   $scope.isSelected = function(checkComic) {
  //     return $scope.currentcomic === checkComic;
  //   };
  // });

  // app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  //   $scope.close = function () {
  //     $mdSidenav('left').close()
  //       .then(function () {
  //         $log.debug("close LEFT is done");
  //       });

  //   };
  // });
})();