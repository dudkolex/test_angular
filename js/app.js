angular.module('test', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('articles',{
        url : '/articles',
        templateUrl : 'templates/articles.html',
        controller : 'articlesCtrl',
        controllerAs : 'asC'
    });

    $stateProvider.state('article',{
        url : '/article',
        templateUrl : 'templates/article.html',
        controller : 'articlesCtrl',
        controllerAs : 'aC'
    });

    $urlRouterProvider.otherwise('/articles');
});