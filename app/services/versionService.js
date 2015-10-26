var app = angular.module('quiltApp');

app.service('versionService', ['apiFactory', function (apiFactory) {
	
	//Use cache?

	this.getVersions = function(projectId, applicationId, callback) {

		apiFactory.apiGet("version/" + projectId + "/" + applicationId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}

	this.getVersion = function(projectId, applicationId, versionId, callback) {

		
		apiFactory.apiGet("version/" + projectId + "/" + applicationId + "/" + versionId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}

}]);