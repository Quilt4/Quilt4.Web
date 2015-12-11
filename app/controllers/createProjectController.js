var app = angular.module('quiltApp');

app.controller('createProjectController', ['$scope', 'projectService', '$stateParams','$state', function($scope, projectService, $stateParams, $state) {
	
	$scope.project = {
		dashboardColor: "blue"
	}	

	$scope.createProject = function (project){
				
		if(project === null || project === undefined)
			return;
			
		if(project.name === null || project.name === undefined || project.name.length === 0 || project.name.length > 50)
		{
			return;
		}
					
		$scope.loading = true;
			
		projectService.createProject(project, function(projectId){
			
			$scope.loading = false;
			
			$state.transitionTo('main.project', {projectId:projectId});
			
		});
	}
	
}]);