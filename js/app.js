var app = angular.module('app', ['ngRoute']);

app.controller('routeController', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
    };
});

app.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'pages/projects.html',
                controller  : 'projectsController'
            })

            // route for the about page
            .when('/resume', {
                templateUrl : 'pages/resume.html',
                controller  : 'resumeController'
            });

    });

app.controller('projectsController', function($scope) {

});

app.controller('resumeController', function($scope) {

});
