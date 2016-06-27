angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
    	.when('/', {
            templateUrl: 'views/main.html',
            controller: 'headerController'
        })
        .when('/appy', {
            templateUrl: 'views/appy.html',
            controller: 'headerController'
        })
        .otherwise({
        redirectTo: '/'
      });
        ;

    $locationProvider.html5Mode(true);

}]);

