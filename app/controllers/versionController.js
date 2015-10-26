var app = angular.module('quiltApp');

app.controller('versionController', ['$scope', '$stateParams', 'versionService', 'projectService', 'applicationService', 'issueTypeService', function($scope, $stateParams, versionService, projectService, applicationService, issueTypeService) {	
	
	projectService.getProject($stateParams.projectId, function(project){
		$scope.project = project;
	});
	
	applicationService.getApplication($stateParams.projectId, $stateParams.applicationId, function(application){
		$scope.application = application;
	});
	
	versionService.getVersion($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, function(version){
		
		$scope.version = version;
		
	});
	
	issueTypeService.getIssueTypes($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, function(issueTypes){
		
		$scope.issueTypes = issueTypes;
		
	})

}]);