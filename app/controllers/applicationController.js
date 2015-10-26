var app = angular.module('quiltApp');

app.controller('applicationController', ['$scope', '$stateParams', 'versionService', function($scope, $stateParams, versionService) {
	
	$scope.projectId = $stateParams.projectId;
	$scope.applicationId = $stateParams.applicationId;

	versionService.getVersions($stateParams.projectId, $stateParams.applicationId, function(versions){
		
		$scope.versions = versions;
		
	});

}]);