var app = angular.module('quiltApp');

app.controller('dashboardController', ['$scope', 'projectService', function($scope, projectService) {
	
	$scope.projects = projectService.getProjects();

}]);