"use strict";
const home = {
    templateUrl: "components/home-page/home.html",
    controller: ["$location", "SearchService", function($location, SearchService) {
        const vm = this;
        vm.goSearch = () => {
            $location.path('/search');
        };
    }]
}

angular.module("App").component("home", home);