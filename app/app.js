var app = angular.module('quiltApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('dashboard', {
      url: "/",
      templateUrl: "templates/dashboard.html",
      controller: "dashboardController"
    })
    .state('project', {
      url: "/project/:projectId",
      templateUrl: "templates/project.html",
      controller: "projectController"
    })
    .state('project.application', {
      url: "/application/:applicationId",
      templateUrl: "templates/application.html",
      controller: "applicationController"
    })
    .state('version', {
      url: "/project/:projectId/application/:applicationId/version/:versionId",
      templateUrl: "templates/version.html",
      controller: "versionController"
    })
    .state('issueType', {
      url: "/project/:projectId/application/:applicationId/version/:versionId/issueType/:issueTypeId",
      templateUrl: "templates/issueType.html",
      controller: "issueTypeController"
    })
    
});

app.filter('timeAgo', function() {
  
  return function(date) {
    
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval == 1) {
        return interval + " year ago";
    }
    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval == 1) {
        return interval + " month ago";
    }
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval == 1) {
        return interval + " day ago";
    }
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval == 1) {
        return interval + " hour ago";
    } 
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval == 1) {
        return interval + " minute ago";
    }
    if (interval > 1) {
        return interval + " minutes ago";
    }
    
    return Math.floor(seconds) + " seconds ago";
    
  };

});

app.directive('time', ['$timeout', '$filter', function($timeout, $filter) {

  return function(scope, element, attrs) {
    
    var time = attrs.time;
    var intervalLength = 1000 * 1; // 1 second
    var filter = $filter('timeAgo');
    
    function updateTime() {
      
      element.text(filter(time));
      
    }
    
    function updateLater() {
      
      timeoutId = $timeout(function() {
        
        updateTime();
        updateLater();
        
      }, intervalLength);
    }
    
    element.bind('$destroy', function() {
      
      $timeout.cancel(timeoutId);
      
    });
    
    updateTime();
    updateLater();
    
  };

}]);

app.directive('loading', function() {
  
   function link(scope, element, attrs) {
     
     var display ="block";
          
      // scope.$watch(function(value) {
      //       console.log(value);
      //       console.log(attrs.isloading);
      // }, function()
      // {
      //       console.log(attrs.isloading);
      //   
      // });
      
      attrs.$observe('isloading', function(val){
        if(val == "true")
        {          
          element.removeClass("hide");
          element.addClass("show")
        } else {
          element.removeClass("show");
          element.addClass("hide")
        }
      });
     
     element.html('<div class="loading-container"><div class="loading"></div><div class="loading2" margin-top></div></div>')
     
     
   }
   
   return {link:link}
  
});


// return {
//     template: function(elem, attr) {
//       console.log(attr.isloading);
//       var visibility = "none";
//       if(attr.isloading == "true")
//       {
//         console.log("YAY");
//         visibility = "block";
//       }
//       return '<div style="display:'+visibility+'" class="loading-container"><div id="loading"></div><div id="loading2" margin-top></div></div>'}
//   };
