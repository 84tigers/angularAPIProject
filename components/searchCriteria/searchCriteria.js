"use strict";
const searchCriteria = {
    templateUrl: "components/searchCriteria/searchCriteria.html",
    controller: ["$rootScope", "SearchService", function($rootScope, SearchService) {
        const vm = this;
        vm.peanut = "";
        vm.vegan = "";
        vm.vegetarian = "";
        vm.lowCarb = "";
        vm.lowFat = "";

        vm.search = (searchTerms) => {
            SearchService.searchEdamam(searchTerms, vm.peanut, vm.vegan, vm.vegetarian, vm.lowCarb, vm.lowFat, vm.calories, vm.cookTime).then((data) => {
                vm.result = data;
                $rootScope.$broadcast("castRecipes");
                vm.searchTerms = "";
                vm.calories = "";
                vm.cookTime = "";
                vm.peanut = "";
                vm.vegan = "";
                vm.vegetarian = "";
                vm.lowCarb = "";
                vm.lowFat = "";
            });
        };
    }]
}


angular.module("App").component("searchCriteria", searchCriteria);