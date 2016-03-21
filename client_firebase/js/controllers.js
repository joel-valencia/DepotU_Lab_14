//Logic for page actions here. 
console.log("loaded controllers js");
var controllers = angular.module('myBlogApp.controllers', []);

controllers.controller('listPostsController', ['$scope', 'myFactory', function ($scope, myFactory) {

    var posts = myFactory.getAllPosts();
    
    posts.$promise.then(function(data) {
        // convert to array
        var dataArray = Object.keys(data).map(function(k) {
            return data[k]
        });
        
        // store database key in object.id
        var keyArray = Object.keys(data);
        for (var i in keyArray) {
            var key = keyArray[i];
            dataArray[i].id = key;
        }
        
        // delete unneeded stuff from array
        for (var i in dataArray) {
            if (typeof dataArray[i].createdAt == 'undefined') {
                dataArray.splice(i);
            }
        }
        
        console.log(dataArray);
        //dataArray = dataArray.reverse();
        
        
        $scope.posts = dataArray;
    })
  
}]);

controllers.controller('singlePostController', ['$scope', 'myFactory', '$routeParams', function ($scope, myFactory, $routeParams) {
    var id = $routeParams.id;
    console.log(id);
    
    $scope.post = myFactory.getSinglePost(id);
    $scope.id = id;
    
}]);

controllers.controller('createPostController', ['$scope', 'myFactory', function ($scope, myFactory) {
    
    $scope.send = function() {
        var post = {}
        post.title = $scope.title;
        post.author = $scope.author;
        post.content = $scope.content;
        post.createdAt = {".sv": "timestamp"};
        post = JSON.stringify(post);
        
        console.log(post);
        myFactory.createPost(post).$promise.then(function(result) {
            $scope.result = "Posted!";
        }
        )
    }
}]);

controllers.controller('editPostController', ['$scope', 'myFactory', '$routeParams', function ($scope, myFactory, $routeParams) {
    var id = $routeParams.id;
    
    $scope.post = myFactory.getSinglePost(id);
    
    $scope.send = function() {
        var post = {}
        post.title = $scope.post.title;
        post.author = $scope.post.author;
        post.content = $scope.post.content;
        //post.createdAt = {".sv": "timestamp"};
        post = JSON.stringify(post);
        
        myFactory.editPost(post, id).$promise.then(function(result) {
            $scope.result = "Edited!";
        });
    };
}]);