var app = angular.module('quiltApp');

app.controller('issueTypeController', ['$scope', '$stateParams', 'versionService', 'projectService', 'applicationService', 'issueTypeService', 'issueService', function($scope, $stateParams, versionService, projectService, applicationService, issueTypeService, issueService) {	
    
	projectService.getProject($stateParams.projectId, function(project){
		$scope.project = project;
	});
	
	$scope.application = applicationService.getApplication($stateParams.projectId, $stateParams.applicationId);
	$scope.version = versionService.getVersion($stateParams.applicationId, $stateParams.versionId);
	$scope.issueType = issueTypeService.getIssueType($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, $stateParams.issueTypeId);
	$scope.issues = issueService.getIssues($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, $stateParams.issueTypeId);
	
	
}]);