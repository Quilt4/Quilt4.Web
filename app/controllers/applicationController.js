var app = angular.module('quiltApp');

app.controller('applicationController', ['$scope', '$stateParams', 'projectService', function($scope, $stateParams, projectService) {
	
	$scope.projectId = $stateParams.projectId;
	$scope.applicationId = $stateParams.applicationId;

	$scope.loading = true;
	projectService.getVersions($stateParams.projectId, $stateParams.applicationId, function(versions){
		
		$scope.versions = versions;
		$scope.loading = false;
		
	});

}]);