var app = angular.module('quiltApp');

app.controller('projectController', ['$scope', 'projectService', '$stateParams', 'applicationService', function($scope, projectService, $stateParams, applicationService) {
	
	$scope.projectLoading = true;
	
	projectService.getProject($stateParams.projectId, function(project){
		$scope.project = project;
		$scope.projectLoading = false;
	});

	$scope.loading = true;
	applicationService.getApplications($stateParams.projectId, function(applications)
	{
		$scope.applications = applications;
		$scope.loading = false;
	});

}]);