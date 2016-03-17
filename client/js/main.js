//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ['myBlogApp.controllers', 'myBlogApp.factories', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/blog', {
        templateUrl: 'views/listposts.html',
        controller: 'listPostsController'
    })
    .when('/blog/:id', {
        templateUrl: 'views/singlepost.html',
        controller: 'singlePostController'
    })
    .when('/compose', {
        templateUrl: 'views/createpost.html',
        controller: 'createPostController'
    }).otherwise({
        redirectTo: '/blog'
    });
}]);