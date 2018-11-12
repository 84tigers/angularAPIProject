"use strict";
const recipeList = {
    templateUrl: "components/recipe-list/recipeList.html",
    controller: ["$rootScope", "SearchService", function($rootScope, SearchService) {
        const vm = this;

        $rootScope.$on("castRecipes", (event) => {
            vm.recipes = SearchService.getRecipes().data.hits
            console.log(vm.recipes);
        });
    }]

};

angular.module("App").component("recipeList", recipeList);