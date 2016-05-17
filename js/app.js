angular.module('test', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('articles',{
        url : '/articles',
        templateUrl : 'templates/articles.html',
        controller : 'articlesCtrl',
        controllerAs : 'asC'
    });

    $stateProvider.state('article/:id',{
        url : '/article/:id?title&body&image&datePublished&categoryId$categories',
        templateUrl : 'templates/article.html',
        controller : 'articleCtrl',
        controllerAs : 'aC'
    });

    $urlRouterProvider.otherwise('/articles');
});