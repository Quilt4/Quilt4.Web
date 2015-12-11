var app = angular.module('quiltApp');

app.controller('dashboardController', ['$scope', 'dashboardService','accountService', function($scope, dashboardService, accountService) {
		
	$scope.loading = true;
	dashboardService.getProjects(function(projects){
		$scope.projects = projects;
		$scope.loading = false;
	});

}]);