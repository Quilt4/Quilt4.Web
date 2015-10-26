var app = angular.module('quiltApp');

app.controller('issueTypeController', ['$scope', '$stateParams', 'versionService', 'projectService', 'applicationService', 'issueTypeService', 'issueService', function($scope, $stateParams, versionService, projectService, applicationService, issueTypeService, issueService) {	
    
	$scope.projectLoading = true;
	projectService.getProject($stateParams.projectId, function(project){
		
		$scope.project = project;
		$scope.projectLoading = false;
		
	});
	
	$scope.applicationLoading = true;	
	applicationService.getApplication($stateParams.projectId, $stateParams.applicationId, function(application){
		
		$scope.application = application;
		$scope.applicationLoading = false;
		
	});	
	
	$scope.versionLoading = true;
	versionService.getVersion($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, function(version){
		
		$scope.version = version;
		$scope.versionLoading = false;
		
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