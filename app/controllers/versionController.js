var app = angular.module('quiltApp');

app.controller('versionController', ['$scope', '$stateParams', 'versionService', 'projectService', function($scope, $stateParams, versionService, projectService) {
	
	$scope.project = projectService.getProject($stateParams.projectId);

	$scope.version = versionService.getVersion($stateParams.applicationId, $stateParams.versionId);

}]);