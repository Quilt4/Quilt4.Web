var app = angular.module('quiltApp');

app.service('projectService', ['apiFactory', function (apiFactory) {
	
	this.getProjects = function(callback) {
		
		//Use cache?
		
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