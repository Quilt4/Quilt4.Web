var app = angular.module('quiltApp');

app.service('applicationService', ['apiFactory', function (apiFactory) {
	
	//Use cache?

	this.getApplications = function(projectId, callback) {
		
		apiFactory.apiGet("application/" + projectId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}

	this.getApplication = function(projectId, applicationId, callback) {

		apiFactory.apiGet("application/" + projectId + "/" + applicationId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}

}]);