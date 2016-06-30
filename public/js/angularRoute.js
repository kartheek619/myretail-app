angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'headerController'
	})
	.when('/addProduct', {
		templateUrl: 'views/addProduct.html',
		controller: 'addProductController'
	})
	.otherwise({
		redirectTo: '/'
	});
	;

	$locationProvider.html5Mode(true);

}]);

