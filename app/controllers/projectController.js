var app = angular.module('quiltApp');

app.controller('projectController', ['$scope', 'projectService', '$stateParams', 'applicationService', function($scope, projectService, $stateParams, applicationService) {
	
	projectService.getProject($stateParams.projectId, function(project){
		$scope.project = project;
	});

	$scope.applications = applicationService.getApplications($stateParams.projectId);

}]);