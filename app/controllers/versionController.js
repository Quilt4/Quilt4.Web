var app = angular.module('quiltApp');

app.controller('versionController', ['$scope', '$stateParams', 'versionService', 'projectService', 'applicationService', 'issueTypeService', function($scope, $stateParams, versionService, projectService, applicationService, issueTypeService) {	
	
	projectService.getProject($stateParams.projectId, function(project){
		$scope.project = project;
	});
	
	$scope.application = applicationService.getApplication($stateParams.projectId, $stateParams.applicationId);
	$scope.version = versionService.getVersion($stateParams.applicationId, $stateParams.versionId);
	$scope.issueTypes = issueTypeService.getIssueTypes($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId)

}]);