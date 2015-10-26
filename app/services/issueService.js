var app = angular.module('quiltApp');

app.service('issueService', ['apiFactory', function (apiFactory) {
	
		this.getIssues = function(projectId, applicationId, versionId, issueTypeId, callback) {

		apiFactory.apiGet("issue/" + projectId + "/" + applicationId + "/" + versionId + "/" + issueTypeId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}

}]);