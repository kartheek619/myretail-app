var profileControllers = angular.module('profileControllers',[]);

profileControllers.controller('headerController',
  
    function($scope,$http){
	
		$scope.name="kartheek";
		
		
		$http({
			method:'GET',
			url:'/personal/Maremalla'
		}).then(function(response){
			$scope.lname=response.data.lname;
			$scope.fname=response.data.fname;
			$scope.title=response.data.title;
			$scope.phone=response.data.phone;
			$scope.email=response.data.email;
			$scope.picture=response.data.picture;
			$scope.linkedin=response.data.linkedin;
			$scope.github=response.data.github;
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