var myretailControllers = angular.module('myretailControllers',[]);

myretailControllers.controller('headerController',

		function($scope,$http,$location, ModalService){

	$scope.name="kartheek";

	$scope.addProduct = function() {
		$location.path('/addProduct');
	};

	$http({
		method:'GET',
		url:"https://myretail-services.herokuapp.com/products"
	}).then(function(response){
		$scope.products = response.data;
	});

});


myretailControllers.controller('addProductController',

		function($scope,$http,$location){

	var product = {};
	var currentPrice = {};

	$scope.addProduct = function(){

		product.productName = $scope.productName;
		product.productId = $scope.productId;
		currentPrice.value = $scope.value;
		currentPrice.currency = "USD";
		product.currentPrice = currentPrice;

		$http({
			method:'POST',
			url:"https://myretail-services.herokuapp.com/products",
			data: product
		}).then(function(response){
			if(response.data.code==="1"){
				$location.path('/');
			}
			else{
				$scope.errorMsg="Error in Saving the database. Please try again.";
			}
		});

	};

	$scope.backToMain = function(){
		$location.path('/');
	};

	$scope.reset = function(){
		$scope.productName=null;
		$scope.productId=null;
		$scope.value=null;
		$scope.errorMsg=null;
	};

});
