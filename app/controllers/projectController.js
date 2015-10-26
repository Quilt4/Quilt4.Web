var app = angular.module('quiltApp');

app.controller('projectController', ['$scope', 'projectService', '$stateParams', 'applicationService', function($scope, projectService, $stateParams, applicationService) {
	
	projectService.getProject($stateParams.projectId, function(project){
		$scope.project = project;
	});

	applicationService.getApplications($stateParams.projectId, function(applications)
	{
		$scope.applications = applications;
	});

}]);