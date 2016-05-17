angular.module('test').controller('articleCtrl', ['$stateParams', 'articlesFact', function ($stateParams, articlesFact) {
    this.article = $stateParams;
}]);