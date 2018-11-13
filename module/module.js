"use strict";
angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/search", {templateUrl: "search.html"})
            .when("/favorites", {templateUrl: "components/favorites-page/favorites.html"})
            .when("/home", {template: "<home></home>"})
            .otherwise({redirectTo: "/home"})
    }]);