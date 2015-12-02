var app = angular.module('myApp', ['ui.router']);
app.config(function( $stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('site',{
        url:'/site',
        templateUrl:'partials/site.html'
    })
    .state('site.home',{
        url:'/home',
        templateUrl:'partials/home.html'
    })
     .state('site.about',{
        url:'/about',
        templateUrl:'partials/about.html'
    })
     .state('site.contact',{
        url:'/contact',
        templateUrl:'partials/contact.html'
    })
    .state('site.contact',{
        url:'/work',
        templateUrl:'partials/work.html'
    });
    $urlRouterProvider.otherwise('/site/home');
});