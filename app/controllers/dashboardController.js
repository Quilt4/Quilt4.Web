var app = angular.module('quiltApp');

app.controller('dashboardController', ['$scope', 'dashboardService', function($scope, dashboardService) {
	
	$scope.loading = true;
	dashboardService.getProjects(function(projects){
		$scope.projects = projects;
		$scope.loading = false;
	});

}]);