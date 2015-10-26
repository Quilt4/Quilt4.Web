var app = angular.module('quiltApp');

app.controller('dashboardController', ['$scope', 'projectService', function($scope, projectService) {
	
	$scope.loading = true;
	projectService.getProjects(function(projects){
		$scope.projects = projects;
		$scope.loading = false;
	});

}]);