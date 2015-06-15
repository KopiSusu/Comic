(function() { 
  	var app = angular.module('MyDirectives', []);

	app.directive('sideBar', function() {
	    return {
	      restrict: 'E',
	      templateUrl: 'views/side-bar.html'
	    };
	});

	app.directive('landingPage', function() {
	    return {
	      restrict: 'E',
	      templateUrl: 'views/landing-page.html'
	    };
	});

	app.directive('comicsPage', function() {
	    return {
	      restrict: 'E',
	      templateUrl: 'views/comics-page.html'
	    };
	});

})();