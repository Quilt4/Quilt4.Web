
app.controller('inviteController', ['$scope', '$uibModalInstance', '$timeout', 'projectService', function ($scope, $uibModalInstance, $timeout, projectService) {

    // This is what you will bind the filter to
    $scope.filterText = '';

    // Instantiate these variables outside the watch
    var filterTextTimeout,
        init = false;

    $scope.$watch('invite.email', function (val) {        

        if (filterTextTimeout) $timeout.cancel(filterTextTimeout);


        filterTextTimeout = $timeout(function() {

            if(!init) {
                
                init = true;
                return;
                
            }

            
            projectService.getUsers(val, function(users){
                
                $scope.users = users;
                
            });

        }, 250); //Wait 250 ms
        
    })


    $scope.ok = function (invite) {

        $uibModalInstance.close(invite);

    };

    $scope.cancel = function () {

        $uibModalInstance.dismiss('cancel');

    };
  
}]);