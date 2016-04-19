var app = angular.module('quiltApp');

app.controller('issueTypeController', ['$scope', '$stateParams', 'issueTypeService', function($scope, $stateParams, issueTypeService) {	
    
	$scope.currentPage = 1;
	
	$scope.loading = true;
	issueTypeService.getIssueType($stateParams.issueTypeKey, function(issueType){
		
		$scope.issueType = issueType;
		$scope.loading = false;
		
	})
	
}]);