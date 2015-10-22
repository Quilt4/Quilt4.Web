var app = angular.module('quiltApp');

app.controller('applicationController', ['$scope', '$stateParams', 'versionService', function($scope, $stateParams, versionService) {
	
	$scope.projectId = $stateParams.projectId;
	$scope.applicationId = $stateParams.applicationId;

	$scope.versions = versionService.getVersions($scope.applicationId);

}]);