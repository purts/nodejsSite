var app = angular.module('app', ['ngResource', 'ngRoute']);

app.controller('userCtrl', function($scope, $resource) {
    //$scope.users = $resource('http://localhost:3030/api/users').query();
});

/*angular.module('app').config(function ($routProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    
    // $routProvider
    //     .when('/',{templateUrl: 'partials/main',controller: 'mainCtrl'});
});*/