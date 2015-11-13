var app = angular.module('quiltApp');

app.service('dashboardService', ['apiFactory', function (apiFactory) {
	
	//Use cache?

	this.getProjects = function(callback) {
		
		apiFactory.apiGet("dashboard/project", function(response){
			
			callback(response);
			
		}, function(response){
			
			callback(null);
		})

	}

}]);