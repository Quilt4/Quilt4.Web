var app = angular.module('quiltApp');

app.service('issueTypeService', ['apiFactory', function (apiFactory) {
	
		
	this.getIssueType = function(issueTypeKey, callback) {

		apiFactory.apiGet("issueType/" + issueTypeKey, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})
		
	}

}]);