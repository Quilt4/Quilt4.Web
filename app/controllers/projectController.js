var app = angular.module('quiltApp');

app.controller('projectController', ['$scope', 'projectService', '$stateParams', function($scope, projectService, $stateParams) {
	
	$scope.loading = true;
	
	projectService.getProject($stateParams.projectId, function(project){
		$scope.project = project;
		$scope.loading = false;
	});

}]);