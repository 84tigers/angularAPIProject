"use strict";
angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/search", {templateUrl: "search.html"})
            .when("/favorites", {templateUrl: "favorites.html"})
            .when("/home", {templateUrl: "home.html"})
    }]);