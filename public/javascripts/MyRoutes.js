var dbevent = angular.module('dbevent',['ngRoute','ngResource','ngSanitize','ui.bootstrap']);

dbevent.config(function($routeProvider){
    $routeProvider.when('/Login',{
        templateUrl:'templates/Login.html',
        controller:'LoginCtrl'
        })
        .when('/',{
        templateUrl:'templates/home.html',
        controller:'homeCtrl'
        }).when('/Dashboard',{
            templateUrl:'templates/Dashboard.html',
            controller:'DashboardCtrl'
        }).when('/Events',{
            templateUrl:'templates/Events.html',
            controller:'EventsCtrl'
        }).when('/Circle',{
            templateUrl:'templates/Circle.html',
            controller:'CircleCtrl'
        }).when('/Levels',{
            templateUrl:'templates/Levels.html',
            controller:'LevelsCtrl'
        }).when('/Settings',{
            templateUrl:'templates/Settings.html',
            controller:'SettingsCtrl'
        }).otherwise({redirectTo:'/'})
})