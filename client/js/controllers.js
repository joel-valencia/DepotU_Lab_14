//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('listPostsController', ['$scope', 'myFactory', function ($scope, myFactory) {
    console.log("test");
    myFactory.test();
    
    $scope.posts = myFactory.getAllPosts();
  
}]);

controllers.controller('singlePostController', ['$scope', 'myFactory', '$routeParams', function ($scope, myFactory, $routeParams) {
    var id = $routeParams.id;
    
    $scope.post = myFactory.getSinglePost(id);
    
}]);

controllers.controller('createPostController', ['$scope', function ($scope) {
    
    
}]);