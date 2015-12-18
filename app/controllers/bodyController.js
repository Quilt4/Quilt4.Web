var app = angular.module('quiltApp');

app.controller('bodyController', ['$rootScope', '$scope', function($rootScope, $scope) {
	
	$rootScope.$on('collapsedChanged', function(event, mass) { 
      
	$scope.collapsed = $rootScope.collapsed;
      
    });
	
	
}]);