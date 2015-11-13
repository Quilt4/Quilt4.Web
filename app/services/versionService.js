var app = angular.module('quiltApp');

app.service('versionService', ['apiFactory', function (apiFactory) {
	

	this.getVersion = function(projectId, applicationId, versionId, callback) {

		
		apiFactory.apiGet("project/" + projectId + "/application/" + applicationId + "/version/" + versionId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}

}]);