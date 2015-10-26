var app = angular.module('quiltApp');

app.controller('versionController', ['$scope', '$stateParams', 'versionService', 'projectService', 'applicationService', 'issueTypeService', function($scope, $stateParams, versionService, projectService, applicationService, issueTypeService) {	
	
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
	
	$scope.loading = true;
	
	issueTypeService.getIssueTypes($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, function(issueTypes){
		
		$scope.issueTypes = issueTypes;
		$scope.loading = false;
		
	})

}]);