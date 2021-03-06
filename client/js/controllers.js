//Logic for page actions here. 

var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('listPostsController', ['$scope', 'myFactory', function ($scope, myFactory) {
    $scope.posts = myFactory.getAllPosts();
    
    $scope.viewSinglePost = function(id) {
        console.log(id);
    };
}]);

controllers.controller('singlePostController', ['$scope', 'myFactory', '$routeParams', function ($scope, myFactory, $routeParams) {
    var id = $routeParams.id;
    
    $scope.post = myFactory.getSinglePost(id);
}]);

controllers.controller('createPostController', ['$scope', 'myFactory', function ($scope, myFactory) {
    $scope.send = function() {
        var post = {}
        post.title = $scope.title;
        post.author = $scope.author;
        post.content = $scope.content;
        
        myFactory.createPost(post).$promise.then(function(result) {
            $scope.result = "Posted!";
        });
    };
}]);

controllers.controller('editPostController', ['$scope', 'myFactory', '$routeParams', function ($scope, myFactory, $routeParams) {
    var id = $routeParams.id;
    
    $scope.post = myFactory.getSinglePost(id);
    
    $scope.send = function() {
        var post = {}
        post.title = $scope.post.title;
        post.author = $scope.post.author;
        post.content = $scope.post.content;
        
        myFactory.editPost(post, id).$promise.then(function(result) {
            $scope.result = "Edited!";
        });
    };
}]);