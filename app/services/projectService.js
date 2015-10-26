var app = angular.module('quiltApp');

app.service('projectService', ['apiFactory', function (apiFactory) {
	
	//Use cache?
		
	this.getProjects = function(callback) {
		
		apiFactory.apiGet("project", function(response){
			
			console.log(response);
			callback(response);
			
		}, function(response){
			
			console.log(response)
			callback(null);
			
		})

	}

	this.getProject = function(projectId, callback) {
		
		apiFactory.apiGet("project/" + projectId, function(response){
			
			console.log(response);
			callback(response);
			
		}, function(response){
			
			console.log(response)
			callback(null);
		})

	}

}]);