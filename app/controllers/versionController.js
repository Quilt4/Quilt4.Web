var app = angular.module('quiltApp');

app.controller('versionController', ['$scope', '$stateParams', 'versionService', 'projectService', 'applicationService', 'issueTypeService', function($scope, $stateParams, versionService, projectService, applicationService, issueTypeService) {	
	$scope.project = projectService.getProject($stateParams.projectId);
	$scope.application = applicationService.getApplication($stateParams.projectId, $stateParams.applicationId);
	$scope.version = versionService.getVersion($stateParams.applicationId, $stateParams.versionId);
	$scope.issueTypes = issueTypeService.getIssueTypes($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId)

}]);