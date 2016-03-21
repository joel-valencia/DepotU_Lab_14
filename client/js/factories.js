//The action to call the local API should be here

var app = angular.module('myBlogApp.factories', ['ngResource']);

app.factory('myFactory', ['$resource', function($resource) {
    var f = {};
    
    f.getAllPosts = function() {
        var resource = $resource('/api/posts/');
        return resource.query();
        
    }
    
    f.getSinglePost = function(id) {
        var resource = $resource('/api/posts/:id');
        var param = {};
        param.id = id;
        return resource.get(param);
        
    }
    
    f.createPost = function(post) {
        var resource = $resource('/api/posts/');
        var param = post;
        return resource.save(param);
    }
    
    f.editPost = function(post, id) {
        var resource = $resource('/api/posts/:id', null,
        {
            'update': { method:'PUT' }
        });
        var param = {};
        param.id = id;
        return resource.update(param, post);
    }
    
    return f;
}]);


