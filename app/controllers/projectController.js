var app = angular.module('quiltApp');

app.controller('projectController', ['$scope', 'projectService', '$stateParams', 'applicationService', function($scope, projectService, $stateParams, applicationService) {
	
	projectService.getProject($stateParams.projectId, function(project){
		$scope.project = project;
	});

	$scope.loading = true;
	applicationService.getApplications($stateParams.projectId, function(applications)
	{
		$scope.applications = applications;
		$scope.loading = false;
	});

}]);