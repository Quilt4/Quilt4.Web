var app = angular.module('quiltApp');

app.controller('projectController', ['$scope', 'projectService', '$stateParams', '$state', '$uibModal', function($scope, projectService, $stateParams, $state, $uibModal) {
	
	$scope.loading = true;
	$scope.userLoading = true;
	
	projectService.getProject($stateParams.projectId, function(project){
		$scope.project = project;
		$scope.loading = false;
	});
    
    projectService.getMembers($stateParams.projectId, function(users){
        $scope.users = users;
        $scope.userLoading = false;
    });
	
	$scope.updateProject = function (project){
				
		$scope.projectSavedSuccess = false;
		
		if(project === null || project === undefined)
			return;
			
		if(project.name === null || project.name === undefined || project.name.length === 0 || project.name.length > 50)
		{
			return;
		}
		
		project.projectKey = project.id;
					
		$scope.settingsLoading = true;
			
		projectService.updateProject(project, function(success){
			
			$scope.settingsLoading = false;
			
			if(success)
			{
				$scope.projectSavedSuccess = true;
			}
			
		});
	}
	
	$scope.hideProjectSavedSuccessAlert = function()
	{		
		$scope.projectSavedSuccess = false;
	}
    
     $scope.inviteMember = function()
     {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: './templates/inviteModel.html',
            controller: 'inviteController'
        });
        
        modalInstance.result.then(function (addModel) {
           console.log(addModel);
           
        }, function () 
        {
            console.log("Cancelled");
        });
        
     }

}]);

