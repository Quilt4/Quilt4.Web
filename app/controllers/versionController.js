var app = angular.module('quiltApp');

app.controller('versionController', ['$scope', '$stateParams', 'versionService',  function($scope, $stateParams, versionService) {	
	
	
	$scope.loading = true;
	versionService.getVersion($stateParams.projectId, $stateParams.applicationId, $stateParams.versionId, function(version){
		
		$scope.version = version;
		$scope.loading = false;
		
	});

}]);