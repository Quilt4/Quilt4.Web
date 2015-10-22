var app = angular.module('quiltApp');

app.controller('projectController', ['$scope', 'projectService', '$stateParams', 'applicationService', function($scope, projectService, $stateParams, applicationService) {
	
	$scope.project = projectService.getProject($stateParams.projectId);

	$scope.applications = applicationService.getApplications($stateParams.projectId);

}]);