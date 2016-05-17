angular.module('test').controller('articlesCtrl', ['articlesFact', function (articlesFact) {
    this.getData = function () {
        var promise = articlesFact.getData();

        promise.then(function (value) {
            this.articles = value.listOfArticles;
            this.categories = value.listOfCategories;
        }.bind(this));
    };

    this.selectCategory = function(_id){
        this.selectedCat = {
            id :_id
        };  
    };

    this.getData();
}]);