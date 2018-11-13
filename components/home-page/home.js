"use strict";
const home = {
    templateUrl: "components/home-page/home.html",
    controller: ["$rootScope", "SearchService", function($rootScope, SearchService) {
        const vm = this;
        vm.recipes = SearchService.getFeaturedRecipes().data.hits
        // vm.features = () => {
        //     SearchService.featuredRecipes().then((data) => {
        //         vm.result = data;
        //         $rootScope.$broadcast("castFeaturedRecipes");
        //     });
        // };

        // vm.search = (searchTerms) => {
        //     SearchService.searchEdamam(searchTerms).then((data) => {
        //         vm.result = data;
        //         $rootScope.$broadcast("castRecipes");
        //     });
        // };
    }]
}


angular.module("App").component("home", home);