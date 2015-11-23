var app = angular.module('quiltApp');

app.factory('apiFactory', function ($http, quilt4Config) {
	
	function apiGet(methodName, success, error) {
				
		var start = new Date();
		
		//TODO: Handle auth
		$http.get(quilt4Config.apiBaseUrl + methodName)
		
		.success(function(response)	{
			
			var size = sizeof(response);
			console.log((new Date() - start) + " ms: " + size + " bytes");
			console.log(response);
			success(response);		
				
		})
		.error(function(response)
		{
			
			console.log("Error: " + response);
			error(response);
			
		});
		
	};
	
	function apiPost(methodName, data, success, error) {
				
		var start = new Date();
				
		//TODO: Handle auth
		$http.post(quilt4Config.apiBaseUrl + methodName, data)
		
		.success(function(response)	{
			
			var size = sizeof(response);
			console.log((new Date() - start) + " ms: " + size + " bytes");			
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
		
		apiGet: apiGet,
		apiPost: apiPost
		
	};
	
});