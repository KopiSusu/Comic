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

	app.directive('titleComics', function() {
	    return {
	      restrict: 'E',
	      templateUrl: 'views/title-comics.html'
	    };
	});

	app.directive('gridComics', function() {
	    return {
	      restrict: 'E',
	      templateUrl: 'views/grid-comics.html'
	    };
	});

})();