var app = angular.module('quiltApp');

app.service('issueTypeService', ['apiFactory', function (apiFactory) {
	
		
	this.getIssueType = function(projectId, applicationId, versionId, issueTypeId, callback) {

		apiFactory.apiGet("project/" + projectId + "/application/" + applicationId + "/version/" + versionId + "/issueType/" + issueTypeId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})
		
	}

}]);