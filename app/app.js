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