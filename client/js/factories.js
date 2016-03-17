//The action to call the local API should be here

var app = angular.module('myBlogApp.factories', []);

app.factory('myFactory', ['$http', function($http) {
    var f = {};
    
    f.test = function() {
        console.log("factory works");
    }
    
    return f;
}]);


