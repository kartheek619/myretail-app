var myretailControllers = angular.module('myretailControllers',[]);

myretailControllers.controller('headerController',
  
    function($scope,$http){
	
		$scope.name="kartheek";

		$http({
			method:'GET',
			url:"https://myretail-services.herokuapp.com/products"
		}).then(function(response){
			$scope.products = response.data;
		});
		
		$http({
			method:'GET',
			url:'/aboutme/Maremalla'
		}).then(function(response){
			$scope.aboutme=response.data.aboutme;
		});
		
		
		$http({
			method:'GET',
			url:'/skills/Maremalla'
		}).then(function(response){
			$scope.tech =response.data.tech;
			$scope.utf =response.data.utf;
			$scope.cit =response.data.cit;
			$scope.buildt =response.data.buildt;
			$scope.others =response.data.others;
		});
		
		$http({
			method:'GET',
			url:'/employment/Maremalla'
		}).then(function(response){
			$scope.employements =response.data.experience;
		});
		
		$http({
			method:'GET',
			url:'/education/Maremalla'
		}).then(function(response){
			$scope.education =response.data.education;
		});


});