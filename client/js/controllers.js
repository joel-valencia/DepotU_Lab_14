//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('listPostsController', ['$scope', 'myFactory', function($scope, myFactory) {
    console.log("test");
    
    myFactory.test();
    
}]);

controllers.controller('singlePostController', ['$scope', function($scope) {
       
    
}]);

controllers.controller('createPostController', ['$scope', function($scope) {
    
    
}]);