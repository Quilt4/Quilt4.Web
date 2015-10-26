var app = angular.module('quiltApp');

app.controller('dashboardController', ['$scope', 'projectService', function($scope, projectService) {
	
	projectService.getProjects(function(projects){
		$scope.projects = projects;
	});

}]);