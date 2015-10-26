var app = angular.module('quiltApp');

app.factory('apiFactory', function ($http, quilt4Config) {
	
	function apiGet(methodName, success, error) {
		
		console.log(quilt4Config.apiBaseUrl);
		
		$http.get(quilt4Config.apiBaseUrl + methodName)
		.success(function(response)	{
			console.log(response);
			success(response);			
		})
		.error(function(response)
		{
			console.log("Error: " + response);
			error(response);
		});
		
	};
	
	return {
		apiGet: apiGet
	};
	
});