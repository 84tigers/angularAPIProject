"use strict";
const recipeList = {
    templateUrl: "components/recipe-list/recipeList.html",
    controller: ["$rootScope", "SearchService", function($rootScope, SearchService) {
        const vm = this;
        vm.display = false;
        $rootScope.$on("castRecipes", (event) => {
            vm.recipes = SearchService.getRecipes().data.hits
            vm.animateIn();
        });

        vm.favRecipe = (recipe) => {
            SearchService.addFav(recipe);
        };

        vm.animateIn = () => {
            vm.display = true;
        }

    }]

};

angular.module("App").component("recipeList", recipeList);