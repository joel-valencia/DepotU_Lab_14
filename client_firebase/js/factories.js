//The action to call the local API should be here
console.log("loaded factories js");
var app = angular.module('myBlogApp.factories', ['ngResource']);

app.factory('myFactory', ['$resource', function($resource) {
    var f = {};
    
    f.getAllPosts = function() {
        var resource = $resource('https://joel-valencia.firebaseio.com/myblog/posts.json');
        var a = resource.get();
        return a;
        
    }
    
    f.getSinglePost = function(id) {
        var resource = $resource('https://joel-valencia.firebaseio.com/myblog/posts/' + id + '.json');
        var param = {};
        param.id = id;
        return resource.get(param);
        
    }
    
    f.createPost = function(post) {
        var resource = $resource('https://joel-valencia.firebaseio.com/myblog/posts.json');
        var param = post;
        return resource.save(param);
    }
    
    f.editPost = function(post, id) {
        var resource = $resource('https://joel-valencia.firebaseio.com/myblog/posts/' + id + '.json', null,
        {
            'update': { method:'PATCH' }
        });
        var param = {};
        param.id = id;
        return resource.update(param, post);
    }
    
    return f;
}]);


