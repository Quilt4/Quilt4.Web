var app = angular.module('quiltApp');

app.controller('helpController', ['$scope', '$stateParams', 'helpService', function($scope, $stateParams, helpService) {	

	$scope.section = {
		name: $stateParams.section,
        detail: $stateParams.detail,
	}

    //TODO: This should be stored in some global context
    // $scope.platforms = [];
    // 
    // $scope.togglePlatform = function(platform) {
    //     
    //     if($scope.platforms.indexOf(platform) == -1)
    //     {
    //         $scope.platforms.push(platform);
    //     }
    //     else
    //     {
    //         $scope.platforms.splice($scope.platforms.indexOf(platform),1);
    //     }
    // };

}]);