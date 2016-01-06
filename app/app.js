var app = angular.module('quiltApp', ['ui.router', 'ui.bootstrap', 'angular-uuid']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "loginController"
    })
    .state('register', {
      url: "/register",
      templateUrl: "templates/register.html",
      controller: "registerController"
    })
    .state('main', {
      templateUrl: "templates/mainTemplate.html",
      controller: "mainController"
    })
    .state('main.dashboard', {
      url: "/",
      templateUrl: "templates/dashboard.html",
      controller: "dashboardController"
    })
    .state('main.help', {
      url: "/help/:section",
      templateUrl: "templates/help.html",
      controller: "helpController"
    })
    .state('main.createProject', {
      url: "/project/new",
      templateUrl: "templates/createProject.html",
      controller: "createProjectController"
    })
    .state('main.project', {
      url: "/project/:projectId",
      templateUrl: "templates/project.html",
      controller: "projectController"
    })
    .state('main.project.application', {
      url: "/application/:applicationId",
      templateUrl: "templates/application.html",
      controller: "applicationController"
    })
    .state('main.version', {
      url: "/project/:projectId/application/:applicationId/version/:versionId",
      templateUrl: "templates/version.html",
      controller: "versionController"
    })
    .state('main.issueType', {
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
    var seconds = Math.floor((new Date() - new Date(time)) / 1000);
    console.log(getInterval(seconds));
    var intervalLength = getInterval(seconds); // 1 second
    var filter = $filter('timeAgo');
    
    function getInterval(time)
    {
      var interval = Math.floor(seconds / 3600);
      if (interval >= 1) {
          return 60 * 60 * 1000;
      }
      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
          return 60 * 1000;
      }
      
      return 1000;
    };
    
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

app.filter('startFrom', function () {
    return function (input, start) {
        if(input === undefined)
        {
          return null;
        }
        start = +start; //parse to int
        return input.slice(start);
    };
});

app.directive('loading', function() {
  
   function link(scope, element, attrs) {
     
     var display ="block";
      
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