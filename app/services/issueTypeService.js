var app = angular.module('quiltApp');

app.service('issueTypeService', ['apiFactory', function (apiFactory) {
	
	this.getIssueTypes = function(projectId, applicationId, versionId, callback) {

		apiFactory.apiGet("issueType/" + projectId + "/" + applicationId + "/" + versionId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})	

	}
	
	this.getIssueType = function(projectId, applicationId, versionId, issueTypeId, callback) {

		apiFactory.apiGet("issueType/" + projectId + "/" + applicationId + "/" + versionId + "/" + issueTypeId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})
		
	}

}]);