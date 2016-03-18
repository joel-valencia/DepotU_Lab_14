//The action to call the local API should be here

var app = angular.module('myBlogApp.factories', ['ngResource']);

app.factory('myFactory', ['$resource', function($resource) {
    var f = {};
    
    f.test = function() {
        console.log("factory works");
    }
    
    f.getAllPosts = function() {
        var resource = $resource('/api/posts/');
        return resource.query(function(data) {
            return data;
        });
        
    }
    
    f.getSinglePost = function(id) {
        var resource = $resource('/api/posts/:id');
        var param = {};
        param.id = id;
        return resource.get(param, function(data) {
            return data;
        });
        
    }
    
    f.createPost = function(post) {
        var resource = $resource('/api/posts/');
        var param = post;
        return resource.save(param);
        
    }
    
    return f;
}]);


