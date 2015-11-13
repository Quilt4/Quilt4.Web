var app = angular.module('quiltApp');

app.service('projectService', ['apiFactory', function (apiFactory) {
	
	this.getProject = function(projectId, callback) {
		
		apiFactory.apiGet("project/" + projectId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}
	
	this.getVersions = function(projectId, applicationId, callback) {

		apiFactory.apiGet("project/" + projectId + "/application/" + applicationId + "/version", function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}

}]);