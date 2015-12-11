var app = angular.module('quiltApp');

app.controller('createProjectController', ['$scope', 'projectService', '$stateParams','$state', 'uuid', function($scope, projectService, $stateParams, $state, uuid) {
	
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
					
		project.projectKey = uuid.v4();
					
		$scope.loading = true;
			
		projectService.createProject(project, function(){
			
			$scope.loading = false;
			
			$state.transitionTo('main.project', {projectId:project.projectKey});
			
		});
	}
	
}]);