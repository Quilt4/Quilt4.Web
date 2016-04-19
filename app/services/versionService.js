var app = angular.module('quiltApp');

app.service('versionService', ['apiFactory', function (apiFactory) {
	

	this.getVersion = function(versionId, callback) {

		
		apiFactory.apiGet("version/" + versionId, function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}

}]);