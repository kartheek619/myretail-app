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
	.when('/products/:productId',{
		templateUrl: 'views/editProduct.html',
		controller: 'editProductController'
	})
	.otherwise({
		redirectTo: '/'
	});
	

	$locationProvider.html5Mode(true);

}]);

