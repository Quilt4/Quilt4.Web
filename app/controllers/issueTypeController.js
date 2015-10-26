var app = angular.module('quiltApp');

app.controller('issueTypeController', ['$scope', '$stateParams', 'versionService', 'projectService', 'applicationService', 'issueTypeService', 'issueService', function($scope, $stateParams, versionService, projectService, applicationService, issueTypeService, issueService) {	
    
	projectService.getProject($stateParams.projectId, function(project){
		
		$scope.project = project;
		
	});
	
	applicationService.getApplication($stateParams.projectId, $stateParams.applicationId, function(application){
		
		$scope.application = application;
		
	});	
	
	versionService.getVersion($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, function(version){
		
		$scope.version = version;
		
	});
	
	$scope.issueTypeLoading = true;
	issueTypeService.getIssueType($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, $stateParams.issueTypeId, function(issueType){
		
		$scope.issueType = issueType;
		$scope.issueTypeLoading = false;
		
	})
	
	$scope.loading = true;
	issueService.getIssues($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, $stateParams.issueTypeId, function(issues){
		
		$scope.issues = issues;
		
		$scope.loading = false;
		
	});	
	
}]);